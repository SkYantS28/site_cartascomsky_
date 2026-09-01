import {
  perguntas,
  consultaLivre,
  espiritualidade,
  previsaoMensal,
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
       
        <section className="important">

            <h1>Informações importantes</h1>

            <div>
            {informacoes.regras.map((regra, index) => (
                <p key={index}><span className="star-pink">✦</span> {regra}</p>
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

        <section className="plans">

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

        <section className="fidelity">

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

        <section className="catalog-section">

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

        <section className="catalog-section">

            <h2>Consulta Livre</h2>

            <p>{consultaLivre.descricao}</p>

            <div className="prices">
            {consultaLivre.precos.map((item) => (
                <PriceCard key={item.nome} item={item} />
            ))}
            </div>

        </section>

        <section className="catalog-section">

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

        <section className="catalog-section">

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

        <section className="catalog-section">

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

        <section className="methods-section">

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
