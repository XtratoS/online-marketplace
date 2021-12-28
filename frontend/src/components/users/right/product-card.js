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


const Product = ({ product, handleDelete }) => {
  return (
    <div className='product-card'>
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"

          height="200"
          image={product.imag} />
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
          <Link to="/add">
            <Button size="small">edit</Button>
          </Link>
          <Button size="small" onClick={() => handleDelete(product.id)}>remove</Button>
        </CardActions>
      </Card>
    </div>
  );
};


  export default Product;
