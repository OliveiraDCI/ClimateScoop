import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data", data);

    const response = await axios.post("/user/register", data);
    console.log("response register", response.data);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <button>Register</button>
      </form>
    </>
  );
}

export default App;
