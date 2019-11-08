import React, { useState} from "react";

function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
      })
    
    const handleChange = (event) => {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      })
    }

    return (
        <form>
            <input type="text" name="emial" placeholder="Email" value={data.email} onChange={handleChange}></input>
            <input type="text" name="password" placeholder="Password" value={data.password} onChange={handleChange}></input>
            <button type="submit">Sign In</button>
        </form>
    )

}

export default Login;