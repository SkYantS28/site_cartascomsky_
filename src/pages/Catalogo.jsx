
import { useEffect, useState } from "react";

import {
  perguntas,
  consultaLivre,
  espiritualidade,
  previsaoMensal,
  metodos,
  metodosPrecos,
  previsoes2028,
  planos,
  fidelidade,
  informacoes,
} from "../data/catalogo";

import MethodCard from "../components/MethodCard";
import "./Catalogo.css";

function formatarValor(valor) {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

const navegacao = [
  { id: "informacoes", nome: "Informações importantes" },
  { id: "planos", nome: "Planos Mensais" },
  { id: "circulo-lua", nome: "✦ Círculo da Lua" },
  { id: "valores", nome: "Valores" },
  { id: "perguntas-oraculo", nome: "Perguntas ao Oráculo" },
  {
    id: "perguntas-espiritualidade",
    nome: "Perguntas à Espiritualidade",
  },
  { id: "consulta-livre", nome: "Consulta Livre" },
  { id: "previsao-mensal", nome: "Previsão Mensal" },
  { id: "metodos", nome: "Métodos" },
  { id: "previsoes-2028", nome: "Previsões para 2028" },
];

function CatalogNavigation() {
  const [activeSection, setActiveSection] = useState("informacoes");

  useEffect(() => {
    const sections = navegacao
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-110px 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="catalog-navigation"
      aria-label="Navegação do catálogo"
    >
      <div className="catalog-navigation__inner">
        <span className="catalog-navigation__label">
          NAVEGAR PELO CATÁLOGO
        </span>

        <div className="catalog-navigation__links">
          {navegacao.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id ? "active" : ""
              }
              onClick={() => setActiveSection(item.id)}
            >
              {item.nome}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function PriceCard({ item }) {
  return (
    <div className="price-card">
      <span>{item.nome}</span>
      <strong>{formatarValor(item.valor)}</strong>
    </div>
  );
}

function DeckCard({ deck }) {
  return (
    <article className="forecast-deck">
      <h4>{deck.nome}</h4>

      {deck.meses && (
        <div className="forecast-months">
          {deck.meses.map((mes) => (
            <span key={mes}>{mes}</span>
          ))}
        </div>
      )}

      {deck.casas && (
        <div className="forecast-positions">
          {deck.casas.map((casa, index) => (
            <p key={index}>
              <span>✦</span> {casa}
            </p>
          ))}
        </div>
      )}

      {deck.perguntas?.map((item, index) => (
        <div className="forecast-question" key={index}>
          <h5>{item.pergunta}</h5>

          {item.casas?.map((casa, casaIndex) => (
            <p key={casaIndex}>{casa}</p>
          ))}

          {item.fundo && (
            <small>Fundo do deck: {item.fundo}</small>
          )}
        </div>
      ))}

      {deck.fundo && (
        <small className="forecast-general-bottom">
          Fundo do deck: {deck.fundo}
        </small>
      )}
    </article>
  );
}

function ForecastCard({ consulta }) {
  return (
    <article className="forecast-card">
      <div className="forecast-card-header">
        <div>
          <span>CONSULTA ESPECIAL</span>
          <h3>{consulta.nome}</h3>
        </div>

        <strong>{formatarValor(consulta.valor)}</strong>
      </div>

      <p className="forecast-description">
        {consulta.descricao}
      </p>

      <div className="forecast-decks">
        {consulta.decks?.map((deck, index) => (
          <DeckCard key={index} deck={deck} />
        ))}
      </div>
    </article>
  );
}

export default function Catalogo() {
  const categorias = [
    "Caminhos, Escolhas e Decisões",
    "Trabalho, Carreira e Prosperidade",
    "Emocional e Autoconhecimento",
    "Amor e Relacionamentos",
    "Mediunidade e Espiritualidade",
  ];

  return (
    <div className="catalogo">

      {/* CABEÇALHO */}

      <section className="page-header">
        <span>✦ CARTAS COM SKY</span>

        <h1>
          Catálogo de
          <strong> Leituras</strong>
        </h1>

        <p>
          Escolha a leitura que melhor corresponde ao que
          você deseja compreender neste momento.
        </p>
      </section>

      {/* NAVEGAÇÃO */}

      <CatalogNavigation />

      {/* INFORMAÇÕES IMPORTANTES */}

      <section id="informacoes" className="important">
        <h1>Informações importantes</h1>

        <div>
          {informacoes.regras.map((regra, index) => (
            <p key={index}>
              <span className="star-pink">✦</span> {regra}
            </p>
          ))}
        </div>

        <aside>
          <strong>
            Taxa de urgência:{" "}
            {formatarValor(informacoes.urgencia.valor)}
          </strong>

          <span>{informacoes.urgencia.prazo}</span>
        </aside>

        <p className="delivery-info">
          Prazo padrão: {informacoes.prazo}
        </p>
      </section>

      {/* PLANOS MENSAIS */}

      <section id="planos" className="plans">
        <div className="section-heading">
          <span>✦ ACOMPANHAMENTO</span>

          <h2>
            Planos
            <strong> Mensais</strong>
          </h2>
        </div>

        <div className="plan-grid">
          {planos.map((plano) => (
            <div className="plan-card" key={plano.nome}>
              <h3>{plano.nome}</h3>

              <strong>
                {formatarValor(plano.valor)}
                <small>/mês</small>
              </strong>

              <p>{plano.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CÍRCULO DA LUA */}

      <section id="circulo-lua" className="fidelity">
        <span>✦ CÍRCULO DA LUA</span>

        <h2>
          Quanto mais você consulta,
          <strong> mais benefícios acumula.</strong>
        </h2>

        <div className="fidelity-grid">
          {fidelidade.map((item) => (
            <div key={item.atendimentos}>
              <strong>{item.atendimentos}</strong>
              <span>atendimentos</span>
              <p>{item.beneficio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERGUNTAS AO ORÁCULO */}

      <section
        id="perguntas-oraculo"
        className="catalog-section"
      >
        <h2>Perguntas ao Oráculo</h2>

        <p>{perguntas.descricao}</p>

        <div className="prices">
          {perguntas.precos.map((item) => (
            <PriceCard key={item.nome} item={item} />
          ))}
        </div>
      </section>

      {/* PERGUNTAS À ESPIRITUALIDADE */}

      <section
        id="perguntas-espiritualidade"
        className="catalog-section"
      >
        <h2>Perguntas à Espiritualidade</h2>

        <p>{espiritualidade.descricao}</p>

        <div className="prices">
          {espiritualidade.precos.map((item) => (
            <PriceCard key={item.nome} item={item} />
          ))}
        </div>
      </section>

      {/* CONSULTA LIVRE */}

      <section
        id="consulta-livre"
        className="catalog-section"
      >
        <h2>Consulta Livre</h2>

        <p>{consultaLivre.descricao}</p>

        <div className="prices">
          {consultaLivre.precos.map((item) => (
            <PriceCard key={item.nome} item={item} />
          ))}
        </div>
      </section>

      {/* PREVISÃO MENSAL */}

      <section
        id="previsao-mensal"
        className="catalog-section monthly-forecast"
      >
        <div className="section-heading">
          <span>✦ ACOMPANHAMENTO DO MÊS</span>

          <h2>
            Previsão
            <strong> Mensal</strong>
          </h2>
        </div>

        <p>{previsaoMensal.descricao}</p>

        <h3>Áreas disponíveis</h3>

        <div className="area-list">
          {previsaoMensal.areas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>

        <div className="monthly-decks">
          <article className="monthly-deck">
            <span>1º DECK</span>
            <h3>O que tende a se manifestar?</h3>

            <p>
              Investiga as principais tendências e como elas
              podem se desenvolver durante o mês.
            </p>

            <ul>
              <li>Casa 1: Principal tendência.</li>
              <li>
                Casa 2: Como essa tendência se desenvolve
                ou se complementa.
              </li>
              <li>
                Fundo do deck: Energia subjacente da situação.
              </li>
            </ul>
          </article>

          <article className="monthly-deck">
            <span>2º DECK</span>
            <h3>O que merece minha atenção?</h3>

            <p>
              Analisa os pontos que exigem cuidado e a melhor
              maneira de lidar com eles.
            </p>

            <ul>
              <li>Casa 1: O que merece atenção.</li>
              <li>Casa 2: Como lidar com a situação.</li>
              <li>Casa 3: Melhor postura diante do cenário.</li>
              <li>
                Fundo do deck: Energia subjacente da situação.
              </li>
            </ul>
          </article>

          <article className="monthly-deck">
            <span>3º DECK</span>
            <h3>O que essa área pode me ensinar?</h3>

            <p>
              Explora os aprendizados e o significado mais
              profundo das experiências do mês.
            </p>

            <ul>
              <li>Casa 1: Principal aprendizado.</li>
              <li>
                Casa 2: Como desenvolver ou aplicar
                esse aprendizado.
              </li>
              <li>
                Fundo do deck: Significado mais profundo
                da situação.
              </li>
            </ul>
          </article>
        </div>

        <h3>Valores por quantidade de áreas</h3>

        <div className="prices">
          {previsaoMensal.precos.map((item) => (
            <PriceCard key={item.nome} item={item} />
          ))}
        </div>
      </section>

      {/* VALORES DOS MÉTODOS */}

      <section id="valores" className="catalog-section">
        <div className="section-heading">
          <span>✦ LEITURAS PERSONALIZADAS</span>

          <h2>
            Valores dos
            <strong> Métodos</strong>
          </h2>
        </div>

        <div className="method-prices">
          <div>
            <h3>Leitura Normal</h3>

            <div className="prices">
              {metodosPrecos.normal.map((item) => (
                <PriceCard key={item.nome} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3>Leitura Espiritual</h3>

            <div className="prices">
              {metodosPrecos.espiritual.map((item) => (
                <PriceCard key={item.nome} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODOS */}

      <section id="metodos" className="methods-section">
        <div className="section-heading">
          <span>✦ MÉTODOS</span>

          <h2>
            Escolha seu
            <strong> caminho.</strong>
          </h2>

          <p>
            Explore os métodos disponíveis e abra cada leitura
            para conhecer suas perguntas e estrutura.
          </p>
        </div>

        {categorias.map((categoria) => {
          const methods = metodos.filter(
            (method) => method.categoria === categoria
          );

          if (!methods.length) return null;

          return (
            <div className="method-category" key={categoria}>
              <h3>{categoria}</h3>

              <div className="method-grid">
                {methods.map((method) => (
                  <MethodCard
                    key={method.nome}
                    method={method}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* PREVISÕES PARA 2028 */}

      <section
        id="previsoes-2028"
        className="special-forecasts"
      >
        <div className="section-heading">
          <span>✦ EDIÇÃO ESPECIAL</span>

          <h2>
            Fim de Ano —
            <strong> Previsões para 2028</strong>
          </h2>

          <p>{previsoes2028.descricao}</p>
        </div>

        <div className="forecast-how">
          <h3>Como funciona</h3>

          <div className="forecast-how-grid">
            {previsoes2028.comoFunciona.map((item) => (
              <article key={item.nome}>
                <h4>{item.nome}</h4>
                <p>{item.descricao}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="forecast-consultations">
          {previsoes2028.consultas.map((consulta) => (
            <ForecastCard
              key={consulta.nome}
              consulta={consulta}
            />
          ))}
        </div>

        <div className="forecast-area-prices">
          <h3>Previsões por quantidade de áreas</h3>

          <p>
            Escolha as áreas da sua vida que deseja explorar
            na previsão anual de 2028.
          </p>

          <div className="prices">
            {previsoes2028.precosPorArea.map((item) => (
              <PriceCard key={item.nome} item={item} />
            ))}
          </div>
        </div>

        <article className="completing-forecast">
          <span>✦ LEITURA MAIS COMPLETA</span>

          <h3>{previsoes2028.completão.nome}</h3>

          <strong>
            {formatarValor(previsoes2028.completão.valor)}
          </strong>

          <p>{previsoes2028.completão.descricao}</p>

          <h4>Áreas incluídas</h4>

          <div className="area-list">
            {previsoes2028.completão.areas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </article>
      </section>

    </div>
  );
}
