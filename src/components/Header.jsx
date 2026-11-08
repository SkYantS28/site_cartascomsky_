import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          <span className="logo-star">✦</span>
          <span>Cartas com Sky</span>
        </Link>

        <nav>
          <Link to="/" className={isActive("/") ? "active" : ""}>Início</Link>
          <Link to="/catalogo" className={isActive("/catalogo") ? "active" : ""}>Catálogo</Link>
        </nav>

        <Link to="/agendamento" className="header-button">
          Agendar
        </Link>

      </div>
    </header>
  );
}
