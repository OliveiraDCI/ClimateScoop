import { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "578869188853-6ejajqimjgjqv493ausg6j9h8i3hj971.apps.googleusercontent.com",
      callback: handleResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline",
      size: "medium",
    });
  });

  function handleResponse(response) {
    const token = response.credential;
    console.log("Encoded JWT ID token: ", token);

    // bellow, I was sending the token, but I want to change to send the user obj and check if the register function is handling it properly forst - refactor it.

    if (user) axios.post("/api/user/profile", user);

    // axios.post("/api/user/profile", {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });

    const userObj = jwt(response.credential);
    console.log("userObj: ", userObj);

    setUser(userObj);
    document.getElementById("signIn").hidden = true;
  }

  function handleSignOut(e) {
    setUser(null);
    document.getElementById("signIn").hidden = false;
  }

  return (
    <>
      <h1>ClimateScoop</h1>
      <div id="signIn"></div>

      {user && (
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      )}
      {user && <button onClick={handleSignOut}>Sign Out</button>}
    </>
  );
}

export default App;
