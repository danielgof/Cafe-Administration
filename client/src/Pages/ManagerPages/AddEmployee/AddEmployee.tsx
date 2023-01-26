import { useState } from 'react'
import ManagerHeader from '../../../Components/ManagerComponents/Header/ManagerHeader';
import './AddEmployee.css'

const AddEmployee = () => {
    const URL = 'http://localhost:8080/api/v1/employee/save';
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [dob, setDob] = useState("");
    
    let handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
        const body = JSON.stringify({
        dob: dob,
        position: [],
        name: name, 
        lastname: lastname})
        // const requestHeaders = new Headers({
        //     "Content-Type": "application/json",
        //     "Content-Length": JSON.stringify(body).length
        // })
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('Content-Type', 'application/json');
        console.log(JSON.stringify({
            dob: dob,
            position: [],
            name: name, 
            lastname: lastname}))
        let res =  await fetch(URL, {
            method: "POST",
            mode: "cors",
            headers: requestHeaders,
            body: body
        });
        if (res.status === 200) {
            setName("");
            setLastname("");
        } else {

        }
    } catch (err) {
      console.log(err);
    }};
    return (
        <>
            <ManagerHeader />
            <form className="register-employee-form" onSubmit={handleSubmit}>
                <h3>Employee Register</h3>
                <label>Name</label>
                <input
                type="text"
                value={name}
                placeholder="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                />
                <label>Lastname</label>
                <input
                type="text"
                value={lastname}
                placeholder="lastname"
                id="lastname"
                onChange={(e) => setLastname(e.target.value)}
                />
                <label>Date of Birth</label>
                <input
                type="text"
                value={dob}
                placeholder="dob"
                id="dob"
                onChange={(e) => setDob(e.target.value)}
                />

                <button className="login" type="submit">Login</button>
            </form>
        </>
    )
}
export default AddEmployee