import { useState } from 'react'
import './TableForTwo_D.css'

const TableForTwo_D = () => {
  const [showColor, setColor] = useState(false);
  const toggleShowA = () => setColor(!showColor);
  const color = showColor ? "green" : "red";
  console.log("reserved: ", color);
  return (
    <>
      <div className="rectangleD" onClick={toggleShowA} style={{backgroundColor: color}}>
        <p className="text">2</p>
      </div>
    </>
  )
}
export default TableForTwo_D;