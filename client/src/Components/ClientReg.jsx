<<<<<<< HEAD
import { useState } from "react";
import "./Login.css"
// import axios from 'axios'


const ClientRegistration = () => {
  
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const body = JSON.stringify({
      name: name,
      lastname: lastname,
      email: email,
      dob: dob,
      phonenumber: phonenumber
    })

    const headers = new Headers({
        "Content-Type": "application/json",
        "Content-Length": JSON.stringify(body).length
    })
      console.log(JSON.stringify({
        name: name,
        lastname: lastname,
        email: email,
        dob: dob,
        phonenumber: phonenumber
      }))
      let res = await fetch("http://localhost:8082/api/client", {
        method: "POST",
        mode: "cors",
        headers: headers,
        body: body
      });
      // let resJson = await res.json();
      if (res.status === 200) 
      {
        setName("");
        setLastname("");
        setEmail("");
        setPhonenumber("");
        setDob("");
        setMessage("User added to database successfully");
        // navigate("/home");
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
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={lastname}
          placeholder="lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={dob}
          placeholder="dob"
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="text"
          value={phonenumber}
          placeholder="phonenumber"
          onChange={(e) => setPhonenumber(e.target.value)}
        />

        <button type="submit">Add client</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}


=======
import { useState } from "react";
import "./ClientReg.css"
// import axios from 'axios'


const ClientRegistration = () => {
  
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const body = JSON.stringify({
      name: name,
      lastname: lastname,
      email: email,
      dob: dob,
      phonenumber: phonenumber
    })

    const headers = new Headers({
        "Content-Type": "application/json",
        "Content-Length": JSON.stringify(body).length
    })
      console.log(JSON.stringify({
        name: name,
        lastname: lastname,
        email: email,
        dob: dob,
        phonenumber: phonenumber
      }))
      let res = await fetch("http://localhost:8082/api/client", {
        method: "POST",
        mode: "cors",
        headers: headers,
        body: body
      });
      // let resJson = await res.json();
      if (res.status === 200) 
      {
        setName("");
        setLastname("");
        setEmail("");
        setPhonenumber("");
        setDob("");
        setMessage("User added to database successfully");
        // navigate("/home");
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
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={lastname}
          placeholder="lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={dob}
          placeholder="dob"
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="text"
          value={phonenumber}
          placeholder="phonenumber"
          onChange={(e) => setPhonenumber(e.target.value)}
        />

        <button type="submit">Add new user</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}


>>>>>>> fcd647004f1b6a8017ded6183d91fa7eb7264aa3
export default ClientRegistration