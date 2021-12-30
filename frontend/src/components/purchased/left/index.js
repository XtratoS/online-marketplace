import "./left.css";
import {Link} from "react-router-dom";
import ImgMediaCard from './demo';
import * as React from 'react';
function Left() {
  return (
    <div>
    <Link to="/profile">
    <div className="vendor" >
   < ImgMediaCard/>
</div>
</Link>
  
   <div className='left-menu'>
   <label className="menu-label">products Info</label>
   <Link to="./sold">
   <button className='menu-item'>
      <div className="item-icon"><img class="icon3" src="https://img.icons8.com/cotton/64/000000/box--v1.png" alt=" "/></div>
      <label className="item-label">Sold items</label>
    </button>
    </Link>
    <Link to="./notsold">
    <button className='menu-item'>
      <div className="item-icon"><img class="icon3" src="https://img.icons8.com/cotton/64/000000/box--v1.png" alt=" "/></div>
      <label className="item-label">Not-Sold item</label>
    </button>
    </Link>
    <Link to="./purchased">
    <button className='menu-item'>
      <div className="item-icon"><img class="icon3" src="https://img.icons8.com/cotton/64/000000/box--v1.png"alt=" "/></div>
      <label className="item-label">Purchased items</label>
      </button>
      </Link>


   </div>





  
   
   </div>
  );
}

export default Left;
