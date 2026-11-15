import { cursos } from "../data/cursos";
import "./Cursos.css";

export default function Cursos() {
  return (
    <section className="cursos-page">
      <div className="cursos-container">
        <h1>Cursos que Indico</h1>
        <p className="cursos-subtitle">
          Uma seleção de cursos de qualidade para aprofundar seus conhecimentos em Baralho Cigano e Lenormand.
        </p>

        <div className="cursos-grid">
          {cursos.map((curso, index) => (
            <a href={curso.link} target="_blank" rel="noopener noreferrer" key={index} className="curso-card-link">
              <article className="curso-card">
                <div className="curso-image">
                  <img
                    src={curso.imagem}
                    alt={`Capa de ${curso.titulo}`}
                    onError={(e) => { e.target.style.background = "var(--lilas)"; }}
                  />
                </div>

                <div className="curso-info">
                  <h2>{curso.titulo}</h2>

                  <h3>{curso.instrutor}</h3>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
