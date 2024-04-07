import { Typography } from "@mui/material";
import CardComponent from "../components/card";
import Navbar from "../components/Navbar";
import listaPresentes from "../Utils/listaPresentes.json"

function ListaPresentes() {
  const presentes = listaPresentes;

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", padding: "30px" }}>
        <Typography
          sx={{ color: "#4a044e", margin: "50px 0" }}
          gutterBottom
          variant="h3"
          component="div"
        >
          Lista de Presentes
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {" "}
          <a
            style={{ textDecoration: "none" }}
            target="blank"
            href="https://www.casasbahia.com.br/site-oficial-casas-bahia/b"
          >
            <CardComponent
              title="Montando o ninho de amor"
              image="https://img.freepik.com/fotos-gratis/pessoa-segurando-ninho-com-brilhante-ovo-pascoa_23-2148072870.jpg?w=740"
              price="Nossa Casa"
              key="Lista de Presentes"
              buttonName="Acessar Site"
            ></CardComponent>
          </a>
          {presentes.map((e) => (
            <CardComponent
              title={e.title}
              image={e.img}
              price={e.price}
              key={e.title}
              buttonName="Adicionar"
              
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          div {
            grid-template-columns: 1fr ; 
          }
        }
      `}</style>
    </>
  );
}

export default ListaPresentes;
