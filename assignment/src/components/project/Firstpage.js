import React, { useState } from 'react'
import '../project/Page.css'

const Firstpage = () => {
  const[query, setQuery] = useState()
  const SearchHandler =(e)=> {
    setQuery(e.target.value)
  }
  // if(query) {
  //   return displayemployeelistifqueryiscorrect ;
  // }
  // else {
  //   NotFound
  // }
  return (
    <div>
      <h4> Search: <input type="text" placeholder='Search' name='search'/> <button onClick={SearchHandler}>Search</button></h4>
      <h6>Not Found</h6>


     


      <div className='container'>
        <h5> Selected Employee &nbsp; &nbsp; Not Selected Employee</h5> 
        <div>
         <center>
         <table className='table'>
            <thead>
              <th>
                SrNo
              </th>
              <th>Name</th>
              <th>Email</th>

            </thead>
            
          </table>
         </center>

        </div>



      </div>
    </div>
  )
}

export default Firstpage
