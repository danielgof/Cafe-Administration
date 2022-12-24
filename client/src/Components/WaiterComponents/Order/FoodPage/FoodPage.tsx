import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import FoodTypeCard from '../FoodTypeCard/FoodTypeCard';
import './FoodPage.css';
// import FoodTypeCard from '../FoodTypeCard/FoodTypeCard';

const FoodPage = ({ itemsPerPage }: any) => {
    const [data, getData] = useState([])
    const URL = 'http://localhost:8080/api/v1/food/types';
    // const requestHeaders: HeadersInit = new Headers();
    // requestHeaders.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huMyIsInJvbGVzIjpbXSwiZXhwIjoxNjcxODc1NjM2fQ.QtHKF_JJEyhQLDM_2PMavVuFxNzgPwzkk7ZjCKFHoqA');
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
    console.log(data);
  
    return (
      <div className='container'>
        <div className='block'>
          {currentItems.map((item, i) => (
            <div key={i}>
              <FoodTypeCard type={item}/>
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
        //   renderOnZeroPageCount={null}
          breakLinkClassName="page-link"
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        //   subContainerClassName="pages pagination"
          />
        </div>
      </div>
    )
}
export default FoodPage;