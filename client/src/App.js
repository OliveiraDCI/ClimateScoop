import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

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
  });

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
  }

  return (
    <>
      <h1>ClimateScoop</h1>
      <div
        id="signIn"
        style={{
          width: "fit-content",
          margin: "0 auto",
        }}
      ></div>

      {user && (
        <div
          style={{
            width: "100%",
            margin: "0 auto",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img
            src={user.picture}
            alt="user"
            width={"34px"}
            height={"auto"}
            style={{ borderRadius: "50%" }}
          ></img>
          <h4>{user.name}</h4>
        </div>
      )}
      {user && (
        <button
          onClick={handleSignOut}
          style={{
            width: "100%",
          }}
        >
          Sign Out
        </button>
      )}
    </>
  );
}

export default App;
