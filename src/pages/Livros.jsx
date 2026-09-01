import { livros } from "../data/livros";
import "./Livros.css";

export default function Livros() {
  return (
    <div className="livros-page">

        <section className="page-header">
            <span>✦ BIBLIOTECA DA SKY</span>

            <h1>
            Livros que
            <strong> indico</strong>
            </h1>

            <p>
            Livros que fazem parte da minha jornada e que
            considero interessantes para quem deseja aprofundar
            seus conhecimentos.
            </p>
        </section>

        <section className="books-grid">

            {livros.map((livro) => (

            <article className="book-card" key={livro.titulo}>

                <div className="book-cover">
                <img
                    src={livro.imagem}
                    alt={`Capa de ${livro.titulo}`}
                    onError={(e) => { e.target.style.background = "var(--lilas)"; }}
                />
                </div>

                <div className="book-info">

                <span>{livro.categoria}</span>

                <h2>{livro.titulo}</h2>

                <h3>{livro.autor}</h3>

                </div>

            </article>

            ))}

        </section>

    </div>
  );
}
