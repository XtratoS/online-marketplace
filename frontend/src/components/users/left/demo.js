import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';

export default function ActionAreaCard() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://th.bing.com/th/id/R.ead4e500f26211447f2b83a8fedb35b5?rik=e5WHTShSpipi3Q&pid=ImgRaw&r=0"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {user.user.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <div> Current cash balance: <span>  {user.user.cash}</span><span> LE</span></div>
        
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}