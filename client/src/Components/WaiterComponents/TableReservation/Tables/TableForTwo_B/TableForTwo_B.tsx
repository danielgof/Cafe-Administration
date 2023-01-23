import React, { useState } from 'react'
import './TableForTwo_B.css';

const TableForTwo_B = () => {
  const [showColor, setColor] = useState(false);
  const toggleShowA = () => setColor(!showColor);
  const color = showColor ? "green" : "red";
  console.log("reserved: ", color);
  return (
    <>
      <div className="rectangleB" onClick={toggleShowA} style={{backgroundColor: color}}>
        <p className="text">2</p>
      </div>
    </>
  )
}
export default TableForTwo_B;