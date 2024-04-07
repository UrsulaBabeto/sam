import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Navbar from "../components/Navbar";
import { Typography } from "@mui/material";

const style = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

export default function Cart() {
  return (
    <>
      <Navbar />
      <Typography
          sx={{ color: "#4a044e", margin: "50px 0" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Meu carrinho
        </Typography>
      <List fullWidth sx={style}>
        <ListItem >
          <ListItemText  primary="foto, descrição preço unitario, divider" />
        </ListItem>
        <hr></hr>
        <ListItem>
          <ListItemText primary="foto, descrição preço unitario, divider" />
        </ListItem>
      </List>
      <Typography
          sx={{ color: "#4a044e", margin: "50px 0" }}
          gutterBottom
          variant="h6"
          component="div"
        >
          Total:
        </Typography>
      <Typography
          sx={{ color: "#4a044e", margin: "50px 0" }}
          gutterBottom
          variant="h6"
          component="div"
        >
         Chave Pix:
        </Typography>
    </>
  );
}
