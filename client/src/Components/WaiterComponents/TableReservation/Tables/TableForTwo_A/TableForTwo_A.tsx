import { useState } from 'react'
import './TableForTwo_A.css'

const TableForTwo_A = () => {
  const [showColor, setColor] = useState(false);
  const toggleShowA = () => setColor(!showColor);
  const color = showColor ? "green" : "red";
  console.log("reserved: ", color);
  return (
    <>
      <div className="rectangleA" onClick={toggleShowA} style={{backgroundColor: color}}>
        <p className="text">2</p>
      </div>
    </>
  )
}
export default TableForTwo_A;