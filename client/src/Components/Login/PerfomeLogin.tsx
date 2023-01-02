import { createContext } from "react";

const LoginContext = createContext({
  isAuth: Boolean,
  setLogin: (login: any) => {}
});

export default LoginContext;