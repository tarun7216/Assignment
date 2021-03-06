// import React, { useEffect, useState } from "react";
// import './Search'
// import axios from "axios";

// const Search = () => {

//   const [apiData, setApiData] = useState([]);
//   const[q,setQ]=useState("")
//   const searchListByQuery = () => {
//       it(q) {
//           setApiData([])

//       }
//   }

//   }

// //   useEffect(() => {
// //     fetch("https://randomuser.me/api/?results=100")

// //       .then((response) => {
// //           const json = response.json()
// //           console.log(json);
// //           return setApiData(json.results);
// //         })
// //     //   .then((json) => console.log(json))
// //     //   .then((json) => {return setApiData(json.results)});

// //   }, []);

// async function setListDataFromAPi ( setApiData,q) {
//     await axios.get("https://randomuser.me/api/?results=100")
//     .then((response) => {
//         setApiData(response.data.results)
//     })
// }

//   return (
//     <div>
//       <h3>
//         Search:
//         <input position="center" type="text" onChange={(event) => setQ(event.target.value)} />
//         <button onClick={searchImagedByQuery}>search</button>
//       </h3>

//         {
//         apiData.map((item) => (
//             <ol key={item.id}>
//                 <div>id = {item.id}</div>
//                 <div>name = {item.name.first}</div>
//             </ol>
//         ))}

//     </div>
//   );
// };

// export default {Search, setListDataFromAPi};

import { useEffect, useState } from "react";
import React from "react";
import './Search.css'

const Search = () => {
  const [data, setData] = useState([]);
  const[query, setQuery] = useState([])
  const searchListByQuery = () => {
      if(query) {
        //   Emptying the list the search will happen.
          setData([])
          setListDataFromAPi ( setApiData,query)
      }
      else{
          return (
              <h4>Not Found</h4>
          )
      }
  }
  const searchHandler = (e)=> {
      setQuery(e.target.value)
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

 
  return (
    <div>
        <div>
            <h3>Search: <input type="search" placeholder="Search" value={query} onChange={searchHandler}  /></h3>
        </div>
      {data.map((item) => (
        <table className="Table">
          <thead>
            <th>Srno</th>
            <th>Name</th>
            <th>UserName</th>
          </thead>
          <tbody>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default {Search, setListDataFromAPi };
