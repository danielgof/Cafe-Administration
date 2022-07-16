// import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

const Login = () => {
    return (
      <div>
        <form id="Login" className="Login">
          <h2 className="Login" align="center"> Login </h2>
          <div className="login">
              <label>
                  <span>login</span>
                  <input type="text" name="login" value="qqqq"></input>
              </label>
              <label>
                  <span>password</span>
                  <input type="text" name="password" value="wwwww"></input>
              </label>
          </div>
        
          <div className="submit">
            <input className="btn_save" id="quantity" type="submit" value="Enter"></input>
        </div>
        </form>
        <btn ahref="">

        </btn>
      </div>
  )
}


let data = {}
let form = document.forms["Login"];
if (form) 
{
  window.addEventListener('load', function() {
    
    function getData() {

      let fd = new FormData(form);
      
      for (let [key, prop] of fd) {
        data[key] = prop;
      }
      
      console.log(data);
    }
    
    form.addEventListener("submit", function(e){
      e.preventDefault();
      getData();
    });
  });    
}


let form1 = document.forms["Login"];
if (form1)
{
  form1.addEventListener('submit', function(e) {
    e.preventDefault();

    // fetch("http://localhost:8081/login", {
    //   mode: 'cors',
    //   credentials: 'include',
    //   method: 'POST',
    //   headers: headers,
    //   body: JSON.stringify(data, null, 2)
    // })
    // .then((text)=>{
    //   if (text["status"] === "200") {
    //     console.log(text["status"])
    //   }
    //   if (text["status"] === "400") {
    //     console.log(text["status"])
    //   }
    //   console.log("data: ", text);
    // }).catch(e=>{
    //   console.log(e);
    // })

    axios.post("http://localhost:8081/login", {
      data: JSON.stringify(data, null, 2)
    })
    .then(function (response) {
      if (response["status"] == "200") {
        console.log(response["status"])
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  })
}


export default Login