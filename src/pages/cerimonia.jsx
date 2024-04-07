import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Link } from "@mui/material";
import Navbar from "../components/Navbar";
function Cerimonia() {
  return (
    <>
    <Navbar/>
     <Typography
          sx={{ color: "#4a044e",textAlign:"center", margin:"50px 0" }}
          gutterBottom
          variant="h3"
          component="div"
        >
        Cerimônia
      </Typography>
      <Container
        sx={{           
          display:"flex",
          flexDirection:{ xs:"column", md:"row"},
          justifyContent: {xs:"center", md:"space-evenly"},
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 345, textAlign: "center",  marginBottom:{ xs:"30px"}, }}>

          <Link
            color="secondary"
            underline="none"
            target="_blank"
            href="https://fazendavaledoseucaliptos.com.br/"
          >
                      <CardContent>
            <Typography
              sx={{ color: "#86198f" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Cerimonial
            </Typography>
          </CardContent>
            <CardMedia
              component="img"
              alt="cerimonial"
              height="220"
              image="https://fazendavaledoseucaliptos.com.br/wp-content/uploads/2023/05/AMD_2453-scaled.webp"
            />
          </Link>
        </Card>

        <Card sx={{ maxWidth: 345, textAlign: "center" }}>
          <CardContent>
            <Typography
              sx={{ color: "#86198f" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Localização
            </Typography>
          </CardContent>
          <CardMedia>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14661.253306237726!2d-46.6530503!3d-23.268062099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee5f437cf13d9%3A0xf72d28011b8a12c4!2sFazenda%20Vale%20dos%20Eucaliptos!5e0!3m2!1spt-BR!2sbr!4v1708260310338!5m2!1spt-BR!2sbr"
              width="320"
              height="220"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </CardMedia>
        </Card>
      </Container>
    </>
  );
}

export default Cerimonia;
