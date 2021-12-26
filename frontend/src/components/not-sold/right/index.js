
//import react from 'react';
//import IconButton from '@mui/material/IconButton';
import "./right.css";
//import {profileProducts} from "../../../data/profile"
import * as React from 'react';
//import ReactDOM from 'react-dom';
//import { StyledEngineProvider } from '@mui/material/styles';
import ImgMediaCard from './product-card';
import { NotSoldProducts} from "../../../data/profile"

  
    


function Right() {
  const products= NotSoldProducts;
  return (
    //<div className='right'>
    <div>
    <div className='right-heading'>
    <label className='heading-label'>Not Sold items</label>
    </div>
   

      <div className='products-list' >
      {products.map((item) => {
            return (
              <ImgMediaCard 
              item={item}/>
            );
          })}
          
    
      
   </div>
   </div>
  )
}

export default Right;
