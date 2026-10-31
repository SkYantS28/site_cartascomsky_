
import { useState } from "react";

function TiragemItem({ item, index }) {
  if (typeof item === "string") {
    return (
      <div className="tiragem-item" key={index}>
        <p>{item}</p>
      </div>
    );
  }

  if (item.titulo && item.perguntas) {
    return (
      <div className="tiragem-item tiragem-group" key={index}>
        <h5>{item.titulo}</h5>

        <ul>
          {item.perguntas.map((pergunta, perguntaIndex) => (
            <li key={perguntaIndex}>{pergunta}</li>
          ))}
        </ul>

        {item.fundo && (
          <small>Fundo do deck: {item.fundo}</small>
        )}
      </div>
    );
  }

  return (
    <div className="tiragem-item" key={index}>
      {item.pergunta && <h5>{item.pergunta}</h5>}

      {item.periodos && (
        <div className="tiragem-periodos">
          {item.periodos.map((periodo, periodoIndex) => (
            <span key={periodoIndex}>{periodo}</span>
          ))}
        </div>
      )}

      {item.casas?.map((casa, casaIndex) => (
        <p key={casaIndex}>{casa}</p>
      ))}

      {item.fundo && (
        <small>Fundo do deck: {item.fundo}</small>
      )}
    </div>
  );
}

export default function MethodCard({ method }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`method-card ${open ? "open" : ""}`}>
      <button
        className="method-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div>
          <span>{method.categoria}</span>
          <h3>{method.nome}</h3>
        </div>

        <strong>{open ? "−" : "+"}</strong>
      </button>

      {open && (
        <div className="method-content">
          {method.descricao && <p>{method.descricao}</p>}

          {method.itens?.length > 0 && (
            <div className="method-highlights">
              <h4>O que será analisado</h4>

              <ul>
                {method.itens.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {method.tiragem?.length > 0 && (
            <div className="method-spread">
              <h4>Estrutura da tiragem</h4>

              {method.tiragem.map((item, index) => (
                <TiragemItem item={item} index={index} key={index} />
              ))}
            </div>
          )}

          {method.estruturaPerguntaObjetiva && (
            <div className="method-spread">
              <h4>Estrutura das perguntas</h4>

              {method.estruturaPerguntaObjetiva.casas?.map(
                (casa, index) => (
                  <p key={index}>{casa}</p>
                )
              )}

              {method.estruturaPerguntaObjetiva.fundo && (
                <small>
                  Fundo do deck: {method.estruturaPerguntaObjetiva.fundo}
                </small>
              )}
            </div>
          )}

          {method.perguntasObjetivas?.length > 0 && (
            <div className="method-spread">
              <h4>Perguntas da leitura</h4>

              <ol>
                {method.perguntasObjetivas.map((pergunta, index) => (
                  <li key={index}>{pergunta}</li>
                ))}
              </ol>
            </div>
          )}

          {method.observacoes?.length > 0 && (
            <div className="method-observations">
              <h4>Observações</h4>

              <ul>
                {method.observacoes.map((observacao, index) => (
                  <li key={index}>{observacao}</li>
                ))}
              </ul>
            </div>
          )}

          {method.adicional && (
            <small className="method-additional">
              {method.adicional}
            </small>
          )}
        </div>
      )}
    </article>
  );
}
