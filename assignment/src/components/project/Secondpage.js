import React from "react";

const Secondpage = () => {
  return (
    <div>
      <h1>EMployeeFullList</h1>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Adress</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Tarun</td>
          <td>tarun@gmail.com</td>
          <td>9-2, Sai Baba temple street</td>
          <td>9032582824</td>
          <td>Male</td>
          <td>18/12/1995</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Secondpage;
