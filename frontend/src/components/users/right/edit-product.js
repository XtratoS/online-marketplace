import React from "react";
//import Header from "../common/header";
//import Sidebar from "../common/sidebar";
//import LeftFold from './left-fold/index';
//import RightFold from "./right-fold/index";
//import "./profile.css";
import "./edit-product.css";
import Header from '../../common/Header';
import Navbar from "../../Navbar";
import  Announcement  from "../../Announcement";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {updateProduct} from "../../../redux/apiCalls";
import Product from "./product-card";
import {useLocation} from "react-router-dom";


function Edit ()
{ 
  const user = useSelector((state) => state.user.currentUser);
  //const { isFetching, error } = useSelector((state) => state.user);
  const [seller, setSeller] = useState();
  const [title, setTitle] = useState();
  const [img, setImageURL] = useState();
  const [desc, setDescription] = useState();
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  //const { isFetching, error } = useSelector((state) => state.user);

  const handleClick =  (e)=> {
    e.preventDefault();

    updateProduct( productId ,{seller,title,desc,img,price,amount},dispatch);
  };
  
  return(
  <div> 
    <Announcement/>
    <Navbar/>
    
<div className="create">
 <section className="create_product">
<h2>Edit your Product</h2>
 <form>
      <label>Name:</label> 
      <input type="text" onChange={(e) => setTitle(e.target.value)}  />
        <label>description :</label> 
        <input onChange={(e) => setDescription(e.target.value)} ></input> 
        <label> Image URL: </label>
        <input type="url"  onChange={(e) => setImageURL(e.target.value)}  /> 
        <label>Price: </label> 
        <input type="number"  onChange={(e) => setPrice(e.target.value)} />
        <label>Amount: </label> 
        <input type="number" onChange={(e) => setAmount(e.target.value)} />
        <label>Please Enter Your Email to Confirm:</label> 
        <input type="text" onChange={(e) => setSeller(e.target.value)} required /> 
        <button className="button" onClick={handleClick}>Edit !</button > 
</form>

</section>
</div>
</div>
)
}
export default Edit 
/*
<button className="btn2">edit</button >

  <select>
<option value="admin">admin</option>
<option value="cody">codv</option>
 </select> 
V*/