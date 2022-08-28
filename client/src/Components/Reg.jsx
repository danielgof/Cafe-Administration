import React, { useState } from 'react'


const Reg = () => {
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
        <div className='form'>
            <form className='data' onSubmit={handleSubmit}>
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
        </div>
    </div>
  );
}


export default Reg