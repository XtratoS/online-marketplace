import react from 'react';
import IconButton from '@mui/material/IconButton';
import "./right.css";
import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Product from './product-card';
import {Link} from "react-router-dom";
import useFetch from '../../../useFetch';
import { useState, useEffect } from "react";
//import { NotSoldProducts} from "../../../data/profile"
//import {profileProducts} from "../../../data/profile"
//import { Link } from '@mui/material';
import styled from "styled-components";
import { useSelector } from 'react-redux';
const Button = styled.button`

border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-right:20px;
`;
   
    
    const Right  = () => {
      const user = useSelector((state) => state.user.currentUser.user);
      let { data:products, isloading, errMsg} = useFetch(
        `http://localhost:5000/api/products/${user.email}` //url from json-server
        
      );
    
    
    const handleDelete = (id) => {
      let curProducts = [...products];
      let newProducts = curProducts.filter((product) => Product.id !== id);
      //setProducts(newproducts);//////////////
    };
     // const products= NotSoldProducts;
      return (
       <section className='A' >
          <div className='right-heading'>
          <label className='heading-label'>Your Store</label>
          </div>
         
    
    
          
          <div className='right-options'>
            <div></div>
            <Link to= "/add">
        <Button>Add a Product</Button>
        </Link> 
          </div>
       
    
          <section className='products-list' >
           
         
       
       {products && products.map((product) => (
          <Product key={product.id} product={product} handleDelete={handleDelete} />
        ))}
         {isloading && <div> loading ... </div>}
         {!products && !isloading && !errMsg && (
        <div className="not-found"> No Products</div>
      )}{/*no posts no loading*/}
      
      {errMsg && <div className="error"> {errMsg}</div>}
          
       </section>
       </section>
      
      );
    };
    
    export default Right;

