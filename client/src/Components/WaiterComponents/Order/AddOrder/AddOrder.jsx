import React, { useContext } from 'react';
import OrderContext from '../OrderContext/OrderContext';

const AddOrder = (props) => {
    // console.log(props.food);
    const { food, setFood } = useContext(OrderContext);
    const addData = () => {
        let copy = Object.assign([], food);
        copy.push('кот');
        copy.push('на');
        copy.push('крыше');
        setFood(copy);
        console.log(food);
    }
    return (
        <>
            <button className='add-to-cart' onClick={addData}>Add Food to Cart</button>
        </>
    )
}
export default AddOrder;