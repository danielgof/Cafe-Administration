import React, { useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';
import './EmployeeCard.css';

const EmployeeCard = (props: any) => {
  const [showAddInfo, setShowAddInfo] = useState(false);
  const [showChUserInfo, setShowChUserInfo] = useState(false);
  const [message, setMessage] = useState("");
  const showAdditionalInfo = () => setShowAddInfo(!showAddInfo);
  const toggleShowB = () => setShowChUserInfo(!showChUserInfo);
  const deleteEmployee = async (e: any) => {
    e.preventDefault();
    try {
    const body = JSON.stringify({
      id: props.id
    })
  
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    console.log(JSON.stringify({
      id: props.id
    }))
    let res = await fetch("http://localhost:8080/api/v1/employee/delete", {
      method: "DELETE",
      mode: "cors",
      headers: requestHeaders,
      body: body
    });
      if (res.status === 200) {
        setMessage(`User ${props.name} was deleted from database`);
      } 
      else {
        setMessage("A mistake occured when deleting user from database");
      }
    } catch (err) {
      console.log(err);
    }
  }
    return (
      <Card className='container'>
        <Card.Body>
          <Card.Title>
            <CloseButton className='delete-person'
            onClick={deleteEmployee} />
          </Card.Title>
          <Card.Text className='text-card'>
            <div className='person-card-img-container'>
              <div className='person-card-img'>
                <img src="https://eu.ui-avatars.com/api/?name=John+Doe&size=150" alt="avatar"/>
              </div>
              <div className='person-card-maindata'>
                Position: {props.position}
                <br />
                Name: {props.name}
                <br />
                Lastname: {props.lastname}
              </div>
            </div>
          </Card.Text>
            <Button className='btn-dop-info'
              onClick={showAdditionalInfo}>
              Additional ingo
            </Button>
            <Button className='btn-dop-info'
              onClick={toggleShowB}>
              Change user's info
            </Button>
            <Toast className='person-show-dop-info' show={showAddInfo} onClose={showAdditionalInfo}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Additional info</strong>
              </Toast.Header>
              <Toast.Body>
                Salary: {props.salary}
                <br />
                Department: {props.department}
                <br />
              </Toast.Body>
            </Toast>
        </Card.Body>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </Card>
    );
}
export default EmployeeCard;