import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

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
            id='email'
            name='email'
            type='text'
          />
        </section>
        <section>
          <label>Password</label>
          <input
            id='password'
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            name='password'
            type='password'
          />
        </section>
        <button onClick={(e) => handleRegister(e)}>Register</button>
        <button onClick={(e) => handleLogin(e)}>Login</button>
      </form>
    </>
  );
}

export default App;
