import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../LoginContext";
import './LoginWaiter.css';

const LoginWaiter = () => {
    const URL = 'http://localhost:8080/api/v1/auth';
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, setLogin } = useContext(LoginContext);
    const clicker = () => {
        setLogin(true);
    }
    let handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const body = JSON.stringify({
        username: username,
        password: password})
        const requestHeaders = new Headers({
            "Content-Type": "application/json",
            "Content-Length": JSON.stringify(body).length
        })
        // const requestHeaders: HeadersInit = new Headers();
        // requestHeaders.set('Content-Type', 'application/json');
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
            clicker(true);
            console.log(login);
            navigate("/home_waiter");
        } else {

        }
    } catch (err) {
      console.log(err);
    }};
    return (
        <>
            <form className="login-waiter-form" onSubmit={handleSubmit}>
                <h3>Waiter Login</h3>
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
        </>
    )
}
export default LoginWaiter;