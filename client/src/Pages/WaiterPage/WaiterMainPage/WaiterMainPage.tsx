import Header from '../../../Components/WaiterComponents/Header/Navbar';
import Map from '../../../Components/WaiterComponents/TableReservation/Map/Map';
import './MainPage.css';
// import map from './plan.png';

const WaiterMainPage = () => {
  return (
    <>
      <Header />
      {/* <p className='waiter-main-page-title'>Main Page</p> */}
      <Map />
      {/* <img className='waiter-main-page-map' src={map}/> */}
    </>
  )
}
export default WaiterMainPage;