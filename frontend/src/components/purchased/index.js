import React from "react";
import "./profile.css";
import Right from "./right";
import Left from "../users/left"
function Purchased() {
  return (
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
  )
}
export default Purchased
