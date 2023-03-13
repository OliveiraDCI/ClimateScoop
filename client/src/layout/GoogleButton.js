import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../context/ContextProvider";

function GoogleButton() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Context);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_ID,
      callback: handleResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signIn"), {
      type: "icon",
      shape: "circle",
      theme: "outline",
      size: "medium",
    });
  }, [user]);

  async function handleResponse(response) {
    const token = response.credential;
    const loginUser = await axios.post("/api/user/login", { token: token });

    if (loginUser.data.success) {
      setUser(loginUser.data.user);
      document.getElementById("signIn").hidden = true;
    }
  }

  function handleSignOut(e) {
    setUser(null);
    document.getElementById("signIn").hidden = false;
    google.accounts.id.disableAutoSelect();
    navigate("/");
  }

  return (
    <>
      <div
        tabIndex="0"
        id="signIn"
        style={{
          width: "fit-content",
          margin: "0 auto",
        }}
      ></div>

      {user && (
        <div
          className="profile-img"
          style={{
            width: "100%",
            margin: "0 auto",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img
            tabIndex="0"
            src={user?.picture}
            alt="user image"
            width={"38px"}
            height={"auto"}
            style={{ borderRadius: "50%" }}
          />

          <button
            className="logout-btn"
            onClick={handleSignOut}
            style={{
              width: "38px",
              height: "38px",
            }}
          >
            logout
          </button>
        </div>
      )}
    </>
  );
}

export default GoogleButton;
