import React, { Component } from 'react'
import Drinks from '../Components/Food/Drinks.jsx';
import Desserts from '../Components/Food/Desserts';
import Salads from '../Components/Food/Salads';
import SeaFood from '../Components/Food/SeaFood.jsx';
import Starters from '../Components/Food/Starters.jsx';
import Steaks from '../Components/Food/Steaks.jsx';
import HorisontalScroll from 'react-scroll-horizontal'
import './Menu.css'



export default class Menu extends Component {
  render() {
    return (
      <div className='container'>
        <div className="scroll__container">
          <Drinks />
          <Desserts />
          <Salads />
          <SeaFood />
          <Starters />
          <Steaks />  
        </div>
      </div>
    )
  }
}


// export default class Menu extends Component {
//   render() {
//     return(
//     <div className="scroll__container">
//       <div className="skin__option">
//         <p>Black</p>
//       </div>
//       <div className="skin__option">
//         <p>Blue</p>
//       </div>
//       <div className="skin__option">
//         <p>Red</p>
//       </div>
//       <div className="skin__option">
//         <p>Yellow</p>
//       </div>
//       <div className="skin__option">
//         <p>Green</p>
//       </div>
//     </div>
//     )
//   }
// }


{/* <Drinks />
<Desserts />
<Salads />
<SeaFood />
<Starters />
<Steaks />   */}