import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cerimonia from "./pages/cerimonia";
import Home from "./pages/mainPage";
import MensagemNoivos from "./pages/msgnoivos";
import SobreNos from "./pages/sobreNos";
import ConfirmarPresença from "./pages/confirmarPresenca";

import ListaPresentes from "./pages/listaPresentes";
import Cart from "./pages/cart";
import ConfirmarPresenca from "./pages/confirmarPresenca";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirmar-presenca" element={<ConfirmarPresenca />} />
          <Route path="/lista-presentes" element={<ListaPresentes />} />
          <Route path="/mensagem-noivos" element={<MensagemNoivos />} />
          <Route path="/cerimonia" element={<Cerimonia />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          {/*   <Route path="carrinho" element={<Cart />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
