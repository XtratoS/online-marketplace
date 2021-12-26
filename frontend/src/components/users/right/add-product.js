import React from "react";
//import Header from "../common/header";
//import Sidebar from "../common/sidebar";
//import LeftFold from './left-fold/index';
//import RightFold from "./right-fold/index";
//import "./profile.css";
import "./add-product.css";
import Header from '../../common/Header';


function  Add  () 
{ return(

 <section className="create-post">
<h2>Add New Product</h2>
 <form>
      <label>Name:</label> 
      <input type="text" required />

       <label> Image URL: </label>
        <input type="url" required /> 
        <label>description :</label> 
        <input required></input> 
        <label>Price: </label> 
        <input type="number" required />
        <label>Amount: </label> 
        <input type="number" required />

      
<button className="btn1">Add</button >
<button className="btn2">edit</button >

</form>
</section>

)
}
export default Add
/*
  <select>
<option value="admin">admin</option>
<option value="cody">codv</option>
 </select> 
V*/