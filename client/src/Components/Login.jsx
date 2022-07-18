import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
// import axios from 'axios'


const Login = () => {
  
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const body = JSON.stringify({
      login: login,
      password: password})

    const headers = new Headers({
        "Content-Type": "application/json",
        "Content-Length": JSON.stringify(body).length
    })
      console.log(JSON.stringify({
        name: login,
        password: password}))
      let res = await fetch("http://localhost:8081/login", {
        method: "POST",
        mode: "cors",
        headers: headers,
        body: body
      });
      // let resJson = await res.json();
      if (res.status === 200) 
      {
        setLogin("");
        setPassword("");
        setMessage("User login successfully");
        navigate("/home");
      } 
      else 
      {
        setMessage("Wrong login or password");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={login}
          placeholder="login"
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}


export default Login