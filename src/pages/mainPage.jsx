import { Typography } from "@mui/material";
 import Navbar from "../components/Navbar"; 
import { BsBalloonHeart } from "react-icons/bs";
function Home() {
  return (
    <>
     <Navbar />
      <div>
        <img src="./aliancas.jpg" style={{ width: "100%" }} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "inter",
          margin: "20px",
          flexDirection: "column",
          gap: "20px",
          color: "#4a044e",
        }}
      >
        <Typography
          sx={{ color: "#4a044e" }}
          gutterBottom
          variant="h2"
          component="div"
        >
          Bem-vindos
        </Typography>
        <Typography
          sx={{ color: "#86198f", fontStyle: "italic", textAlign:"center" }}
          variant="h6"
          component="div"
        >
          <BsBalloonHeart style={{ color: "#f0abfc" }} />
          Um sonho que está se tornando realidade, acompanhem conosco
          <BsBalloonHeart style={{ color: "#f0abfc" }} />
        </Typography>

        <Typography
          sx={{
            color: "#86198f",
            textAlign: "justify",
            width: "80%",
            letterSpacing: ".5px",
          }}
          variant="p"
        >
          O amor floresceu entre orações compartilhadas, momentos de reflexão e
          gestos de compaixão. Seus caminhos, guiados pela mesma crença e
          valores, os aproximaram de maneira única.
          <br /> Ao compartilhar suas histórias de vida e experiências
          espirituais, perceberam que estavam destinados a seguir juntos o
          caminho da vida. <br />
          Inspirados por sua fé e guiados pelo amor mútuo, o casal decidiu dar
          um passo sagrado em direção ao matrimônio. <br />O casamento não é
          apenas a união de duas almas, mas também uma aliança com o divino. Com
          a bênção de suas comunidades religiosas, Anna e Samuel embarcam na
          jornada de construir uma vida baseada em princípios espirituais, amor
          incondicional e comprometimento mútuo. A celebração de sua união não é
          apenas um evento social, mas um testemunho de sua devoção religiosa e
          amor eterno.
        </Typography>
      </div>
    </>
  );
}

export default Home;
