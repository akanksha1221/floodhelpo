import React from 'react';
import '../Css/Table.css';
import Data from "../Data/Donatordata.jsx";
function Table(){
    return(
        <>
    <div class="container table">
  <h2>List of donator</h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Id</div>
      <div class="col col-2">Name</div>
      <div class="col col-3">Amount</div>
    </li>
   
      { Data.map(post=>{
        return(
          <li class="table-row" key={ post.id}>
              <div class="col col-1" data-label="Id">42235</div>
              <div class="col col-2" data-label="Name">{post.Name} </div>
              <div class="col col-3" data-label="Amount">{post.Amount}</div>
          </li>
        )
      })}
  </ul>
</div>
        </>
    )}

export default Table;