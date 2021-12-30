import "./left.css";
import * as React from 'react';
import {Link} from "react-router-dom";
import ImgMediaCard from './demo';
import styled from "styled-components";
import {updateCash} from "../../../redux/apiCalls"
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
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
const Input = styled.input`

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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser.user);
  //const { isFetching, error } = useSelector((state) => state.user);
  const [cash, setcash] = useState();
  
  const handleClick =  (e)=> {
    e.preventDefault();
    try{
      updateCash( user.email ,{cash},dispatch);
    }
    catch(err)
    {
      console.log(err);
    }
  };
  return (
    <div>
    <div className="vendor" >
   < ImgMediaCard/>
</div>

  
   <div className='left-menu'>
   <label className="menu-label">products Info</label>
   <Link to="./sold">
    <TopButton>Sold items </TopButton>
    </Link>
    <Link to="./notsold">
   
    <TopButton>Not-Sold items</TopButton>
    </Link>
    <Link to="./purchased">
  
      <TopButton>Purchased items</TopButton>
      </Link>

      <Input type="number" placeholder="Deposite Cash NOW!"   onChange={(e) => setcash(e.target.value) }/>
      <TopButton onClick={handleClick} >Deposite cash</TopButton>
      

   </div>





   <div className='left-products'>

   </div>
   
   </div>
  );
}

export default Left;
          