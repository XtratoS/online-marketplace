import React from "react";
//import Header from "../common/header";
//import Sidebar from "../common/sidebar";
//import LeftFold from './left-fold/index';
//import RightFold from "./right-fold/index";
//import "./profile.css";
import "./add-product.css";
import Header from '../../common/Header';
import Navbar from "../../Navbar";
import  Announcement  from "../../Announcement";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function  Add  () 
{ 
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  //const { isFetching, error } = useSelector((state) => state.user);


  
  return(
  <div> 
    <Announcement/>
    <Navbar/>
    

 <section className="create-post">
<h2>Add New Product</h2>
 <form>
      <label>Name:</label> 
      <input type="text" onChange={(e) => setName(e.target.value)} required />

       <label> Image URL: </label>
        <input type="url"  onChange={(e) => setImageURL(e.target.value)} required /> 
        <label>description :</label> 
        <input onChange={(e) => setDescription(e.target.value)} required></input> 
        <label>Price: </label> 
        <input type="number"  onChange={(e) => setPrice(e.target.value)}required />
        <label>Amount: </label> 
        <input type="number" onChange={(e) => setAmount(e.target.value)}required />

      
<button className="btn1">Add</button >
 
</form>
</section>
</div>
)
}
export default Add
/*
<button className="btn2">edit</button >

  <select>
<option value="admin">admin</option>
<option value="cody">codv</option>
 </select> 
V*/