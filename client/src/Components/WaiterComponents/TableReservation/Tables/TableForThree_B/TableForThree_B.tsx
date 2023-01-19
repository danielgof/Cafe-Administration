import React, { useState } from 'react'
import './TableForThree_B.css';

const TableForThree_B = () => {
    const [showColor, setColor] = useState(false);
    const toggleShowA = () => setColor(!showColor);
    const color = showColor ? "green" : "red";
    console.log("reserved: ", color);
    return (
      <>
        <div className="circleB" onClick={toggleShowA} style={{backgroundColor: color}}>
          <p className="text">3</p>
        </div>
      </>
    )
}
export default TableForThree_B;