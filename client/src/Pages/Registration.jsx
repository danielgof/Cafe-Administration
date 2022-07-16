import React, { Component } from 'react'
import axios from 'axios'



export default class Registration extends Component {
  render() {
    return (
      <div>
        <form id="Registration" className="Registration">
        <h2 className="sname"> Registration </h2>
        <div className="Registration">
            <label>
                <span>login</span>
                <input type="text" name="login" value=""></input>
            </label>
            <label>
                <span>password</span>
                <input type="text" name="password" value=""></input>
            </label>
            <label>
                <span>email</span>
                <input type="text" name="email" value=""></input>
            </label>
        </div>
          <div className="submit">
              <input className="btn_save" id="quantity" type="submit" value="Register"></input>
          </div>
        </form>
      </div>
    )
  }
}



axios.post('/user', document.querySelector('#Registration'))
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
