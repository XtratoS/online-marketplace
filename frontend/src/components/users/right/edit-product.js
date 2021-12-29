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
import {addProduct} from "../../../redux/apiCalls";

function  Edit  ()
{ 
  const user = useSelector((state) => state.user.currentUser);
  //const { isFetching, error } = useSelector((state) => state.user);
  const [seller, setSeller] = useState();
  const [title, setTitle] = useState("");
  const [img, setImageURL] = useState("");
  const [desc, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  //const { isFetching, error } = useSelector((state) => state.user);

  const handleClick =  (e)=> {
    e.preventDefault();
    updateProduct({seller,title,desc,img,price,amount},dispatch);
  };
  
  return(
  <div> 
    <Announcement/>
    <Navbar/>
    

 <section className="create-post">
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
      
<button className="btn1" onClick={handleClick}>Edit !</button >
 
</form>
</section>
</div>
)
}
export default edit
/*
<button className="btn2">edit</button >

  <select>
<option value="admin">admin</option>
<option value="cody">codv</option>
 </select> 
V*/