import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

function SobreNos() {
  return (
    <>
    <Navbar/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "inter",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          sx={{ color: "#4a044e", margin:"50px 0" }}
          gutterBottom
          variant="h3"
          component="div"
        >
          Nossa História
        </Typography>
        <Typography
          sx={{
            color: "#86198f",
            textAlign: "justify",
            width: "80%",
            letterSpacing: ".5px",
            marginBottom:"20px"
          }}
          variant="p"
          component="div"
        >
          Lorem ispsum dolor sit amet consectetur adipisicing elit. Obcaecati
          corporis et deserunt nesciunt aliquid quam tenetur laudantium nihil
          repudiandae provident minima fugit qui exercitationem consequuntur
          fuga esse veritatis, quibusdam eos. Lorem ispsum dolor sit amet
          consectetur adipisicing elit. Obcaecati corporis et deserunt nesciunt
          aliquid quam tenetur laudantium nihil repudiandae provident minima
          fugit qui exercitationem consequuntur fuga esse veritatis, quibusdam
          eos.
        </Typography>
      </div>
      <Container sx={{ width:{ xs:"100%",md:"1100px"}, height: 450, margin: "0 auto" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem sx={{xs:{
              display:"flex",
              flexDirection:"column",
              width:"100%",variant:"none"
            }}} key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
}
const itemData = [
  {
    img: "./1.jpeg",
    title: "Bed",
  },
  {
    img:"./2.jpeg",
    title: "Books",
  },
  {
    img:"./3.jpeg",
    title: "Sink",
  },
  {
    img:"./4.jpeg",
    title: "Kitchen",
  },
  {
    img: "./5.jpeg",
    title: "Blinds",
  },
  {
    img: "./6.jpeg",
    title: "Chairs",
  },
  {
    img:"./7.jpeg",
    title: "Laptop",
  },
  {
    img:"./8.jpeg",
    title: "Doors",
  },
  {
    img:"./9.jpeg",
    title: "Coffee",
  },
  {
    img: "./10.jpeg",
    title: "Storage",
  },
  {
    img: "./sea.png",
    title: "Candle",
  },
 
];
export default SobreNos;
