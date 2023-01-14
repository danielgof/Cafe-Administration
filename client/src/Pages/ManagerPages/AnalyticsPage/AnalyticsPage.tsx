import React from 'react'
import ClientsSatisfaction from '../../../Components/ManagerComponents/Dashboards/ClientsSatisfaction';
import NumverOfVisitors from '../../../Components/ManagerComponents/Dashboards/NumverOfVisitors';
import ManagerHeader from '../../../Components/ManagerComponents/Header/ManagerHeader';
import './AnalyticsPage.css';

const AnalyticsPage = () => {
  return (
    <>
      <ManagerHeader />
      {/* <h1 className='analytics-page-title'>AnalyticsPage</h1> */}
      <div className='visitors-number'>
        <NumverOfVisitors />
      </div>
      <div className='clients-statisfaction'>
        <ClientsSatisfaction />
      </div>
    </>
  )
}
export default AnalyticsPage;