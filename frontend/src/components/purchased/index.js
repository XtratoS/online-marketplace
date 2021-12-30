import React from "react";
import "./profile.css";
import Left from "./left";
import Right from "./right";
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
