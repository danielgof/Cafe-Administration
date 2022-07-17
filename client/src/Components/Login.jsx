import { useState } from "react";
import "./Login.css"
// import axios from 'axios'


const Login = () => {
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
        setMessage("User created successfully");
      } 
      else 
      {
        setMessage("Some error occured");
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


// let data = {}
// let form = document.forms["Login"];
// if (form) 
// {
//   window.addEventListener('load', function() {
    
//     function getData() {

//       let fd = new FormData(form);
      
//       for (let [key, prop] of fd) {
//         data[key] = prop;
//       }
      
//       console.log(data);
//     }
    
//     form.addEventListener("submit", function(e){
//       e.preventDefault();
//       getData();
//     });
//   });    
// }


// let form1 = document.forms["Login"];
// if (form1)
// {
//   form1.addEventListener('submit', function(e) {
//     e.preventDefault();

//     axios.post("http://localhost:8081/login", {
//       data: JSON.stringify(data, null, 2)
//     })
//     .then(function (response) {
//       if (response["status"] == "200") {
//         console.log(response["status"])
//       }
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   })
// }


export default Login