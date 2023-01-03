import { createContext } from "react";

const LoginContext = createContext({
  isAuth: Boolean,
  setLogin: (login) => {}
});

export default LoginContext;