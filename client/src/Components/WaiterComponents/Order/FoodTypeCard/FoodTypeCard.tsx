import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';
import AddOrder from '../AddOrder/AddOrder';
import OrderContext from '../OrderContext/OrderContext';

const FoodTypeCard = (props: any) => {
  const [showAll, setShowAll] = useState(false);
  const [message, setMessage] = useState("");
  const toggleShowAll = () => setShowAll(!showAll);
  const [data, getData] = useState([])
  // const { food, setFood } = useContext(OrderContext);
    // const addData = () => {
    //     let copy = Object.assign([], food);
    //     copy.push('кот');
    //     copy.push('на');
    //     copy.push('крыше');
    //     // setFood(copy);
    //     // console.log(food);
    // }
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
          {props.type.toUpperCase()}S
        </Card.Title>
        <Card.Text className='text-card'>
          <div className='person-card-img-container'>
            <div className='person-card-img'>
              {/* <img src={logo} alt="foodlogo"/> */}
            </div>
          </div>
        </Card.Text>
          <Button className='btn-dop-info'
            onClick={toggleShowAll}>
            All information
          </Button>
          <Toast show={showAll} onClose={toggleShowAll}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">All info</strong>
            </Toast.Header>
            <Toast.Body>
            <table className='table-positions'>
              <thead>
                <tr>
                <th>Type</th>
                <th>Title</th>
                <th>Add to Cart</th>
                </tr>
              </thead>
              {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item["type"]}</td>
                    <td>{item["title"]}</td>
                    {/* <td><AddOrder food={item["title"]}/></td> */}
                    {/* <td><button className='add-item-to-cart' onClick={addData}>Add item to Cart</button></td> */}
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