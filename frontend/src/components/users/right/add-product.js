import React from "react";
import "./add-product.css";
import Navbar from "../../Navbar";
import  Announcement  from "../../Announcement";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {addProduct} from "../../../redux/apiCalls";
import { Redirect } from "react-router-dom";

function  Add  ()
{ 
  const user = useSelector((state) => state.user.currentUser);
  //const { isFetching, error } = useSelector((state) => state.user);
  const [seller, setSeller] = useState();
  const [title, setTitle] = useState("");
  const [img, setImageURL] = useState();
  const [desc, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  //const { isFetching, error } = useSelector((state) => state.user);

  const handleClick =  (e)=> {
    e.preventDefault();
    try{
    addProduct({seller,title,desc,img,price,amount},dispatch);
    <Redirect to = "/profile" />
    }
    catch(err){
      console.log(err)
    }
  };
  
  return(
  <div> 
    <Announcement/>
    <Navbar/>
    
<div className="create">
 <section className="create_product">
<h2>Add New Product</h2>
 <form>
      <label>Name:</label> 
      <input type="text" onChange={(e) => setTitle(e.target.value)} required />
        <label>description :</label> 
        <input onChange={(e) => setDescription(e.target.value)} required></input> 
        <label> Image URL: </label>
        <input type="url"  onChange={(e) => setImageURL(e.target.value)}  /> 
        <label>Price: </label> 
        <input type="number"  onChange={(e) => setPrice(e.target.value)}required />
        <label>Amount: </label> 
        <input type="number" onChange={(e) => setAmount(e.target.value)}required />
        <label>Please Enter Your Email to Confirm:</label> 
        <input type="text" onChange={(e) => setSeller(e.target.value)} required /> 
      

 
</form>
<button className="button" onClick={handleClick}>Add</button >
</section>
</div>
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