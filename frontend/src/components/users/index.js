import React from "react";
//import Header from "../common/header";
//import Sidebar from "../common/sidebar";
//import LeftFold from './left-fold/index';
//import RightFold from "./right-fold/index";
import "./profile.css";
import Announcement from "../Announcement";
import Navbar from "../Navbar";
import Left from "./left";
import Right from "./right";

function Users() {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      
    <div className='profile-container'>
    
       <div className= 'profile-body'>
       

         <div className='profile-left'>
         <Left/>
         </div>
         
         <div className='profile-right'>
           <Right/>
         </div>


       </div>
    </div>
    </div>
  )
}
export default Users
