import React, { useState } from 'react'
import './TableForThree.css';

const TableForThree = () => {
  const [showColor, setColor] = useState(false);
  const toggleShowA = () => setColor(!showColor);
  const color = showColor ? "green" : "red";
  console.log("reserved: ", color);
  return (
    <>
      <div className="circle" onClick={toggleShowA} style={{backgroundColor: color}}>
        <p className="text">3</p>
      </div>
    </>
  )
}
export default TableForThree;