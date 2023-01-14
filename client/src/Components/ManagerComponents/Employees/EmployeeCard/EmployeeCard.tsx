import React, { useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';
import './EmployeeCard.css';

const EmployeeCard = (props: any) => {
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [message, setMessage] = useState("");
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    const handleClick = async (e: any) => {
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
      let res = await fetch("http://127.0.0.1:5000/api/v1/delete_person", {
        method: "DELETE",
        mode: "cors",
        headers: requestHeaders,
        body: body
      });
        // let resJson = await res.json();
        if (res.status === 200) {
          setMessage(`Пользователь ${props.name} был удалён из базы данных`);
          // navigate("/home");
        } 
        else {
          setMessage("Произошла ошибка при удалении пользователя");
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
            onClick={handleClick} />
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
              onClick={toggleShowA}>
              Additional ingo
            </Button>
            <Button className='btn-dop-info'
              onClick={toggleShowB}>
              Change user's info
            </Button>
            <Toast className='person-show-dop-info' show={showA} onClose={toggleShowA}>
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
            {/* <Toast className='person-change-info' show={showB} onClose={toggleShowB}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">изменение информации пользователя</strong>
              </Toast.Header>
              <Toast.Body>
                <UpdFirstname id={props.id}/>
                <UpdLastname id={props.id}/>
               
                <UpdUserPosition id={props.id}/>
              </Toast.Body>
            </Toast> */}
        </Card.Body>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </Card>
    );
}
export default EmployeeCard;