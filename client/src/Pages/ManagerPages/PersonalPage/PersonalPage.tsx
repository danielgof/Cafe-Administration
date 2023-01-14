import React from 'react'
import ManagerHeader from '../../../Components/ManagerComponents/Header/ManagerHeader';
import EmployeePage from '../../../Components/ManagerComponents/Employees/EmployeePage/EmployeePage';
import './PersonalPage.css';

const PersonalPage = () => {
  return (
    <>
      <ManagerHeader />
      {/* <p className='personalpage-page-title'>Personal Page</p> */}
      <EmployeePage itemsPerPage={2}/>
    </>
  )
}
export default PersonalPage;