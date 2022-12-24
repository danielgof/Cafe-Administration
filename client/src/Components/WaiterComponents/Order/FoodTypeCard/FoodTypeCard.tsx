import React, { useState, useEffect } from 'react';
// import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';

const FoodTypeCard = (props: any) => {
  const [showAll, setShowAll] = useState(false);
  const [message, setMessage] = useState("");
  const toggleShowAll = () => setShowAll(!showAll);
  const [data, getData] = useState([])
  const URL = `http://localhost:8080/api/v1/food/${props.type}s`;
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = () => {
    fetch(URL)
      .then((res) =>
        res.json())
      .then((response) => {
        console.log(response.result);
        getData(response);
      })
  }
  console.log(data);
  
  return (
    <Card className='container'>
      <Card.Body>
        <Card.Title>
          {props.type}s
        </Card.Title>
        <Card.Text className='text-card'>
          <div className='person-card-img-container'>
            <div className='person-card-img'>
              <img src="https://eu.ui-avatars.com/api/?name=John+Doe&size=150" alt="avatar"/>
            </div>
            <div className='person-card-maindata'>
              Должность: {props.position}
              <br />
              Имя: {props.name}
              <br />
              Фамилия: {props.lastname}
            </div>
          </div>
        </Card.Text>
          <Button className='btn-dop-info'
            onClick={toggleShowAll}>
            Дополнительная информация
          </Button>
          <Toast show={showAll} onClose={toggleShowAll}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Доп.инфа</strong>
            </Toast.Header>
            <Toast.Body>
            <table className='table-positions'>
              <thead>
                <tr>
                <th>Type</th>
                <th>Title</th>
                </tr>
              </thead>
              {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item["type"]}</td>
                    <td>{item["title"]}</td>
                    <br></br>
                  </tr>
                ))}
              </table>
            </Toast.Body>
          </Toast>
      </Card.Body>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </Card>
  )
}
export default FoodTypeCard;