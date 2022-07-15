// import React, { useEffect, useState, useRef } from 'react'

const Login = () => {
    return (

      <form id="settings" class="settings">
        <h2 class="sname" align="center">  </h2>
        <div class="login">
            <label>
                <span>login</span>
                <input type="text" name="login" value="011"></input>
            </label>
        </div>
        <div class="submit">
            <input class="btn_save" id="quantity" type="submit" value="Сохранить настройки"></input>
        </div>
      </form>
  )
}


export default Login