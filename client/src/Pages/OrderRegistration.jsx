import React, { Component } from 'react';



export default class OrderRegistration extends Component {
  render() {
    return (
      <div>
        <form id="OrderRegistration" class="OrderRegistration">
          <h2 class="sname" align="center"> Order Registration </h2>
          <div class="OrderRegistration">
              <label>
                  {/* <span>OrderRegistration</span> */}
                  <input type="text" name="login" value="011"></input>
              </label>
          </div>
          <div class="submit">
              <input class="btn_save" id="quantity" type="submit" value="Сохранить настройки"></input>
          </div>
        </form>
        <a href="/home">
          <button>
            Home
          </button>
        </a>
      </div>
    )
  }
}
