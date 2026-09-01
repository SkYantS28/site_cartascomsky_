import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import StarBackground from "./components/StarBackground";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Livros from "./pages/Livros";
import Cursos from "./pages/Cursos";
import Oraculos from "./pages/Oraculos";
import Agendamento from "./pages/Agendamento";

export default function App() {
  return (
    <HashRouter>

      <StarBackground />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/oraculos" element={<Oraculos />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </main>

      <Footer />

    </HashRouter>
  );
}
