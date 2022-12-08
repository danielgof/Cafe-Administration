import React, { useState } from 'react'
import "./style/Registration.css"
// import axios from 'axios'



const Registration = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const body = JSON.stringify({
      login: login,
      password: password,
      email: email
    })

    const headers = new Headers({
        "Content-Type": "application/json",
        "Content-Length": JSON.stringify(body).length
    })
      console.log(JSON.stringify({
        login: login,
        password: password,
        email: email
      }))
      let res = await fetch("http://localhost:8081/register", {
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
        setEmail("");
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
    <div className="App">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={login}
          placeholder="Login"
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="Mobile Number"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
      <a href="/">
          <button>
            Login
          </button>
      </a>
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


export default Registration