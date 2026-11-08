import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import StarBackground from "./components/StarBackground";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Agendamento from "./pages/Agendamento";

export default function App() {
  return (
    <BrowserRouter>

      <StarBackground />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}
