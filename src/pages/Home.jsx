import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <span className="eyebrow">
            ✦ CARTAS COM SKY
          </span>

          <h1>
            Entre perguntas,
            <br />
            caminhos e
            <span> possibilidades.</span>
          </h1>

          <p>
            Leituras intuitivas para trazer clareza, direcionamento
            e uma compreensão mais profunda sobre diferentes áreas
            da sua vida.
          </p>

          <div className="hero-buttons">
            <Link to="/catalogo" className="button-primary">
              Conhecer o catálogo
            </Link>

            <Link to="/agendamento" className="button-secondary">
              Agendar uma leitura
            </Link>
          </div>

        </div>

        <div className="hero-photo">
          <div className="photo-frame">

            <img
              src="/sky_cartas.jpeg"
              alt="Sky - Cartas com Sky"
              onError={(e) => { e.target.style.background = "var(--lilas)"; }}
            />

            <div className="photo-decoration">✦</div>

          </div>
        </div>

      </section>

      <section className="about">

        <span className="section-eyebrow">
          SOBRE AS LEITURAS
        </span>

        <h2>
          O oráculo não determina.
          <span> Ele orienta.</span>
        </h2>

        <p>
          O oráculo mostra tendências, energias e possibilidades.
          Cada leitura é uma oportunidade de olhar para uma situação
          por uma nova perspectiva, encontrando clareza para aquilo
          que precisa ser compreendido.
        </p>

      </section>

      <section className="home-cards">

        <div>
          <span>✦</span>
          <h3>Amor & Relações</h3>
          <p>
            Compreenda sentimentos, intenções, conexões e caminhos
            possíveis dentro das suas relações.
          </p>
        </div>

        <div>
          <span>✧</span>
          <h3>Autoconhecimento</h3>
          <p>
            Olhe para dentro, compreenda padrões e descubra aspectos
            que ainda podem estar ocultos.
          </p>
        </div>

        <div>
          <span>⋆</span>
          <h3>Carreira & Prosperidade</h3>
          <p>
            Encontre novas perspectivas para decisões profissionais,
            projetos e caminhos financeiros.
          </p>
        </div>

      </section>

      <section className="cta">

        <span>✦</span>

        <h2>
          Existe uma pergunta
          <br />
          esperando por você.
        </h2>

        <Link to="/catalogo">
          Explorar o catálogo →
        </Link>

      </section>

    </div>
  );
}
