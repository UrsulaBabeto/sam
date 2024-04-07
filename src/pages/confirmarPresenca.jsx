import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import Navbar from "../components/Navbar";

function ConfirmarPresenca() {
  return (
    <>
    <Navbar/>
      <Typography
        sx={{ color: "#4a044e", textAlign: "center", margin: "50px 0" }}
        gutterBottom
        variant="h3"
        component="div"
      >
        Confirme sua presença
      </Typography>

      <form  style={{ width: "50%",margin: "0 auto",height: "100vh" }}>
        <Stack spacing={4} direction="column">
          <TextField

            color="secondary"
            variant="outlined"
            type="text"
            label="Nome"
            fullWidth
            size="small"
          />
          <Box
            sx={{
              display: {md:"flex", xs:"block"},
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ToggleButtonGroup
            sx={{ marginBottom:{xs:"20px"},}}
              color="secondary"
              /*   value={alignment} */
              exclusive
            >
              <label style={{ marginRight: "30px", alignSelf: "center" }}>
                Confirme sua presença:
              </label>
              <ToggleButton value="nao">
                <CancelIcon sx={{ color: "#701a75" }} />
              </ToggleButton>
              <ToggleButton value="sim">
                <CheckIcon sx={{ color: "#701a75" }} />
              </ToggleButton>
            </ToggleButtonGroup>

            <label style={{ alignSelf: "center" }}>Total de adultos:</label>
            <TextField
              color="secondary"
              variant="outlined"
              type="number"
              size="small"
              sx={{ width:{ md:"100px", xs:"80px"},
            marginLeft:{xs:"20px"} }}
            />
          </Box>
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
            label="Telefone"
            fullWidth
            size="small"
          />

          <Button
            variant="contained"
            type="submit"
            color="secondary"
            size="large"
            sx={{width: {
              xs: "100%", md:"40%"},alignSelf:"center"}}
          >
            Responder
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default ConfirmarPresenca;
