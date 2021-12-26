
//import { ProductsMenu } from '../../../data/profile';
//import MenuItem from "./menu-item";
import "./left.css";

import * as React from 'react';

import {Link} from "react-router-dom";

import ImgMediaCard from './demo';
function Left() {
  //const menu= ProductsMenu;
  return (
    <div>
    <div className="vendor" >
   < ImgMediaCard/>
</div>

  
   <div className='left-menu'>
   <label className="menu-label">products Info</label>
   <Link to="./sold">
   <button className='menu-item'>
      <div className="item-icon"><img class="icon3" src="https://img.icons8.com/cotton/64/000000/box--v1.png"/></div>
      <label className="item-label">Sold items</label>
    </button>
    </Link>
    <Link to="./notsold">
    <button className='menu-item'>
      <div className="item-icon"><img class="icon3" src="https://img.icons8.com/cotton/64/000000/box--v1.png"/></div>
      <label className="item-label">Not-Sold item</label>
    </button>
    </Link>
    <Link to="./purchased">
    <button className='menu-item'>
      <div className="item-icon"><img class="icon3" src="https://img.icons8.com/cotton/64/000000/box--v1.png"/></div>
      <label className="item-label">Purchased items</label>
      </button>
      </Link>


   </div>





   <div className='left-products'>

   </div>
   
   </div>
  );
}

export default Left;
          