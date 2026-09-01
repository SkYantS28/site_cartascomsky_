import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span>✦</span>
            <span>Cartas com Sky</span>
          </Link>

          <p>
            Leituras intuitivas para trazer clareza,
            direcionamento e novas perspectivas.
          </p>
        </div>


        <div className="footer-column">

          <h3>Navegação</h3>

          <Link to="/">Início</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/livros">Livros que indico</Link>
          <Link to="/cursos">Cursos que indico</Link>
          <Link to="/oraculos">Meus Oráculos</Link>
          <Link to="/agendamento">Agendamento</Link>

        </div>


        <div className="footer-column">

          <h3>Contato</h3>

          <a
            href="https://www.instagram.com/cartascomsky_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@cartascomsky_"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>

          <a href="mailto:cartascomsky@gmail.com">
            cartascomsky@gmail.com
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © {currentYear} Cartas com Sky. Todos os direitos reservados.
        </p>

        <p>
          Conteúdo, textos, identidade visual e materiais autorais
          protegidos por direitos autorais.
        </p>

        <span>
          Feito com ✦ por Sky
        </span>

      </div>

    </footer>
  );
}
