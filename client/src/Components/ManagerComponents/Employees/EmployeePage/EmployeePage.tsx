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
    // console.log(data);
  //   const data = [
  //     {
  //         "id": 1,
  //         "dob": "02.09.1999",
  //         "phonenumbers": ["",""],
  //         "name": "Barker",
  //         "lastname": "Jack"
  //     },
  //     {
  //         "id": 2,
  //         "dob": "01.03.2001",
  //         "phonenumbers": ["",""],
  //         "name": "Hofman",
  //         "lastname": "Daniel"
  //     },
  //     {
  //         "id": 3,
  //         "dob": "10.09.1979",
  //         "phonenumbers": ["",""],
  //         "name": "Katie",
  //         "lastname": "Grey"
  //     },
  //     {
  //         "id": 4,
  //         "dob": "01.03.2000",
  //         "phonenumbers": ["",""],
  //         "name": "Josh",
  //         "lastname": "Grey"
  //     },
  //     {
  //         "id": 5,
  //         "dob": "09.09.1987",
  //         "phonenumbers": ["",""],
  //         "name": "Mind",
  //         "lastname": "Jack"
  //     },
  //     {
  //         "id": 6,
  //         "dob": "01.03.2002",
  //         "phonenumbers": ["",""],
  //         "name": "Bucci",
  //         "lastname": "Daniel"
  //     },
  //     {
  //         "id": 7,
  //         "dob": "02.09.1990",
  //         "phonenumbers": ["",""],
  //         "name": "Lower",
  //         "lastname": "Jack"
  //     },
  //     {
  //         "id": 8,
  //         "dob": "09.03.2003",
  //         "phonenumbers": ["",""],
  //         "name": "Jacob",
  //         "lastname": "Daniel"
  //     }
  // ]
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
              // position={item['position']} 
              name={item.name}
              lastname={item.lastname}
              // salary={item.salary} 
              // department={item.departament}
              phone={item.phonenumbers}
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