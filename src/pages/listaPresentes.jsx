import { Link, Typography } from "@mui/material";
import CardComponent from "../components/card";
import Navbar from "../components/Navbar";

function ListaPresentes() {
  const presentes = [
    {
      price: "R$ 75",
      img: "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg",
      title: "Por do Sol em Itacare",
    },
    {
      price: "R$ 56",
      img: "https://cdn.pixabay.com/photo/2017/07/28/23/04/book-2550168_1280.jpg",
      title: "Piquenique no parque",
    },
    {
      price: "R$ 180",
      img: "https://img.freepik.com/free-photo/underwater-scuba-diving-selfie-shot-with-selfie-stick_1253-1485.jpg?w=826&t=st=1708275851~exp=1708276451~hmac=b7b3cb15372c69a940f8463beb61df22832a27fadcba830b3f0fd210d4ff9bf5",
      title: "Mergulho cilindro",
    },
    {
      price: "R$ 68",
      img: "https://img.freepik.com/free-photo/portrait-couple-love-with-balloons-colorful_1150-5937.jpg?w=900&t=st=1708275897~exp=1708276497~hmac=577dbca9032d6756df8b2f21e466548b38ada998e4af98cb88f30615bb7d44e6",
      title: "Passeio romantico de bicicleta",
    },
    {
      price: "R$ 230",
      img: "https://img.freepik.com/free-photo/valentines-day-table-setting-romantic-dinner-marry-me-wedding-engagement-ring_114579-436.jpg?w=826&t=st=1708277973~exp=1708278573~hmac=ea8d9946db8e1fa1799251d5e6ca4e0651011baad4b40854ae8ea32f01b843a0",
      title: "Jantar a luz de velas",
    },
    {
      price: "R$ 380",
      img: "https://cdn.pixabay.com/photo/2020/06/16/20/36/balloon-5307204_1280.jpg",
      title: "Voo de balão",
    },
    {
      price: "R$ 115",
      img: "https://img.freepik.com/free-photo/couple-sitting-resting-beach-summer-day-near-river_155003-29260.jpg?w=900&t=st=1708277557~exp=1708278157~hmac=386c4d39bd2e811eaff413d523863071c0603ba371b242f1b99bf06cd909391d",
      title: "Aluguel de carro",
    },
    {
      price: "R$ 49",
      img: "https://img.freepik.com/free-photo/person-serving-cup-coffee_1286-227.jpg?w=360&t=st=1708277422~exp=1708278022~hmac=41b04f40faeca882978676fe39810ef651bbce4e3477a9b7f0eb474c9aa4b29b",
      title: "Café colonial",
    },
    {
      price: "R$ 945",
      img: "https://cdn.pixabay.com/photo/2020/05/25/17/03/travel-5219496_1280.jpg",
      title: "Passagem aérea",
    },
    {
      price: "R$ 225",
      img: "https://cdn.pixabay.com/photo/2013/11/19/09/42/samoa-213161_1280.jpg",
      title: "Pousada",
    },
    {
      price: "R$ 90",
      img: "https://cdn.pixabay.com/photo/2017/08/02/19/28/buggy-2573039_1280.jpg",
      title: "Passeio de buggy",
    },
    {
      price: "R$ 130",
      img: "https://img.freepik.com/free-photo/muscular-guy-his-slim-girl-enjoy-each-other-couple-posing-with-surfboards_197531-17289.jpg?w=900&t=st=1708277644~exp=1708278244~hmac=120ab11f2c7ce7558a983cfcc18036c40d9f58b867a868bec7ac0b53168761a3",
      title: "Aulas de surf",
    },
    {
      price: "R$ 130",
      img: "https://img.freepik.com/free-photo/full-shot-smiley-man-playing-guitar_23-2149477471.jpg?w=900&t=st=1708276212~exp=1708276812~hmac=f2d98410428e051aa6e7d6607ebe98e74e2e53a5c4a7886835465c2484059b41",
      title: "Serenata",
    },
    {
      price: "R$ 620",
      img: "https://img.freepik.com/free-photo/couple-sleeping-bed-with-sleep-mask_23-2147912048.jpg?w=360&t=st=1708278227~exp=1708278827~hmac=9b15aef44834f56c037b9fe1dabcb9696320e568e1bec6e1046b145540d33fee",
      title: "Spa completo",
    },
  ];

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
          {" "}
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
    </>
  );
}

export default ListaPresentes;
