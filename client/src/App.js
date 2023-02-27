import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { gapi } from "gapi-script";
import { useState, useEffect } from "react";
import axios from "axios";

const clientId = clientId;

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("data register", data);

    const response = await axios.post("/user/register", data);
    console.log("response register", response.data);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("data login", data);

    const response = await axios.post("/login/password", data);
    console.log("response login", response.data);
  };

  return (
    <>
      <form>
        <section>
          <label>email</label>
          <input
            value={data.value}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            id="email"
            name="email"
            type="text"
          />
        </section>
        <section>
          <label>Password</label>
          <input
            id="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            name="password"
            type="password"
          />
        </section>
        <button onClick={(e) => handleRegister(e)}>Register</button>
        <LoginButton />

        <button onClick={(e) => handleLogin(e)}>Login</button>
        <LogoutButton />
      </form>
    </>
  );
}

export default App;
