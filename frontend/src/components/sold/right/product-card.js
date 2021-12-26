import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { InsertEmoticon } from '@material-ui/icons';
import "./product-card.css";

export default function ImgMediaCard({item}) {
  return (
    <div className='product-card'>
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        
        height="200"
        image={item.imag}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.desc}
        <div> amount: <span>{item.amount}</span></div>
         <div> Price: <span>{item.price}</span><span> LE</span></div>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  );
}