
import "./right.css";
import * as React from 'react';
import ImgMediaCard from './product-card';
import { PurchaseddProducts} from "../../../data/profile"
function Right() {
  const products= PurchaseddProducts;
  return (
    <div className='A'>
      <div className='right-heading'>
      <label className='heading-label'>Purchased items</label>
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