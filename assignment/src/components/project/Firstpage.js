import React, { useState } from "react";
import "../project/Page.css";
import router from "./router";
import { BrowserRouter, BrowserRouter as Router, Link } from "react-router-dom";

const Firstpage = () => {
  const [query, setQuery] = useState();
  const SearchHandler = (e) => {
    setQuery(e.target.value);
  };
  // if(query) {
  //   return displayemployeelistifqueryiscorrect ;
  // }
  // else {
  //   NotFound
  // }

  return (
    <div>
      <h4>
        {" "}
        Search: <input type="text" placeholder="Search" name="search" value={query} />
        <button onClick={SearchHandler}>Search</button>
      </h4>
      <h6>Not Found</h6>

      <div className="container">
        <h5> Selected Employee &nbsp; &nbsp; Not Selected Employee</h5>
        <div>
          <center>
            <table className="table">
              <thead>
                <tr>
                  <th>SrNo</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr className="row">
                  <td>1</td>
                  <td>Tarun</td>
                  <td>taru@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </center>
          <div></div>
          {/* <li><Link>ViewFullList</Link></li> */}
          <button>ViewFullList</button>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
