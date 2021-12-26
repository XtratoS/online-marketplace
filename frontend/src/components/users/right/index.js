
import "./right.css";
import * as React from 'react';
import ImgMediaCard from './product-card';
import { NotSoldProducts} from "../../../data/profile"
//import { Link } from '@mui/material';
import {Link} from "react-router-dom";
  
    


function Right() {
  const products= NotSoldProducts;
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
     {products.map((item) => {
            return (
              <ImgMediaCard 
              item={item}/>
            );
          })}
          
    
      
   </section>
   </section>
  )
}

export default Right;
//   <section className='right-heading'>
    //  <label className='heading-label'>Your Store</label>
    //  </section>
    // <container></container>


      
   /* <section className='right-options'>
    <div></div>
 //  < button className="add-button">
     //  <section className="add-icon">
     //  <img src="https://img.icons8.com/ios-glyphs/25/ffffff/add--v1.png"/>
       
     //  </section>
     //  <label className="add-label">Add a Product</label>
     //  </button>
  </section>*/
  /*
  function Right() {
  const products= NotSoldProducts;
  return (
    <div className='right'>
      <div className='right-heading'>
      <label className='heading-label'>Your Store</label>
      </div>
     


      
      <div className='right-options'>
        <div></div>
      < button className="add-button">
          <div className="add-icon">
          <img src="https://img.icons8.com/ios-glyphs/25/ffffff/add--v1.png"/>
          
          </div>
          <label className="add-label">Add a Product</label>
          </button>
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
*/
