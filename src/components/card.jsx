import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardComponent({title,image,price, buttonName}) {
  return (
    <Card sx={{ maxWidth: 300, textAlign:"center" }}>
      <CardMedia
        component="img"
        alt={title}
        height="150"
        image={image}
      />
      <CardContent>
        <Typography sx={{ color: "#86198f"}} gutterBottom variant="p" component="div">
         {title}
        </Typography>
       
      </CardContent> <Typography sx={{ color: "#86198f"}} gutterBottom variant="h6" component="div">
         {price}
        </Typography>
   
        <Button size="small" color="secondary" sx={{ margin:"0 auto", padding:"10px 30px" }} >{buttonName}</Button>
    
    </Card>
  );
}
