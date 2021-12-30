import React from "react";
import "./edit-product.css";
import Navbar from "../../Navbar";
import  Announcement  from "../../Announcement";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {updateProduct} from "../../../redux/apiCalls";
import {useLocation} from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


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
  const [allowed, setAllow] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  //const { isFetching, error } = useSelector((state) => state.user);
  const edited = false;
  const handleClick =  (e)=> {
    e.preventDefault();
    try{
      updateProduct( productId ,{seller,title,desc,img,price,amount, allowed},dispatch);
      edited = true;
    }
    catch(err)
    {
      console.log(err);
    }
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
        <label>Advertise your product by allowing other user share!:  </label> 
        <input type="boolean" onChange={(e) => setAllow(e.target.value)}required />
        <label>Please Enter Your Email to Confirm:</label> 
        <input type="text" onChange={(e) => setSeller(e.target.value)} required /> 
        <button className="button" onClick={handleClick}>Edit !
        {edited? (<Redirect to = "/profile" /> ): ("")}</button > 
</form>

</section>
</div>
</div>
)
}
export default Edit 
