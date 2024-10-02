import React from 'react'
import usePaginate from '../hooks/usePaginate';

const Pagination = ({nextPage,prevPage}:{nextPage:()=>void,prevPage:()=>void}) => {
    //   const { nextPage, currentItems, pageNumber } = usePaginate(products);

  return (
    <div className=' w-full flex justify-between'>
          <button className=' btn  btn-primary btn-outline text-lg' onClick={prevPage}>prev</button>
          <button className=' btn btn-primary btn-outline text-lg' onClick={nextPage}>next</button>
    </div>
  )
}

export default Pagination
