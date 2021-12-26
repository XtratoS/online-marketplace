
import react from 'react';
import IconButton from '@mui/material/IconButton';
import "./right.css";
import {profileProducts} from "../../../data/profile"
import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import ImgMediaCard from './product-card';
import { SoldProducts} from "../../../data/profile"

  
    


function Right() {
  const products= SoldProducts;
  return (
    //<div className='right'>
    <div>
      <div className='right-heading'>
      <label className='heading-label'>Sold items</label>
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
/* <div className='right-options'>
        <div></div>
     < button className="add-button">
          <div className="add-icon">
          <img src="https://img.icons8.com/ios-glyphs/25/ffffff/add--v1.png"/>
          
          </div>
          <label className="add-label">Add a Product</label>
          </button>
      </div>*/