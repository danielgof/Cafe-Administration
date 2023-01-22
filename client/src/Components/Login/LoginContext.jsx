import React from 'react'

const context = {
	isAuth : true
}

let callback = () => {}

export const LoginContext = React.createContext(context)

export const setLoginContext = (newContext) => {
	callback(newContext)
}

export const setLoginContextChange = (newCallback) => {
	callback = newCallback
}
// import { createContext } from "react";

// const LoginContext = createContext({
//   isAuth: Boolean,
//   setLogin: (login) => {}
// });

// export default LoginContext;