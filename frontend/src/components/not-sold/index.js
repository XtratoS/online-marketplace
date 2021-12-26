import React from "react";
//import Header from "../common/header";
//import Sidebar from "../common/sidebar";
//import LeftFold from './left-fold/index';
//import RightFold from "./right-fold/index";
import "./profile.css";
import Header from '../common/Header';
import Left from "./left";
import Right from "./right";
function NotSold() {
  return (
    <div className='profile-container'>
      <Header/>
      
       <div className= 'profile-body'>
       

         <div className='profile-left'>
         <Left/>
         </div>
         
         <div className='profile-right'>
           <Right/>
         </div>


       </div>
    </div>
  )
}
export default NotSold
