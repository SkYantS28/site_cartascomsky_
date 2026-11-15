import { oraculos } from "../data/oraculos";
import "./Oraculos.css";

export default function Oraculos() {
  return (
    <div className="oraculos-page">

      <section className="page-header">
        <span>✦ MEUS ORÁCULOS</span>

        <h1>
          Ferramentas de
          <strong> conexão</strong>
        </h1>

        <p>
          Os oráculos e tarôs que utilizo nas minhas leituras,
          cada um com sua energia, simbologia e mensagens únicas.
        </p>
      </section>

      <section className="oracles-gallery">

        {oraculos.map((oraculo) => (

          <a href={oraculo.link} target="_blank" rel="noopener noreferrer" key={oraculo.nome} className="oracle-card-link">

            <article className="oracle-card">

              <div className="oracle-image">
                <img
                  src={oraculo.imagem}
                  alt={oraculo.nome}
                  onError={(e) => { e.target.style.background = "var(--lilas)"; }}
                />

                <span className="type-badge">
                  {oraculo.tipo}
                </span>
              </div>

              <div className="oracle-info">

                <h2>{oraculo.nome}</h2>

              </div>

            </article>

          </a>

        ))}

      </section>

    </div>
  );
}
