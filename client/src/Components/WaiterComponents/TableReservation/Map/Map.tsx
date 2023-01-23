import TableForThree_A from '../Tables/TableForThree_A/TableForThree_A';
import TableForThree_B from '../Tables/TableForThree_B/TableForThree_B';
import TableForThree_C from '../Tables/TableForThree_C/TableForThree_C';
import TableForTwo_A from '../Tables/TableForTwo_A/TableForTwo_A';
import TableForTwo_B from '../Tables/TableForTwo_B/TableForTwo_B';
import TableForTwo_C from '../Tables/TableForTwo_C/TableForTwo_C';
import TableForTwo_D from '../Tables/TableForTwo_D/TableForTwo_D';
import './Map.css';

const Map = () => {
  return (
    <>
      <div className='cafe-map'>
        <div className='table-a'>
          <TableForThree_A />
        </div>
        <div className='table-b'>
          <TableForThree_B />
        </div>
        <div className='table-c'>
          <TableForThree_C />
        </div>
        <div className='table-for-two-a'>
          <TableForTwo_A />
        </div>
        <div className='table-for-two-b'>
          <TableForTwo_B />
        </div>
        <div className='table-for-two-c'>
          <TableForTwo_C />
        </div>
        <div className='table-for-two-d'>
          <TableForTwo_D />
        </div>
      </div>
    </>
  )
}
export default Map;