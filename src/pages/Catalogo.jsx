
import {
  perguntas,
  consultaLivre,
  espiritualidade,
  previsaoMensal,
  previsoes2028,
  metodos,
  metodosPrecos,
  planos,
  fidelidade,
  informacoes,
} from "../data/catalogo";

import MethodCard from "../components/MethodCard";

import "./Catalogo.css";

function PriceCard({ item }) {
  return (
    <div className="price-card">
      <span>{item.nome}</span>

      <strong>
        R$ {item.valor.toFixed(2).replace(".", ",")}
      </strong>
    </div>
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

  // Todas as consultas de 2028 utilizam os dados de catalogo.js.
  // Os valores são exibidos separadamente na seção de preços.

  const previsoes2028Cards = [
    ...previsoes2028.consultas.map((consulta, index) => ({
      categoria:
        index < 2
          ? "Previsões de Fim de Ano — 2028"
          : "Previsões por Área — 2028",
      nome: consulta.nome,
      descricao: consulta.descricao,
      itens: consulta.itens,
    })),

    {
      categoria: "Previsões de Fim de Ano — 2028",
      nome: previsoes2028.completão.nome,
      descricao: previsoes2028.completão.descricao,
      itens: previsoes2028.completão.itens,
    },
  ];

  return (
    <div className="catalogo">

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

      {/* SUMÁRIO DO CATÁLOGO */}

      <nav
        className="catalog-navbar"
        aria-label="Sumário do catálogo"
      >
        <div className="catalog-nav-header">
          <span>✦ NAVEGUE PELO CATÁLOGO ✦</span>
          <h2>Explore nossas leituras</h2>
          <p>
            Encontre facilmente a categoria que deseja consultar.
          </p>
        </div>

        <div className="catalog-nav-groups">

          <div className="catalog-nav-group">
            <h3>Informações e benefícios</h3>

            <div className="catalog-nav-links">
              <a href="#informacoes">Informações importantes</a>
              <a href="#planos">Planos mensais</a>
              <a href="#fidelidade">Círculo da Lua</a>
            </div>
          </div>

          <div className="catalog-nav-group">
            <h3>Consultas e leituras</h3>

            <div className="catalog-nav-links">
              <a href="#perguntas">Perguntas ao Oráculo</a>
              <a href="#consulta-livre">Consulta Livre</a>
              <a href="#espiritualidade">Perguntas à Espiritualidade</a>
              <a href="#previsao-mensal">Previsão Mensal</a>
            </div>
          </div>

          <div className="catalog-nav-group">
            <h3>Previsões e métodos</h3>

            <div className="catalog-nav-links">
              <a href="#previsoes-2028">Previsões para 2028</a>
              <a href="#valores-metodos">Valores dos Métodos</a>
              <a href="#metodos">Métodos e Tiragens</a>
            </div>
          </div>

        </div>
      </nav>

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
            Taxa de urgência: R$ {informacoes.urgencia.valor},00
          </strong>

          <span>
            Entrega em menos de 24h.
          </span>
        </aside>
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
                R$ {plano.valor.toLocaleString("pt-BR")}
                <small>/mês</small>
              </strong>

              <p>{plano.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CÍRCULO DA LUA */}

      <section id="fidelidade" className="fidelity">
        <span>✦ CÍRCULO DA LUA</span>

        <h2>
          Quanto mais você consulta,
          <strong> mais benefícios acumula.</strong>
        </h2>

        <div className="fidelity-grid">
          {fidelidade.map((item) => (
            <div key={item.atendimentos}>
              <strong>
                {item.atendimentos}
              </strong>

              <span>atendimentos</span>

              <p>{item.beneficio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERGUNTAS AO ORÁCULO */}

      <section id="perguntas" className="catalog-section">
        <h2>Perguntas ao Oráculo</h2>

        <div className="prices">
          <PriceCard item={perguntas.precos[0]} />
        </div>

        <h3>Combos</h3>

        <div className="prices">
          {perguntas.precos.slice(1).map((item) => (
            <PriceCard key={item.nome} item={item} />
          ))}
        </div>
      </section>

      {/* CONSULTA LIVRE */}

      <section id="consulta-livre" className="catalog-section">
        <h2>Consulta Livre</h2>

        <p>{consultaLivre.descricao}</p>

        <div className="prices">
          {consultaLivre.precos.map((item) => (
            <PriceCard key={item.nome} item={item} />
          ))}
        </div>
      </section>

      {/* PERGUNTAS À ESPIRITUALIDADE */}

      <section id="espiritualidade" className="catalog-section">
        <h2>Perguntas à Espiritualidade</h2>

        <div className="prices">
          <PriceCard item={espiritualidade.precos[0]} />
        </div>

        <h3>Combos</h3>

        <div className="prices">
          {espiritualidade.precos.slice(1).map((item) => (
            <PriceCard key={item.nome} item={item} />
          ))}
        </div>
      </section>

      {/* PREVISÃO MENSAL */}

      <section id="previsao-mensal" className="catalog-section">
        <h2>Previsão Mensal</h2>

        <p>{previsaoMensal.descricao}</p>

        <div className="area-list">
          {previsaoMensal.areas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>

        <div className="prices">
          <PriceCard item={previsaoMensal.precos[0]} />
        </div>

        <h3>Combos</h3>

        <div className="prices">
          {previsaoMensal.precos.slice(1).map((item) => (
            <PriceCard key={item.nome} item={item} />
          ))}
        </div>
      </section>

      {/* PREVISÕES PARA 2028 */}

      <section
        id="previsoes-2028"
        className="catalog-section forecast-2028"
      >
        <div className="section-heading">
          <span>✦ FIM DE ANO</span>

          <h2>
            Previsões para
            <strong> 2028</strong>
          </h2>

          <p>
            {previsoes2028.descricao}
          </p>
        </div>

        {/* VALORES DAS PREVISÕES */}

        <div className="forecast-prices">
          <h3>Valores das Previsões para 2028</h3>

          <h4>Consultas</h4>

          <div className="prices">
            {previsoes2028.consultas.map((item) => (
              <PriceCard
                key={item.nome}
                item={{
                  nome: item.nome,
                  valor: item.valor,
                }}
              />
            ))}
          </div>

          <h4>Previsões por Área</h4>

          <div className="prices">
            {previsoes2028.precosPorArea.map((item) => (
              <PriceCard
                key={item.nome}
                item={item}
              />
            ))}
          </div>

          <h4>Experiência Completa</h4>

          <div className="prices">
            <PriceCard
              item={{
                nome: previsoes2028.completão.nome,
                valor: previsoes2028.completão.valor,
              }}
            />
          </div>
        </div>

        {/* EXPLICAÇÃO DAS MODALIDADES */}

        <div className="forecast-intro">
          <h3>{previsoes2028.comoFunciona.titulo}</h3>

          <p>
            {previsoes2028.comoFunciona.descricao}
          </p>

          <div className="forecast-options">
            {previsoes2028.comoFunciona.opcoes.map((opcao) => (
              <div className="forecast-option" key={opcao.nome}>
                <h4>{opcao.nome}</h4>

                <p>{opcao.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CARDS EXPANSÍVEIS */}

        <div className="forecast-cards">
          <div className="section-heading">
            <h3>Previsões de Fim de Ano — 2028</h3>
          </div>

          <div className="method-grid">
            {previsoes2028Cards
              .filter(
                (previsao) =>
                  previsao.categoria === "Previsões de Fim de Ano — 2028"
              )
              .map((previsao) => (
                <MethodCard
                  key={previsao.nome}
                  method={previsao}
                />
              ))}
          </div>

          <div className="section-heading">
            <h3>Previsões por Área — 2028</h3>
          </div>

          <div className="method-grid">
            {previsoes2028Cards
              .filter(
                (previsao) =>
                  previsao.categoria === "Previsões por Área — 2028"
              )
              .map((previsao) => (
                <MethodCard
                  key={previsao.nome}
                  method={previsao}
                />
              ))}
          </div>
        </div>
      </section>

      {/* VALORES DOS MÉTODOS */}

      <section
        id="valores-metodos"
        className="catalog-section"
      >
        <h2>Valores dos Métodos</h2>

        <div className="method-prices">
          <div>
            <h3>Leitura Normal</h3>

            <div className="prices">
              {metodosPrecos.normal.map((item) => (
                <PriceCard
                  key={item.nome}
                  item={item}
                />
              ))}
            </div>
          </div>

          <div>
            <h3>Leitura Espiritual</h3>

            <div className="prices">
              {metodosPrecos.espiritual.map((item) => (
                <PriceCard
                  key={item.nome}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODOS E TIRAGENS */}

      <section id="metodos" className="methods-section">
        <div className="section-heading">
          <span>✦ MÉTODOS</span>

          <h2>
            Escolha seu
            <strong> caminho.</strong>
          </h2>
        </div>

        {categorias.map((categoria) => {
          const methods = metodos.filter(
            (method) => method.categoria === categoria
          );

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

    </div>
  );
}
