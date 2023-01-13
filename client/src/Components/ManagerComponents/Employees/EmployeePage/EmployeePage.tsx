import React, { useState, useEffect } from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import ReactPaginate from 'react-paginate';
import './EmployeePage.css';

const EmployeePage = ({ itemsPerPage } : any) => {
    const [data, getData] = useState([])
    const URL = 'http://localhost:8080/api/v1/employee/all';
  
    useEffect(() => {
      fetchData()
    }, [])
  
    const fetchData = () => {
      fetch(URL)
        .then((res) =>
            res.json())
        .then((response) => {
            console.log(response.result);
            getData(response);
        })
    }
    console.log(data);

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <div className='container'>
        <div className='block'>
          {currentItems.map((item, i) => (
            <div key={i}>
              <EmployeeCard
              id={item.id} 
              position={item.position} 
              name={item.name}
              lastname={item.lastname}
              salary={item.salary} 
              department={item.departament}
              phone={item.phone}
              />
              <br></br>
            </div>
          ))}
          <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          breakLinkClassName="page-link"
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          />
        </div>
      </div>
    )
}
export default EmployeePage;