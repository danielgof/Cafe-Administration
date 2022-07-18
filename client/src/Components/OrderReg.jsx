import { useState } from "react";

const OrderRegistration = () => {


    const [adress, setAdress] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [order, setOrder] = useState("");
    const [sum, setSum] = useState("");

    const [message, setMessage] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
      const body = JSON.stringify({
        adress: adress,
        name: name,
        lastname: lastname,
        email: email,
        dob: dob,
        phonenumber: phonenumber,
        order: order,
        sum: sum
      })
  
      const headers = new Headers({
          "Content-Type": "application/json",
          "Content-Length": JSON.stringify(body).length
      })
        console.log(JSON.stringify({
            adress: adress,
            name: name,
            lastname: lastname,
            email: email,
            dob: dob,
            phonenumber: phonenumber,
            order: order,
            sum: sum
        }))
        let res = await fetch("http://localhost:8083/api/order", {
          method: "POST",
          mode: "cors",
          headers: headers,
          body: body
        });
        // let resJson = await res.json();
        if (res.status === 200) 
        {
            setAdress("");
            setName("");
            setLastname("");
            setEmail("");
            setPhonenumber("");
            setDob("");
            setAdress("");
            setOrder("");
            setSum("");
            setMessage("Order registered successfully");
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
            value={adress}
            placeholder="adress"
            onChange={(e) => setAdress(e.target.value)}
          />
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
          <input
            type="text"
            value={order}
            placeholder="order"
            onChange={(e) => setOrder(e.target.value)}
          />
          <input
            type="text"
            value={sum}
            placeholder="sum"
            onChange={(e) => setSum(e.target.value)}
          />
  
          <button type="submit">Register order</button>
  
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    );
}

export default OrderRegistration