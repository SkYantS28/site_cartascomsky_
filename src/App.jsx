import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";

import Home from "./pages/Home";
import CatalogoBlackweek from "./pages/catalogo_blackweek";
import Agendamento from "./pages/Agendamento";

export default function App() {
  return (
    <BrowserRouter>

      <StarBackground />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogoBlackweek />} />
          <Route path="/catalogo_blackweek" element={<CatalogoBlackweek />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}
