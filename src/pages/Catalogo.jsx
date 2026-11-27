
import * as catalogoNormal from "../data/catalogo";
import * as catalogoBlackweek from "../data/catalogo_bblackweek";

import MethodCard from "../components/MethodCard";

import "./Catalogo.css";

const formatarPreco = (valor) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);

function PriceCard({ item }) {
  return (
    <div className={`price-card ${item.valorOriginal ? "price-card-sale" : ""}`}>
      <span>{item.nome}</span>

      {item.valorOriginal && (
        <del>{formatarPreco(item.valorOriginal)}</del>
      )}

      <strong>{formatarPreco(item.valor)}</strong>

      {item.promocao && (
        <small className="price-card-promo">{item.promocao}</small>
      )}
    </div>
  );
}

export default function Catalogo({ blackweek = false }) {
  const dados = blackweek ? catalogoBlackweek : catalogoNormal;
  const {
    perguntas,
    consultaLivre,
    espiritualidade,
    previsaoMensal,
    previsoes2027,
    metodos,
    metodosPrecos,
    planos,
    fidelidade,
    informacoes,
  } = dados;

  const categorias = [
    "Caminhos, Escolhas e Decisões",
    "Trabalho, Carreira e Prosperidade",
    "Emocional e Autoconhecimento",
    "Amor e Relacionamentos",
    "Mediunidade e Espiritualidade",
  ];

  // Todas as consultas de 2027 utilizam os dados de catalogo.js.
  // Os valores são exibidos separadamente na seção de preços.

  const previsoes2027Cards = [
    ...previsoes2027.consultas.map((consulta, index) => ({
      categoria:
        index < 2
          ? "Previsões de Fim de Ano — 2027"
          : "Previsões por Área — 2027",
      nome: consulta.nome,
      descricao: consulta.descricao,
      itens: consulta.itens,
    })),

    {
      categoria: "Previsões de Fim de Ano — 2027",
      nome: previsoes2027.completão.nome,
      descricao: previsoes2027.completão.descricao,
      itens: previsoes2027.completão.itens,
    },
  ];

  return (
    <div className="catalogo">

      <section className="page-header">
        <span>{blackweek ? "✦ BLACK WEEK" : "✦ CARTAS COM SKY"}</span>

        <h1>
          {blackweek ? (
            <>
              Catálogo
              <strong> Black Week</strong>
            </>
          ) : (
            <>
              Catálogo de
              <strong> Leituras</strong>
            </>
          )}
        </h1>

        <p>
          {blackweek
            ? "Aproveite as ofertas especiais da Black Week em todo o catálogo."
            : "Escolha a leitura que melhor corresponde ao que você deseja compreender neste momento."}
        </p>
      </section>

      {blackweek && (
        <section className="blackweek-banner" aria-label="Ofertas Black Week">
          <h2>Ofertas Black Week</h2>
          <p>
            50% de desconto nos itens do catálogo, exceto nas perguntas e na
            taxa de urgência. Nas perguntas ao Oráculo e à Espiritualidade,
            pague por uma pergunta e ganhe outra; nos combos, receba o dobro de
            perguntas. Os planos mantêm o preço normal e ganham mais 2 meses.
          </p>
        </section>
      )}

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
              <a href="#espiritualidade">Perguntas à Espiritualidade</a>
              <a href="#consulta-livre">Consulta Livre</a>
            </div>
          </div>

          <div className="catalog-nav-group">
            <h3>Previsões e métodos</h3>

            <div className="catalog-nav-links">
              <a href="#previsao-mensal">Previsão Mensal</a>
              <a href="#previsoes-2027">Previsões para 2027</a>
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
              {plano.mesesBonus && (
                <p className="plan-blackweek-bonus">
                  Pague o valor normal e ganhe mais {plano.mesesBonus} meses
                  deste plano.
                </p>
              )}
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
              <p className="fidelity-discount">
                ou <strong>{item.desconto}% de desconto</strong>
                <span> em qualquer item do catálogo</span>
              </p>
            </div>
          ))}
        </div>

        <div className="referral-program">
          <span>✦ INDIQUE E GANHE</span>
          <h3>Indique uma pessoa e vocês dois ganham</h3>
          <p className="referral-description">
            Quando a pessoa indicada fizer uma consulta e informar que veio por
            sua recomendação, ela e você podem escolher uma recompensa:
          </p>
          <div className="referral-rewards">
            <p>1 pergunta grátis</p>
            <span>ou</span>
            <p>20% de desconto em qualquer item do catálogo</p>
          </div>
          <p className="referral-note">A recompensa vale para cada um de vocês.</p>
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

      {/* PREVISÕES PARA 2027 */}

      <section
        id="previsoes-2027"
        className="catalog-section forecast-2027"
      >
        <div className="section-heading">
          <span>✦ FIM DE ANO</span>

          <h2>
            Previsões para
            <strong> 2027</strong>
          </h2>

          <p>
            {previsoes2027.descricao}
          </p>
        </div>

        {/* VALORES DAS PREVISÕES */}

        <div className="forecast-prices">
          <h3>Valores das Previsões para 2027</h3>

          <h4>Consultas</h4>

          <div className="prices">
            {previsoes2027.consultas.map((item) => (
              <PriceCard
                key={item.nome}
                item={item}
              />
            ))}
          </div>

          <h4>Previsões por Área</h4>

          <div className="prices">
            {previsoes2027.precosPorArea.map((item) => (
              <PriceCard
                key={item.nome}
                item={item}
              />
            ))}
          </div>

          <h4>Experiência Completa</h4>

          <div className="prices">
            <PriceCard
              item={previsoes2027.completão}
            />
          </div>
        </div>

        {/* EXPLICAÇÃO DAS MODALIDADES */}

        <div className="forecast-intro">
          <h3>{previsoes2027.comoFunciona.titulo}</h3>

          <p>
            {previsoes2027.comoFunciona.descricao}
          </p>

          <div className="forecast-options">
            {previsoes2027.comoFunciona.opcoes.map((opcao) => (
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
            <h3>Previsões de Fim de Ano — 2027</h3>
          </div>

          <div className="method-grid">
            {previsoes2027Cards
              .filter(
                (previsao) =>
                  previsao.categoria === "Previsões de Fim de Ano — 2027"
              )
              .map((previsao) => (
                <MethodCard
                  key={previsao.nome}
                  method={previsao}
                />
              ))}
          </div>

          <div className="section-heading">
            <h3>Previsões por Área — 2027</h3>
          </div>

          <div className="method-grid">
            {previsoes2027Cards
              .filter(
                (previsao) =>
                  previsao.categoria === "Previsões por Área — 2027"
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
