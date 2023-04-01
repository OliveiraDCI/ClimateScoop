import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../context/ContextProvider";

function GoogleButton() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Context);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      document.getElementById("signIn").hidden = true;
    }
  }, []);

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
    console.log("token", token);
    const loginUser = await axios.post("/api/user/login", { token: token });

    if (loginUser.data.success) {
      setUser(loginUser.data.user);
      sessionStorage.setItem("user", JSON.stringify(loginUser.data.user));

      console.log("token: ", token);
      console.log("user: ", loginUser.data.user);

      document.getElementById("signIn").hidden = true;
    }
  }

  function handleSignOut(e) {
    setUser(null);
    document.getElementById("signIn").hidden = false;
    google.accounts.id.disableAutoSelect();
    sessionStorage.removeItem("user");
    if (window.location.pathname !== "/articles") navigate("/");
  }

  return (
    <>
      <div
        className="google-button"
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
            width: "36px",
            margin: "0 auto",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img
            tabIndex="0"
            src={user?.picture}
            alt="user image"
            width={"100%"}
            height={"auto"}
            style={{ borderRadius: "50%" }}
          />

          <button
            className="logout-btn"
            onClick={handleSignOut}
            style={{
              width: "103%",
              height: "103%",
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
