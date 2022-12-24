import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginWaiter.css';
// import PerfomeLogin from "../PerfomeLogin";

const Login = () => {
    const URL: string = 'http://localhost:8080/api/v1/auth';
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState<boolean>(false);
    // const { isAuth } = PerfomeLogin();
    // console.log(isAuth);
    let handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
        const body = JSON.stringify({
        username: username,
        password: password})
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('Content-Type', 'application/json');
        console.log(JSON.stringify({
            username: username,
            password: password}))
        console.log(login);
        let res = await fetch(URL + "/login", {
            method: "POST",
            mode: "cors",
            headers: requestHeaders,
            body: body
        });
        console.log(res.text)
        const permitLogin = () => {
            // console.log("hello from login");
            setLogin(true);
            console.log(login);
        }
        // let resJson = await res.json();
        if (res.status === 200) {
            setUsername("");
            setPassword("");
            // var isAuth = true;
            // ProtectedRouts({isAuth})
            // console.log(`login state ${login}`);
            // setLogin((prevState) => !prevState);
            navigate("/home_waiter");
            permitLogin();
            // console.log(`login state ${login}`);
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
export default Login;