import {
  consultaLivre as consultaLivreOriginal,
  fidelidade,
  informacoes,
  metodos as metodosOriginais,
  metodosPrecos as metodosPrecosOriginais,
  perguntas as perguntasOriginais,
  planos as planosOriginais,
  previsaoMensal as previsaoMensalOriginal,
  previsoes2027 as previsoes2027Originais,
  espiritualidade as espiritualidadeOriginal,
} from "./catalogo.js";

const aplicarMetadeDoPreco = (item) => ({
  ...item,
  valorOriginal: item.valor,
  valor: item.valor / 2,
});

const aplicarOfertaPerguntas = (item) => {
  const quantidadePaga = Number.parseInt(item.nome, 10);
  const quantidadeTotal = quantidadePaga * 2;

  return {
    ...item,
    promocao:
      quantidadePaga === 1
        ? "Pague 1 pergunta e ganhe mais 1 grátis: 2 no total."
        : `Pague pelo combo de ${quantidadePaga} e receba ${quantidadeTotal} perguntas no total.`,
  };
};

const aplicarMetadeNosPrecos = (precos) => precos.map(aplicarMetadeDoPreco);

export const perguntas = {
  ...perguntasOriginais,
  precos: perguntasOriginais.precos.map(aplicarOfertaPerguntas),
};

export const espiritualidade = {
  ...espiritualidadeOriginal,
  precos: espiritualidadeOriginal.precos.map(aplicarOfertaPerguntas),
};

export const consultaLivre = {
  ...consultaLivreOriginal,
  precos: aplicarMetadeNosPrecos(consultaLivreOriginal.precos),
};

export const previsaoMensal = {
  ...previsaoMensalOriginal,
  precos: aplicarMetadeNosPrecos(previsaoMensalOriginal.precos),
};

export const previsoes2027 = {
  ...previsoes2027Originais,
  consultas: aplicarMetadeNosPrecos(previsoes2027Originais.consultas),
  precosPorArea: aplicarMetadeNosPrecos(
    previsoes2027Originais.precosPorArea
  ),
  completão: aplicarMetadeDoPreco(previsoes2027Originais.completão),
};

export const metodosPrecos = {
  normal: aplicarMetadeNosPrecos(metodosPrecosOriginais.normal),
  espiritual: aplicarMetadeNosPrecos(metodosPrecosOriginais.espiritual),
};

export const metodos = metodosOriginais.map((metodo) => ({
  ...metodo,
  adicional: metodo.adicional
    ?.replace("R$25,00", "R$12,50")
    .replace("R$15,00", "R$7,50"),
}));

export const planos = planosOriginais.map((plano) => ({
  ...plano,
  mesesBonus: 2,
}));

export { fidelidade, informacoes };
