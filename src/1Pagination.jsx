import React, { useState } from 'react'

export default function Pagination() {
    const data=Array.from({length:100},(_,i)=>`item ${i+1}`)
    const [currentPage,setCurrentPage]=useState(1)
    const perPage=5;
    const totalPages= Math.ceil(data.length/perPage)

    const updateData= data.slice((currentPage - 1) * perPage, currentPage * perPage )

    const handlePageChange=(page)=>{
      setCurrentPage(page)
    }

  return (
    <div className='box'>
      <p> 😍 Pagination</p>
      {
        updateData.map((val)=>{
          return (
            <li>{val}</li>
          )
        })
      }
      <button onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage===1}>pre</button>
      {
       Array.from({length:totalPages},(_,i)=>
       <button onClick={()=>handlePageChange(i+1)}>{i+1}</button>)
      }
      <button onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage===totalPages}>next</button>
    </div>
  )
}
