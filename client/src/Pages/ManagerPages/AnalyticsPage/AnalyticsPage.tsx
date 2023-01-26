import ClientsSatisfaction from '../../../Components/ManagerComponents/Dashboards/ClientsSatisfaction';
import NumverOfVisitors from '../../../Components/ManagerComponents/Dashboards/NumverOfVisitors';
import ManagerHeader from '../../../Components/ManagerComponents/Header/ManagerHeader';
import './AnalyticsPage.css';

const AnalyticsPage = () => {
  return (
    <>
      <ManagerHeader />
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