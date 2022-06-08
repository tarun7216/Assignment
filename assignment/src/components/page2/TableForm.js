import React from 'react'
import './TableForm.css'

const TableForm = (item) => {
  return (
    <div>
      <table className='Table'>
         <thead>
           <th>Sr.No</th>
           <th>Name</th>
           <th>Gender</th>
           <th>Email</th>
           <th>Address</th>
           <th>Login details</th>
           
         </thead>
         
      </table>
    </div>
  )
}

export default TableForm
