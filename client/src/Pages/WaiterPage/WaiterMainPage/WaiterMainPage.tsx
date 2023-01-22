import Header from '../../../Components/WaiterComponents/Header/Navbar';
import logo from './DC.png';
import './WaiterMainPage.css';

const WaiterMainPage = () => {
  return (
    <>
      <Header />
      <div className='logo-cafe'> 
        <img 
          src={logo}
          // className="d-inline-block align-top"
          alt="Logo"/>
      </div>
    </>
  )
}
export default WaiterMainPage;