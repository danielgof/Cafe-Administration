import React from 'react'
import Header from '../../../Components/WaiterComponents/Header/Navbar';
import FoodPage from '../../../Components/WaiterComponents/Order/FoodPage/FoodPage';

const OrderPage = () => {
  return (
    <>
      <Header />
      <p>order details</p>
      <FoodPage itemsPerPage={2}/>
    </>
  )
}
export default OrderPage;