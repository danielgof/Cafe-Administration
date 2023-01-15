import React, { useState, useContext } from 'react'
import OrderContext from '../OrderContext/OrderContext';
import './CompleteOrder.css';

const CompleteOder = () => {
  const URL = 'http://localhost:8080/api/v1/order';
  const [recipient, setRecipient] = useState("");
  const [date, setDate] = useState("");
  // const [content, setContent] = useState("");
  // const { food } = useContext(OrderContext);
  const food = ["", "", ""];
  // const recipient = "";
  // const date = "";
  console.log(food);
  let handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const body = JSON.stringify({
      recipient: recipient,
      date: date
    })
      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set('Content-Type', 'application/json');
      // const requestHeaders = new Headers({
      //   "Content-Type": "application/json",
      //   "Content-Length": JSON.stringify(body).length
      // })
      console.log(JSON.stringify({
        date: date,
        recipient: recipient
      }))
        let res = await fetch(URL + "/save_order", {
            method: "POST",
            mode: "cors",
            headers: requestHeaders,
            body: body
        });
        if (res.status === 200) {
          // setRecipient("");
          // setDate("");
          // setContent("");
        } else {
        }
    } catch (err) {
      console.log(err);
    }};
  return (
    <>
      <form className="order-complete-form" onSubmit={handleSubmit}>
        <h3>Order Details</h3>
        <label>Recipient</label>
        <input
        type="text"
        value={recipient}
        placeholder="recipient"
        id="recipient"
        onChange={(e) => setRecipient(e.target.value)}
        />
        <label>Date</label>
        <input
        type="text"
        value={date}
        placeholder="date"
        id="date"
        onChange={(e) => setDate(e.target.value)}
        />
        <label>Content</label>
        {/* <input
        type="text"
        value={content}
        placeholder="content"
        id="content"
        onChange={(e) => setContent(e.target.value)}
        /> */}
        {food.map((val, i) => (
          <div key={i}>
          <li>data in array: { val }</li>
          </div>
        ))}

        <button className="send-order" type="submit">Complete Order</button>
      </form>
    </>
  )
}
export default CompleteOder;