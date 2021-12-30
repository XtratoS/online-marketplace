//import { ProductsMenu } from '../../../data/profile';
//import MenuItem from "./menu-item";
import "./left.css";
import * as React from 'react';
import {Link} from "react-router-dom";
import ImgMediaCard from './demo';
import styled from "styled-components";

const TopButton = styled.button`
padding: 8px 0px;
margin-top: 10px;
margin-bottom: 6px;
font-size: 15px;
font-weight: 500;
justify-content:center;
width:90%;
align-items: center;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) =>
  props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
&:hover {
  background-color: #e9f5f5;
}
`;

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
   {/* <button className='menu-item'>
      <div className="item-icon"><img class="icon3" src="https://img.icons8.com/cotton/64/000000/box--v1.png"/></div>
      <label className="item-label">Sold items</label>
    </button> */}
    <TopButton>Sold items </TopButton>
    </Link>
    <Link to="./notsold">
    {/* <button className='menu-item'>
      <div className="item-icon"><img class="icon3" src="https://img.icons8.com/cotton/64/000000/box--v1.png"/></div>
      <label className="item-label">Not-Sold item</label>
    </button> */}
    <TopButton>Not-Sold items</TopButton>
    </Link>
    <Link to="./purchased">
    {/* <button className='menu-item'>
      <div className="item-icon"><img class="icon3" src="https://img.icons8.com/cotton/64/000000/box--v1.png"/></div>
      <label className="item-label">Purchased items</label>
      </button> */}
      <TopButton>Purchased items</TopButton>
      </Link>


   </div>





   <div className='left-products'>

   </div>
   
   </div>
  );
}

export default Left;
          