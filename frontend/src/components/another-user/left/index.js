
import react from 'react';
//import { ProductsMenu } from '../../../data/profile';

//import MenuItem from "./menu-item";
import "./left.css";
import ImgMediaCard from './demo';
import {vendors} from "../../../data/profile"
import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { Menu } from '@mui/material';
function Left() {
  //const ven= vendors;
  return (
    <div className='left'>
       <div className="vendor" >
      
            
              <ImgMediaCard/>
         
          
  </div>
     
     





      
      
   </div>
  );
}

export default Left;
