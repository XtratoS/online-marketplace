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

   
    
    const Right  = () => {
      let { data:products, isloading, errMsg} = useFetch(
        "http://localhost:5000/api/products" //url from json-server
        
      );
    
    
    const handleDelete = (id) => {
      let curProducts = [...products];
      let newProducts = curProducts.filter((product) => Product.id !== id);
      //setProducts(newproducts);//////////////
    };
     // const products= NotSoldProducts;
      return (
       <section >
          <div className='right-heading'>
          <label className='heading-label'>Your Store</label>
          </div>
         
    
    
          
          <div className='right-options'>
            <div></div>
            <Link to="/add">
          <button className="add-button">
              <div className="add-icon">
              <img src="https://img.icons8.com/ios-glyphs/25/ffffff/add--v1.png"/>
              
              </div>
              <label className="add-label">Add a Product</label>
              </button>
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

