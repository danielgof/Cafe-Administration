import { useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../PerfomeLogin";

const LoginManager = () => {
  const URL = 'http://localhost:8080/api/v1/auth';
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isAuth, setLogin } = useContext(LoginContext);
    const value = useMemo(() => ({ isAuth, setLogin }), [isAuth, setLogin]);

    console.log(isAuth);
    let handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
        const body = JSON.stringify({
        username: username,
        password: password})
        // const requestHeaders = new Headers({
        //     "Content-Type": "application/json",
        //     "Content-Length": JSON.stringify(body).length
        // })
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('Content-Type', 'application/json');
        console.log(JSON.stringify({
            username: username,
            password: password}))
        let res = await fetch(URL + "/login", {
            method: "POST",
            mode: "cors",
            headers: requestHeaders,
            body: body
        });
        if (res.status === 200) {
            setUsername("");
            setPassword("");
            setLogin(true);
            console.log("isAuth value: ", isAuth);
            navigate("/home_manager");
        } else {
            setLogin(false); 
            console.log("isAuth value: ", isAuth);
        }
    } catch (err) {
      console.log(err);
    }};
    return (
        <>
        <LoginContext.Provider value={value}>
            <form className="login-waiter-form" onSubmit={handleSubmit}>
                <h3>Manager Login</h3>
                <label>Username</label>
                <input
                type="text"
                value={username}
                placeholder="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                type="text"
                value={password}
                placeholder="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                />

                <button className="login" type="submit">Login</button>
            </form>
        </LoginContext.Provider>
    </>
  )
}
export default LoginManager;