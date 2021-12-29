import React from 'react'
//import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./product-card.css";
import {Link} from "react-router-dom";
import Edit from './edit-product';
import styled from "styled-components";

const TopButton = styled.button`
margin-right:5px;
margin_left:5px; 
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border:none;
 {(props) => props.type === "filled" && "none"};
 background-color: ${(props) =>
   props.type === "filled" ? "black" : "transparent"};
 color: ${(props) => props.type === "filled" && "white"};
`;


const Product = ({ product, handleDelete }) => {
  return (
    <div className='product-card'>
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"

          height="200"
          image={product.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.desc}
            <div> Amount: <span>{product.amount}</span></div>
            <div> Price: <span>{product.price}</span><span> LE</span></div>
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/edit/${product._id}`}>
          
          <TopButton>edit</TopButton>
          </Link>
          <TopButton  onClick={() => handleDelete(product.id)}>remove</TopButton>
        </CardActions>
      </Card>
    </div>
  );
};


  export default Product;
