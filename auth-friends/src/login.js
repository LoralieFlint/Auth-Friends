import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [error, setError] = useState();
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        setError(err.response.data.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        name="username"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
      ></input>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default Login;
