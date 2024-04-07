import { Button, FormControl, Stack, TextField, Typography } from "@mui/material";
/* fIconz */
import { BsBalloonHeart } from "react-icons/bs";
import Navbar from "../components/Navbar";
function MensagemNoivos() {
  return (
    <>
    <Navbar/> 
     <Typography
          sx={{ color: "#4a044e", textAlign:"center" }}
          gutterBottom
          variant="h3"
          component="div"
        >  Deixe aqui a sua mensagem
      </Typography>
      <Typography
          sx={{ color: "#86198f", fontStyle: "italic", textAlign:"center", margin:"50px 10px" }}
          variant="h6"
          component="div"
        >
       <BsBalloonHeart style={{ color: "#f0abfc" }} />
        Sua mensagem só faz transbordar de amor o nosso coração
       <BsBalloonHeart style={{ color: "#f0abfc" }} />
      </Typography>
      <form style={{ width: "50%",margin: "0 auto",height: "100vh" }} >
        <Stack spacing={4} direction="column"/*  sx={{ width:{ md:"50%", xs:"80%"}, height: "100vh", margin: "0 auto", }} */>
          <TextField
            color="secondary"
            variant="outlined"
            type="text"
            label="Nome"
            fullWidth
            size="small"
          />
          <TextField
            color="secondary"
            variant="outlined"
            type="text"
            label="Email"
            fullWidth
            size="small"
          />
          <TextField
            color="secondary"
            variant="outlined"
            type="text"
            label="Mensagem"
            fullWidth
            multiline
            rows={4}
          />

          <Button
            variant="contained"
            type="submit"
            color="secondary"
            size="large"
            sx={{width: {
              xs: "100%", md:"40%"},alignSelf:"center"}}
            /* endIcon={<SendIcon />} */
          >
            Enviar
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default MensagemNoivos;
