export const informacoes = {
  prazo: "Até 48h após a confirmação do pagamento.",
  urgencia: {
    valor: 100,
    prazo: "Menos de 24h",
  },

  regras: [
    "O oráculo mostra tendências, energias e possibilidades, mas não determina o futuro de forma absoluta.",
    "Cada tiragem analisa apenas uma situação ou uma área da vida, salvo consultas livres.",
    "As leituras são enviadas com foto da tiragem, interpretação completa e áudio com explicação detalhada.",
    "As leituras são iniciadas somente após a confirmação do pagamento.",
    "Não realizo reembolso após a confirmação do pagamento, exceto em casos onde eu não consiga realizar a leitura ou ultrapasse o prazo informado sem aviso prévio.",
    "Não realizo leituras sobre morte, pessoas falecidas, vidas passadas, processos judiciais e questões legais.",
  ],
};

export const perguntas = {
  titulo: "Perguntas ao Oráculo",
  descricao:
    "Leitura para perguntas específicas e situações que precisam de direcionamento, clareza e entendimento mais profundo.",

  precos: [
    { nome: "1 pergunta", valor: 25 },
    { nome: "2 perguntas", valor: 45 },
    { nome: "3 perguntas", valor: 65 },
    { nome: "4 perguntas", valor: 85 },
    { nome: "5 perguntas", valor: 105 },
  ],
};

export const espiritualidade = {
  titulo: "Perguntas à Espiritualidade",
  descricao:
    "Leitura para compreender mensagens, orientações e direcionamentos da sua espiritualidade, seus guias e suas entidades.",

  precos: [
    { nome: "1 pergunta", valor: 45 },
    { nome: "2 perguntas", valor: 85 },
    { nome: "3 perguntas", valor: 125 },
    { nome: "4 perguntas", valor: 165 },
    { nome: "5 perguntas", valor: 205 },
  ],
};

export const consultaLivre = {
  titulo: "Consulta Livre",
  descricao:
    "Atendimento com perguntas ilimitadas dentro do tempo escolhido, permitindo aprofundar situações e explorar diferentes áreas da vida com mais liberdade.",

  precos: [
    { nome: "1 hora", valor: 125 },
    { nome: "2 horas", valor: 245 },
    { nome: "3 horas", valor: 365 },
  ],
};

export const previsaoMensal = {
  titulo: "Previsão Mensal",
  descricao:
    "Método voltado para entender as tendências, acontecimentos e aprendizados do mês em uma área da vida escolhida.",

  areas: [
    "Amor",
    "Vida financeira",
    "Trabalho",
    "Família",
    "Estudos",
    "Vida social",
    "Saúde",
  ],

  estrutura: [
    {
      deck: 1,
      titulo: "O que tende a se manifestar nessa área durante o mês?",
      casas: [
        "Casa 1: Principal tendência.",
        "Casa 2: Como essa tendência se desenvolve ou se complementa.",
      ],
      fundo:
        "Energia subjacente à situação e às tendências do mês.",
    },
    {
      deck: 2,
      titulo: "O que merece minha atenção nessa área durante o mês?",
      casas: [
        "Casa 1: Situação ou comportamento que merece atenção.",
        "Casa 2: Como lidar com essa questão.",
        "Casa 3: Melhor postura diante da situação.",
      ],
      fundo:
        "Aquilo que está por trás do ponto de atenção.",
    },
    {
      deck: 3,
      titulo: "O que essa área pode me ensinar neste período?",
      casas: [
        "Casa 1: Principal aprendizado.",
        "Casa 2: Como esse aprendizado pode ser desenvolvido ou aplicado.",
      ],
      fundo:
        "Sentido mais profundo da experiência.",
    },
  ],

  precos: [
    { nome: "1 área", valor: 65 },
    { nome: "2 áreas", valor: 125 },
    { nome: "3 áreas", valor: 185 },
    { nome: "4 áreas", valor: 245 },
    { nome: "5 áreas", valor: 305 },
    { nome: "6 áreas", valor: 425 },
    { nome: "7 áreas", valor: 545 },
  ],
};

export const metodos = [
  {
    categoria: "Caminhos, Escolhas e Decisões",
    nome: "Oráculo da Clareza",
    descricao:
      "Método voltado para entender uma situação de forma objetiva, profunda e estratégica.",
    itens: [
      "Resposta principal da pergunta.",
      "Pontos favoráveis e desfavoráveis.",
      "Próximos acontecimentos.",
      "Resultado provável.",
      "Evolução da situação.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Qual é a resposta objetiva para a questão?",
        casas: ["Casa 1: Resposta objetiva."],
      },
      {
        deck: 1,
        pergunta: "O que é favorável nessa questão?",
        casas: ["Casa 1: O que é favorável (pró)."],
        fundo: "Energia subjacente ao que é favorável.",
      },
      {
        deck: 1,
        pergunta: "O que é desfavorável nessa questão?",
        casas: ["Casa 1: O que é desfavorável (contra)."],
        fundo: "Energia subjacente ao que é desfavorável.",
      },
      {
        deck: 2,
        pergunta: "O que ainda está por vir?",
        casas: ["Casas 1 e 2: O que ainda está por vir."],
        fundo: "Energia subjacente ao que está por vir.",
      },
      {
        deck: 2,
        pergunta: "Qual é o resultado possível?",
        casas: ["Casas 6 e 7: Resultado possível."],
        fundo: "Energia subjacente ao resultado.",
      },
      {
        deck: 3,
        pergunta: "Como a questão tende a evoluir?",
        casas: ["Casas 8 e 9: Evolução da questão."],
        fundo: "Energia subjacente à evolução.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho do oráculo?",
        casas: ["Casas 10 e 11: Conselho do oráculo."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Caminhos, Escolhas e Decisões",
    nome: "O Semáforo do Destino",
    descricao:
      "Método voltado para orientar decisões, caminhos e situações que exigem atenção e clareza.",
    itens: [
      "O que deve ser evitado.",
      "O que favorece seus caminhos.",
      "Pontos que exigem atenção, cautela e consciência.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        titulo: "Sinal Vermelho",
        pergunta: "O que devo evitar?",
        casas: [
          "Casas 1 e 2: Sinal vermelho.",
          "Atitudes, ações ou pessoas que devem ser evitadas.",
          "Coisas que podem prejudicar ou atrapalhar.",
          "Perigos e ameaças.",
        ],
        fundo: "Energia subjacente ao sinal vermelho.",
      },
      {
        deck: 2,
        titulo: "Sinal Verde",
        pergunta: "O que devo fazer?",
        casas: [
          "Casas 3 e 4: Sinal verde.",
          "Caminho a seguir.",
          "Atitudes mais adequadas.",
          "Portas que estão abertas.",
        ],
        fundo: "Energia subjacente ao sinal verde.",
      },
      {
        deck: 3,
        titulo: "Sinal Amarelo",
        pergunta: "O que merece atenção ou cuidado?",
        casas: [
          "Casas 5 e 6: Sinal amarelo.",
          "Questões que exigem consciência e cautela.",
          "Aspectos pouco conhecidos ou insuficientemente considerados.",
        ],
        fundo: "Energia subjacente ao sinal amarelo.",
      },
    ],
    observacoes: [
      "Embora seja possível analisar diferentes tipos de questão, essa disposição funciona melhor com perguntas abertas.",
      "A terceira posição recebe destaque por ser mais neutra e pode servir de referência para as outras duas posições.",
      "As cartas das posições 1 e 2 podem ser comparadas com as da posição 3 para compreender o que deve ser evitado e o que deve ser feito.",
    ],
  },

  {
    categoria: "Caminhos, Escolhas e Decisões",
    nome: "Encruzilhada dos Caminhos",
    descricao:
      "Método de comparação entre diferentes possibilidades. O valor da consulta inclui dois caminhos, analisados individualmente pelas mesmas seis posições. É possível acrescentar outros caminhos mediante pagamento adicional.",
    itens: [
      "Essência do caminho.",
      "Consequências e tendências.",
      "Potencial de prosperidade.",
      "O que encanta nesse caminho.",
      "O que pesa nesse caminho.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        casa: 1,
        pergunta: "O que essa escolha representa energeticamente?",
        titulo: "Essência do Caminho",
        fundo: "Energia subjacente à essência do caminho.",
      },
      {
        casa: 2,
        pergunta: "O que tende a acontecer ao seguir esse caminho?",
        titulo: "Consequências",
        fundo: "Energia subjacente às consequências.",
      },
      {
        casa: 3,
        pergunta:
          "Quais são as chances de crescimento, evolução, estabilidade ou sucesso?",
        titulo: "Potencial de Prosperidade",
        fundo: "Energia subjacente ao potencial de prosperidade.",
      },
      {
        casa: 4,
        pergunta: "O que encanta nesse caminho?",
        fundo:
          "Energia subjacente aos aspectos que encantam nesse caminho.",
      },
      {
        casa: 5,
        pergunta: "O que pesa nesse caminho?",
        fundo:
          "Energia subjacente aos aspectos que pesam nesse caminho.",
      },
      {
        casa: 6,
        pergunta:
          "Qual é a direção mais favorável, alerta ou orientação final do oráculo?",
        titulo: "Conselho final do oráculo",
        fundo: "Energia subjacente ao conselho final.",
      },
    ],
    adicional:
      "A consulta inclui dois caminhos. Cada caminho adicional custa R$25,00.",
  },

  {
    categoria: "Caminhos, Escolhas e Decisões",
    nome: "O Mapa do Sonho",
    descricao:
      "Método voltado para entender as possibilidades, os obstáculos e os caminhos para a realização de um sonho ou objetivo importante.",
    itens: [
      "Chances de realização do sonho.",
      "Possibilidades no futuro próximo.",
      "Tendências para o futuro mais distante.",
      "Atitudes que favorecem a concretização.",
      "Pessoas ou situações que podem atrapalhar.",
      "Melhor caminho para alcançar o objetivo.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "O meu sonho vai ser realizado?",
        casas: ["Casas 1 e 2: Possibilidade de realização do sonho."],
        fundo: "Energia subjacente à realização do sonho.",
      },
      {
        deck: 1,
        pergunta: "Vou conseguir realizar este sonho em um futuro próximo?",
        casas: ["Casas 3 e 4: Realização no futuro próximo."],
        observacao:
          "Considera-se futuro próximo o período de até 6 meses.",
      },
      {
        deck: 1,
        pergunta: "Este sonho se realizará em um futuro distante?",
        casas: ["Casas 5 e 6: Realização no futuro distante."],
        observacao:
          "Considera-se futuro distante o período de até 12 meses.",
      },
      {
        deck: 2,
        pergunta: "O que faço para poder realizar este sonho?",
        casas: ["Casas 7 e 8: Ações necessárias."],
        fundo:
          "Energia subjacente às ações necessárias para realizar o sonho.",
      },
      {
        deck: 2,
        pergunta:
          "Existe algo ou alguém que possa atrapalhar a concretização do meu sonho?",
        casas: ["Casas 9 e 10: Possíveis obstáculos."],
        fundo: "Energia subjacente aos possíveis obstáculos.",
      },
      {
        deck: 3,
        pergunta: "Qual é o melhor caminho para a realização deste sonho?",
        casas: ["Casas 11 e 12: Melhor caminho."],
        fundo: "Energia subjacente ao melhor caminho.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final?",
        casas: ["Casas 13 e 14: Conselho final."],
        fundo: "Energia subjacente ao conselho final.",
      },
    ],
  },

  {
    categoria: "Caminhos, Escolhas e Decisões",
    nome: "Núcleo Desperto",
    descricao:
      "Método voltado para compreender o que realmente está por trás de uma escolha ou decisão, identificando desejos, medos, influências e objetivos que podem interferir no processo decisório.",
    itens: [
      "Motivação real por trás da escolha.",
      "Desejo genuíno.",
      "Medos que influenciam a decisão.",
      "Influências externas.",
      "O que está sendo evitado.",
      "O que realmente se deseja alcançar.",
      "Conselho do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "O que realmente está motivando minha escolha?",
        casas: ["Casas 1 e 2: Motivação real por trás da escolha."],
        fundo: "Energia subjacente à motivação.",
      },
      {
        deck: 1,
        pergunta: "O que é desejo genuíno nessa escolha?",
        casas: ["Casas 3 e 4: Desejo genuíno."],
        fundo: "Energia subjacente ao desejo genuíno.",
      },
      {
        deck: 2,
        pergunta: "O que é medo nessa escolha?",
        casas: ["Casas 1 e 2: Medos que influenciam a escolha."],
        fundo: "Energia subjacente aos medos.",
      },
      {
        deck: 2,
        pergunta: "O que é influência externa nessa escolha?",
        casas: [
          "Casas 3 e 4: Influências externas que interferem na decisão.",
        ],
        fundo: "Energia subjacente às influências externas.",
      },
      {
        deck: 3,
        pergunta: "O que estou tentando evitar com essa escolha?",
        casas: ["Casas 1 e 2: Aquilo que estou tentando evitar."],
        fundo: "Energia subjacente ao que estou tentando evitar.",
      },
      {
        deck: 3,
        pergunta: "O que realmente quero alcançar com essa escolha?",
        casas: ["Casas 3 e 4: Aquilo que realmente quero alcançar."],
        fundo: "Energia subjacente ao objetivo.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho do oráculo?",
        casas: ["Casas 5 e 6: Conselho do oráculo."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa da Prosperidade",
    descricao:
      "Método voltado para entender bloqueios, caminhos e tendências da vida financeira.",
    itens: [
      "O que está atrapalhando sua prosperidade e como solucionar.",
      "Previsões para a vida financeira.",
      "O que pode favorecer crescimento e estabilidade.",
      "Atitudes mais positivas para melhorar a situação.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta:
          "O que anda atrapalhando a vida financeira dessa pessoa?",
        casas: ["Casa 1: Problema financeiro."],
        fundo: "Energia subjacente ao problema.",
      },
      {
        deck: 1,
        pergunta:
          "O que ela deveria fazer para solucionar esse problema?",
        casas: ["Casa 2: Solução para o problema."],
        fundo: "Energia subjacente à solução.",
      },
      {
        deck: 2,
        pergunta:
          "Quais são as previsões sobre a vida financeira dessa pessoa?",
        casas: ["Casas 3 e 4: Previsões sobre a vida financeira."],
        fundo: "Energia subjacente às previsões.",
      },
      {
        deck: 2,
        pergunta: "O que pode ajudar a vida financeira dessa pessoa?",
        casas: [
          "Casa 5: Entendendo o problema.",
          "Casa 6: O que ela pode fazer.",
        ],
        fundo: "Energia subjacente ao que pode ajudar na vida financeira.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho do baralho sobre a vida financeira?",
        casas: ["Casas 7 e 8: Conselho do baralho."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa da Carreira",
    descricao:
      "Método voltado para analisar a vida profissional, o ambiente de trabalho e as tendências da carreira.",
    itens: [
      "Energia atual no trabalho.",
      "Atitudes que podem estar prejudicando a situação.",
      "Como agir para melhorar o ambiente profissional.",
      "Tendências e previsões para a carreira.",
      "Possibilidades caso permaneça no trabalho atual.",
      "Possibilidades caso decida sair.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Como está a energia dessa pessoa no trabalho atualmente?",
        casas: ["Casas 1 e 2: Energia atual no trabalho."],
        fundo: "Energia subjacente à situação atual.",
      },
      {
        deck: 1,
        pergunta: "O que essa pessoa está fazendo de errado no trabalho?",
        casas: ["Casas 3 e 4: O que está sendo feito de errado."],
        fundo: "Energia subjacente aos erros ou dificuldades.",
      },
      {
        deck: 2,
        pergunta:
          "Como essa pessoa pode agir para que as coisas melhorem no trabalho?",
        casas: ["Casas 5 e 6: Como agir para melhorar a situação."],
        fundo: "Energia subjacente às ações necessárias.",
      },
      {
        deck: 2,
        pergunta: "Quais são as tendências e previsões para o trabalho?",
        casas: ["Casas 7 e 8: Tendências e previsões."],
        fundo: "Energia subjacente às tendências.",
      },
      {
        deck: 3,
        pergunta: "O que acontece se ela permanecer?",
        casas: ["Casas 9 e 10: Consequências de permanecer."],
        fundo: "Energia subjacente à permanência.",
      },
      {
        deck: 3,
        pergunta: "O que acontece se ela sair?",
        casas: ["Casas 11 e 12: Consequências de sair."],
        fundo: "Energia subjacente à saída.",
      },
    ],
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa da Precificação",
    descricao:
      "Método voltado para encontrar uma faixa de preço estratégica para um serviço, produto ou trabalho, analisando percepção do público, vendas e valorização.",
    itens: [
      "Se o preço atual corresponde ao valor entregue.",
      "Percepção do público sobre o serviço.",
      "Impacto do preço nas vendas.",
      "Potencial para aumentar o valor.",
      "Comparação entre diferentes faixas de preço.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta:
          "X reais representa bem o valor que o trabalho entrega?",
        casas: ["Casas 1 e 2: Adequação do valor ao trabalho entregue."],
        fundo: "Energia subjacente à adequação do preço.",
      },
      {
        deck: 1,
        pergunta: "Cobrar X reais facilita ou dificulta as vendas?",
        casas: ["Casas 3 e 4: Impacto do preço nas vendas."],
        fundo: "Energia subjacente ao impacto nas vendas.",
      },
      {
        deck: 2,
        pergunta:
          "Como o público tende a perceber um trabalho de X reais?",
        casas: ["Casas 5 e 6: Percepção do público sobre o preço."],
        fundo: "Energia subjacente à percepção do público.",
      },
      {
        deck: 2,
        pergunta: "Existe potencial para cobrar mais?",
        casas: ["Casas 7 e 8: Potencial para aumento do preço."],
        fundo: "Energia subjacente ao potencial de valorização.",
      },
      {
        deck: 3,
        pergunta: "O que aconteceria se eu cobrasse menos, por exemplo, X?",
        casas: ["Casas 9 e 10: Consequências de cobrar menos."],
        fundo: "Energia subjacente às consequências.",
      },
    ],
    comparacaoPrecos: {
      pergunta:
        "Qual faixa de preço favorece melhor o equilíbrio entre vendas e valorização do meu trabalho?",
      funcionamento: [
        "Para cada valor analisado, são abertas duas cartas.",
        "Os valores são comparados entre si para identificar qual faixa favorece melhor o equilíbrio entre vendas e valorização.",
        "Dois valores são analisados inicialmente.",
        "Cada valor adicional acrescentado à análise tem custo adicional.",
      ],
      exemplos: [
        "R$99,90",
        "R$149,90",
        "R$199,90",
        "R$249,90",
        "R$299,90",
        "R$349,90",
      ],
    },
    adicional:
      "Inclui dois valores. Cada valor adicional custa R$15,00.",
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa da Recolocação",
    descricao:
      "Método voltado para quem está desempregado ou buscando uma nova oportunidade profissional.",
    itens: [
      "Momento profissional atual.",
      "O que pode estar dificultando a recolocação.",
      "O que precisa mudar ou melhorar.",
      "Tipo de oportunidade que tende a surgir.",
      "Características de vaga ou empresa mais favoráveis.",
      "O que pode favorecer a conquista de um novo trabalho.",
      "Tendências para os próximos 3 meses.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Como está o momento profissional atual?",
        casas: ["Casas 1 e 2: Momento profissional atual."],
        fundo: "Energia subjacente ao momento profissional.",
      },
      {
        deck: 1,
        pergunta: "O que pode estar dificultando a recolocação?",
        casas: ["Casas 3 e 4: Dificuldades para a recolocação."],
        fundo: "Energia subjacente às dificuldades.",
      },
      {
        deck: 1,
        pergunta:
          "O que essa pessoa precisa mudar ou melhorar para aumentar suas chances?",
        casas: ["Casas 5 e 6: Mudanças ou melhorias necessárias."],
        fundo: "Energia subjacente às mudanças necessárias.",
      },
      {
        deck: 2,
        pergunta: "Que tipo de oportunidade tende a surgir?",
        casas: ["Casas 7 e 8: Tipo de oportunidade."],
        fundo: "Energia subjacente à oportunidade.",
      },
      {
        deck: 2,
        pergunta:
          "Quais características de vaga ou empresa seriam mais favoráveis?",
        casas: ["Casas 9 e 10: Características favoráveis."],
        fundo: "Energia subjacente às características favoráveis.",
      },
      {
        deck: 2,
        pergunta: "O que pode favorecer a conquista de um novo trabalho?",
        casas: ["Casas 11 e 12: Fatores favoráveis."],
        fundo: "Energia subjacente aos fatores favoráveis.",
      },
      {
        deck: 3,
        pergunta:
          "Quais são as tendências para os próximos meses na vida profissional?",
        meses: [
          "Mês 1 — Casas 13 e 14.",
          "Mês 2 — Casas 15 e 16.",
          "Mês 3 — Casas 17 e 18.",
        ],
        fundo: "Energia subjacente às tendências dos próximos meses.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casas 19 e 20: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa da Mudança",
    descricao:
      "Método voltado para situações em que a pessoa considera mudar de emprego, área, profissão ou trajetória profissional.",
    itens: [
      "O que está levando você a desejar uma mudança.",
      "O que precisa compreender antes da decisão.",
      "Tendências caso permaneça onde está.",
      "Tendências caso busque uma mudança.",
      "Oportunidades que podem surgir.",
      "Riscos e desafios.",
      "Caminho mais favorável no momento.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "O que está levando essa pessoa a desejar uma mudança?",
        casas: ["Casas 1 e 2: Motivações para a mudança."],
        fundo: "Energia subjacente ao desejo de mudança.",
      },
      {
        deck: 1,
        pergunta:
          "O que ela precisa compreender antes de tomar essa decisão?",
        casas: ["Casas 3 e 4: O que precisa ser compreendido."],
        fundo: "Energia subjacente ao que precisa ser compreendido.",
      },
      {
        deck: 2,
        pergunta: "O que tende a acontecer se permanecer onde está?",
        casas: ["Casas 5 e 6: Tendências e consequências de permanecer."],
        fundo: "Energia subjacente à permanência.",
      },
      {
        deck: 2,
        pergunta: "O que tende a acontecer se buscar uma mudança?",
        casas: ["Casas 7 e 8: Tendências e consequências da mudança."],
        fundo: "Energia subjacente à mudança.",
      },
      {
        deck: 3,
        pergunta: "Quais oportunidades podem surgir a partir dessa mudança?",
        casas: ["Casas 9 e 10: Oportunidades da mudança."],
        fundo: "Energia subjacente às oportunidades.",
      },
      {
        deck: 3,
        pergunta: "Quais são os riscos e desafios envolvidos?",
        casas: ["Casas 11 e 12: Riscos e desafios."],
        fundo: "Energia subjacente aos riscos e desafios.",
      },
      {
        deck: 4,
        pergunta: "Qual caminho tende a ser mais favorável neste momento?",
        casas: ["Casas 13 e 14: Caminho mais favorável."],
        fundo: "Energia subjacente ao caminho mais favorável.",
      },
      {
        deck: 4,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casas 15 e 16: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa do Reconhecimento",
    descricao:
      "Método voltado para compreender como você é percebida profissionalmente e o que pode favorecer seu reconhecimento e crescimento.",
    itens: [
      "Como você é vista profissionalmente.",
      "Principais talentos e diferenciais.",
      "O que pode impedir o reconhecimento.",
      "Como demonstrar melhor seu potencial.",
      "Oportunidades de crescimento.",
      "Tendências de reconhecimento e valorização.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Como essa pessoa é vista profissionalmente?",
        casas: ["Casas 1 e 2: Percepção profissional."],
        fundo: "Energia subjacente à percepção profissional.",
      },
      {
        deck: 1,
        pergunta: "Quais são seus principais talentos e diferenciais?",
        casas: ["Casas 3 e 4: Talentos e diferenciais."],
        fundo: "Energia subjacente aos talentos e diferenciais.",
      },
      {
        deck: 2,
        pergunta:
          "O que pode estar impedindo que seu trabalho seja reconhecido?",
        casas: ["Casas 5 e 6: Obstáculos ao reconhecimento."],
        fundo: "Energia subjacente aos obstáculos.",
      },
      {
        deck: 2,
        pergunta: "Como ela pode demonstrar melhor seu potencial?",
        casas: ["Casas 7 e 8: Como demonstrar o potencial."],
        fundo: "Energia subjacente à forma de demonstrar esse potencial.",
      },
      {
        deck: 3,
        pergunta: "Quais oportunidades podem favorecer seu crescimento?",
        casas: ["Casas 9 e 10: Oportunidades de crescimento."],
        fundo: "Energia subjacente às oportunidades.",
      },
      {
        deck: 3,
        pergunta:
          "Quais são as tendências de reconhecimento e valorização profissional?",
        casas: ["Casas 11 e 12: Tendências de reconhecimento."],
        fundo: "Energia subjacente às tendências.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casas 13 e 14: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa do Empreendedorismo",
    descricao:
      "Método voltado para compreender os caminhos, desafios e o potencial de crescimento de um negócio ou projeto profissional.",
    itens: [
      "Energia atual do negócio.",
      "O que está dificultando seu crescimento.",
      "Principais pontos fortes e diferenciais.",
      "O que pode favorecer o desenvolvimento.",
      "Oportunidades de crescimento.",
      "Tendências para o negócio.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Como está a energia atual do negócio?",
        casas: ["Casas 1 e 2: Energia atual do negócio."],
        fundo: "Energia subjacente à situação atual.",
      },
      {
        deck: 1,
        pergunta: "O que está dificultando seu crescimento?",
        casas: ["Casas 3 e 4: Dificuldades de crescimento."],
        fundo: "Energia subjacente às dificuldades.",
      },
      {
        deck: 2,
        pergunta: "Quais são os principais pontos fortes e diferenciais?",
        casas: ["Casas 5 e 6: Pontos fortes e diferenciais."],
        fundo: "Energia subjacente aos pontos fortes.",
      },
      {
        deck: 2,
        pergunta: "O que pode ser feito para favorecer o desenvolvimento?",
        casas: ["Casas 7 e 8: Ações para favorecer o desenvolvimento."],
        fundo: "Energia subjacente às ações necessárias.",
      },
      {
        deck: 3,
        pergunta: "Onde existem oportunidades de crescimento?",
        casas: ["Casas 9 e 10: Oportunidades de crescimento."],
        fundo: "Energia subjacente às oportunidades.",
      },
      {
        deck: 3,
        pergunta: "Quais são as tendências para o negócio?",
        casas: ["Casas 11 e 12: Tendências para o negócio."],
        fundo: "Energia subjacente às tendências.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casas 13 e 14: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa do Projeto",
    descricao:
      "Método voltado para avaliar o potencial de um novo projeto e compreender quais caminhos podem favorecer seu desenvolvimento.",
    itens: [
      "Potencial atual do projeto.",
      "Principais obstáculos.",
      "O que pode favorecer seu desenvolvimento.",
      "Como o público tende a receber a proposta.",
      "Melhores oportunidades.",
      "Tendências e possibilidades de crescimento.",
      "Conselho sobre os próximos passos.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Qual é o potencial atual do projeto?",
        casas: ["Casas 1 e 2: Potencial atual."],
        fundo: "Energia subjacente ao potencial do projeto.",
      },
      {
        deck: 1,
        pergunta: "Quais são os principais obstáculos para sua realização?",
        casas: ["Casas 3 e 4: Principais obstáculos."],
        fundo: "Energia subjacente aos obstáculos.",
      },
      {
        deck: 2,
        pergunta: "O que pode favorecer seu desenvolvimento?",
        casas: ["Casas 5 e 6: Fatores favoráveis."],
        fundo: "Energia subjacente aos fatores favoráveis.",
      },
      {
        deck: 2,
        pergunta: "Como o público tende a receber a proposta?",
        casas: ["Casas 7 e 8: Recepção da proposta."],
        fundo: "Energia subjacente à recepção do público.",
      },
      {
        deck: 3,
        pergunta: "Onde estão as melhores oportunidades?",
        casas: ["Casas 9 e 10: Oportunidades."],
        fundo: "Energia subjacente às oportunidades.",
      },
      {
        deck: 3,
        pergunta:
          "Quais são as tendências e possibilidades de crescimento?",
        casas: ["Casas 11 e 12: Tendências de crescimento."],
        fundo: "Energia subjacente às possibilidades de crescimento.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho do oráculo sobre os próximos passos?",
        casas: ["Casas 13 e 14: Conselho sobre os próximos passos."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa da Valorização",
    descricao:
      "Método voltado para compreender como o trabalho de uma pessoa é percebido e o que pode favorecer sua valorização profissional e financeira.",
    itens: [
      "Como as pessoas percebem seu trabalho.",
      "O que faz você ser valorizada ou desvalorizada.",
      "Talentos e diferenciais.",
      "O que impede maior valorização.",
      "Como se posicionar melhor.",
      "Potencial de crescimento e valorização financeira.",
      "Conselho final.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Como as pessoas percebem o seu trabalho?",
        casas: ["Casas 1 e 2: Percepção sobre o trabalho."],
        fundo: "Energia subjacente à percepção.",
      },
      {
        deck: 1,
        pergunta:
          "O que faz com que você seja valorizada ou desvalorizada?",
        casas: ["Casas 3 e 4: Fatores de valorização ou desvalorização."],
        fundo: "Energia subjacente a esses fatores.",
      },
      {
        deck: 2,
        pergunta:
          "Quais talentos e diferenciais você precisa reconhecer em si mesma?",
        casas: ["Casas 5 e 6: Talentos e diferenciais."],
        fundo: "Energia subjacente aos talentos.",
      },
      {
        deck: 2,
        pergunta: "O que pode estar impedindo uma maior valorização?",
        casas: ["Casas 7 e 8: Obstáculos à valorização."],
        fundo: "Energia subjacente aos obstáculos.",
      },
      {
        deck: 3,
        pergunta: "Como você pode se posicionar melhor profissionalmente?",
        casas: ["Casas 9 e 10: Posicionamento profissional."],
        fundo: "Energia subjacente ao posicionamento.",
      },
      {
        deck: 3,
        pergunta:
          "Qual é o potencial de crescimento e valorização financeira?",
        casas: ["Casas 11 e 12: Potencial de crescimento."],
        fundo: "Energia subjacente ao potencial.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casas 13 e 14: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa da Oportunidade",
    descricao:
      "Método voltado para analisar uma oportunidade profissional específica antes de tomar uma decisão.",
    itens: [
      "Energia da oportunidade.",
      "O que ela pode proporcionar.",
      "Pontos positivos.",
      "Riscos e desafios ocultos.",
      "Impacto financeiro.",
      "Impacto na trajetória profissional.",
      "Potencial de crescimento.",
      "Conselho sobre aceitar ou não.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Qual é a verdadeira energia dessa oportunidade?",
        casas: ["Casas 1 e 2: Essência da oportunidade."],
        fundo: "Energia subjacente à oportunidade.",
      },
      {
        deck: 1,
        pergunta: "O que essa oportunidade pode proporcionar?",
        casas: ["Casas 3 e 4: Possíveis benefícios."],
        fundo: "Energia subjacente aos benefícios.",
      },
      {
        deck: 2,
        pergunta: "Quais são os pontos positivos?",
        casas: ["Casas 5 e 6: Pontos positivos."],
        fundo: "Energia subjacente aos aspectos favoráveis.",
      },
      {
        deck: 2,
        pergunta: "Quais são os riscos ou desafios ocultos?",
        casas: ["Casas 7 e 8: Riscos e desafios."],
        fundo: "Energia subjacente aos riscos.",
      },
      {
        deck: 3,
        pergunta: "O que essa oportunidade pode trazer financeiramente?",
        casas: ["Casas 9 e 10: Impactos financeiros."],
        fundo: "Energia subjacente às questões financeiras.",
      },
      {
        deck: 3,
        pergunta: "Como pode impactar a trajetória profissional?",
        casas: ["Casas 11 e 12: Impactos profissionais."],
        fundo: "Energia subjacente aos impactos profissionais.",
      },
      {
        deck: 4,
        pergunta:
          "Qual é o potencial de crescimento a partir dessa oportunidade?",
        casas: ["Casas 13 e 14: Potencial de crescimento."],
        fundo: "Energia subjacente ao potencial de crescimento.",
      },
      {
        deck: 4,
        pergunta:
          "Qual é o conselho final sobre aceitar ou não essa oportunidade?",
        casas: ["Casas 15 e 16: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa da Negociação",
    descricao:
      "Método voltado para compreender a dinâmica de uma negociação, identificar pontos favoráveis e desfavoráveis e orientar a postura mais estratégica para buscar um resultado positivo.",
    itens: [
      "Essência e dinâmica da negociação.",
      "Pontos favoráveis e recursos disponíveis.",
      "Obstáculos e fatores desfavoráveis.",
      "Postura e estratégia recomendadas.",
      "Potencial de resultado.",
      "Possíveis ganhos e melhorias.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Qual é a verdadeira energia dessa negociação?",
        casas: ["Casas 1 e 2: Essência e dinâmica atual."],
        fundo: "Energia subjacente à negociação.",
      },
      {
        deck: 1,
        pergunta: "O que está a meu favor nessa negociação?",
        casas: ["Casas 3 e 4: Pontos favoráveis e recursos."],
        fundo: "Energia subjacente aos aspectos favoráveis.",
      },
      {
        deck: 2,
        pergunta: "O que pode dificultar ou prejudicar essa negociação?",
        casas: ["Casas 5 e 6: Obstáculos e fatores desfavoráveis."],
        fundo: "Energia subjacente aos obstáculos.",
      },
      {
        deck: 2,
        pergunta:
          "Como devo me posicionar para obter o melhor resultado?",
        casas: ["Casas 7 e 8: Postura e estratégia."],
        fundo: "Energia subjacente à postura recomendada.",
      },
      {
        deck: 3,
        pergunta: "Qual é o potencial de resultado dessa negociação?",
        casas: ["Casas 9 e 10: Possibilidades de resultado."],
        fundo: "Energia subjacente ao resultado.",
      },
      {
        deck: 3,
        pergunta:
          "O que pode ser conquistado ou melhorado através dessa negociação?",
        casas: ["Casas 11 e 12: Ganhos e benefícios."],
        fundo: "Energia subjacente aos possíveis ganhos.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casas 13 e 14: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Emocional e Autoconhecimento",
    nome: "Espelho de Vênus",
    descricao:
      "Método voltado para autoconhecimento, autoestima e percepção pessoal.",
    itens: [
      "Maiores qualidades e potenciais.",
      "O que mais encanta na aparência e personalidade.",
      "Padrões e defeitos que precisam de atenção.",
      "Aspectos ainda não percebidos sobre si.",
      "Potenciais ocultos.",
      "Feridas emocionais e bloqueios.",
      "Energia que deve ser fortalecida.",
      "Conselho final.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Qual é a minha maior qualidade a ser explorada?",
        casas: ["Casas 1 e 2: Maior qualidade."],
        fundo: "Energia subjacente à qualidade.",
      },
      {
        deck: 1,
        pergunta:
          "O que mais encanta na minha aparência física e no meu semblante?",
        casas: ["Casas 3 e 4: Aparência e semblante."],
      },
      {
        deck: 1,
        pergunta: "O que mais encanta na minha personalidade?",
        casas: ["Casas 5 e 6: Aspectos da personalidade."],
      },
      {
        deck: 2,
        pergunta: "Qual defeito ou padrão preciso melhorar?",
        casas: ["Casas 7 e 8: Padrão a ser melhorado."],
        fundo: "Energia subjacente ao padrão.",
      },
      {
        deck: 2,
        pergunta: "O que estou ignorando sobre mim mesmo?",
        casas: ["Casas 9 e 10: Aspectos ignorados."],
        fundo: "Energia subjacente ao que está sendo ignorado.",
      },
      {
        deck: 2,
        pergunta: "Qual potencial ainda não reconheci em mim?",
        casas: ["Casas 11 e 12: Potencial não reconhecido."],
        fundo: "Energia subjacente ao potencial.",
      },
      {
        deck: 3,
        pergunta: "O que preciso curar emocionalmente?",
        casas: ["Casas 13 e 14: Aspectos emocionais."],
        fundo: "Energia subjacente ao que precisa ser curado.",
      },
      {
        deck: 3,
        pergunta: "O que me impede de evoluir hoje?",
        casas: ["Casas 15 e 16: Fatores que impedem a evolução."],
        fundo: "Energia subjacente aos bloqueios.",
      },
      {
        deck: 3,
        pergunta: "Qual energia devo fortalecer daqui para frente?",
        casas: ["Casas 17 e 18: Energia a fortalecer."],
        fundo: "Energia subjacente ao fortalecimento.",
      },
      {
        deck: 3,
        pergunta: "O que o oráculo pensa sobre você?",
        casas: ["Casas 19 e 20: Visão do oráculo."],
        fundo: "Energia subjacente à visão do oráculo.",
      },
    ],
  },

  {
    categoria: "Emocional e Autoconhecimento",
    nome: "Labirinto Emocional",
    descricao:
      "Método voltado para entender padrões emocionais, bloqueios internos e processos de autoconhecimento.",
    itens: [
      "Estado emocional atual.",
      "Padrões que se repetem.",
      "Atitudes de autossabotagem.",
      "Medos ocultos.",
      "Bloqueios internos.",
      "Aspectos ainda não percebidos.",
      "Caminhos para romper ciclos negativos.",
      "Potencial emocional ainda não desenvolvido.",
      "Conselho final.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Como essa pessoa se sente emocionalmente hoje?",
        casas: ["Casas 1 e 2: Estado emocional atual."],
        fundo: "Energia subjacente ao estado emocional.",
      },
      {
        deck: 1,
        pergunta: "Qual padrão emocional essa pessoa está repetindo?",
        casas: ["Casas 3 e 4: Padrão emocional repetido."],
        fundo: "Energia subjacente ao padrão.",
      },
      {
        deck: 2,
        pergunta:
          "O que essa pessoa faz que sabota a própria felicidade?",
        casas: ["Casas 5 e 6: Comportamentos de autossabotagem."],
        fundo: "Energia subjacente à autossabotagem.",
      },
      {
        deck: 2,
        pergunta: "Qual medo oculto alimenta esse padrão?",
        casas: ["Casas 7 e 8: Medo oculto."],
        fundo: "Energia subjacente ao medo.",
      },
      {
        deck: 2,
        pergunta: "O que essa pessoa ainda não percebe sobre si mesma?",
        casas: ["Casas 9 e 10: Aspectos ainda não percebidos."],
        fundo: "Energia subjacente ao que ainda não é percebido.",
      },
      {
        deck: 3,
        pergunta: "O que pode ajudar essa pessoa a romper esse ciclo?",
        casas: ["Casas 11 e 12: Caminhos para romper o ciclo."],
        fundo: "Energia subjacente às possibilidades de mudança.",
      },
      {
        deck: 3,
        pergunta:
          "Qual potencial emocional essa pessoa possui e ainda não acessou?",
        casas: ["Casas 13 e 14: Potencial emocional."],
        fundo: "Energia subjacente ao potencial.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casas 15 e 16: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Emocional e Autoconhecimento",
    nome: "O Espelho da Sombra",
    descricao:
      "Método profundo de autoconhecimento voltado para padrões ocultos, feridas emocionais e aspectos internos que influenciam suas atitudes.",
    itens: [
      "Lado mais tóxico e destrutivo.",
      "Emoções e aspectos escondidos.",
      "Medos que influenciam atitudes.",
      "Impulsos e padrões repetitivos.",
      "Projeções emocionais nos outros.",
      "Ilusões e conflitos internos.",
      "Feridas que ainda afetam decisões.",
      "O que precisa ser confrontado para evoluir.",
      "Conselho final.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Qual é o meu lado mais tóxico?",
        casas: ["Casa 1: Meu lado mais tóxico."],
        fundo: "Energia subjacente a esse aspecto.",
      },
      {
        deck: 1,
        pergunta: "O que tento esconder das pessoas?",
        casas: ["Casa 2: Aquilo que tento esconder."],
        fundo: "Energia subjacente ao que é escondido.",
      },
      {
        deck: 1,
        pergunta: "O que mais me machuca emocionalmente?",
        casas: ["Casa 3: Aquilo que mais me machuca."],
        fundo: "Energia subjacente à dor emocional.",
      },
      {
        deck: 1,
        pergunta: "Qual medo controla minhas atitudes?",
        casas: ["Casa 4: Medo que controla minhas atitudes."],
        fundo: "Energia subjacente ao medo.",
      },
      {
        deck: 2,
        pergunta: "O que me faz agir de forma impulsiva?",
        casas: ["Casa 5: Fator que provoca impulsividade."],
        fundo: "Energia subjacente à impulsividade.",
      },
      {
        deck: 2,
        pergunta: "O que eu projeto nos outros, mas é meu?",
        casas: ["Casa 6: Aquilo que projeto nos outros."],
        fundo: "Energia subjacente à projeção.",
      },
      {
        deck: 2,
        pergunta: "Qual mentira conto para mim mesmo?",
        casas: ["Casa 7: Narrativa ou mentira pessoal."],
        fundo: "Energia subjacente à autoilusão.",
      },
      {
        deck: 2,
        pergunta: "O que meu ego não aceita?",
        casas: ["Casa 8: Aquilo que meu ego não aceita."],
        fundo: "Energia subjacente à resistência do ego.",
      },
      {
        deck: 3,
        pergunta: "Qual ferida ainda domina minhas decisões?",
        casas: ["Casa 9: Ferida que influencia minhas decisões."],
        fundo: "Energia subjacente à ferida.",
      },
      {
        deck: 3,
        pergunta: "O que preciso confrontar para evoluir?",
        casas: ["Casa 10: Aquilo que preciso confrontar."],
        fundo: "Energia subjacente ao que precisa ser confrontado.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casa 11: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Emocional e Autoconhecimento",
    nome: "As Camadas do Eu",
    descricao:
      "Método de autoconhecimento voltado para compreender diferentes lados da personalidade e identidade emocional.",
    itens: [
      "Quem você é na solitude.",
      "Quem você é nas relações sociais.",
      "Forma de amar.",
      "Forma de reagir às dores.",
      "Comportamento nos momentos felizes.",
      "Mecanismos de defesa emocional.",
      "Aspectos que as pessoas não percebem.",
      "Como gostaria de ser enxergado.",
      "Identidade verdadeira no momento atual.",
      "Conselho final.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Quem eu sou sozinho?",
        casas: ["Casa 1: Quem sou quando estou sozinho."],
        fundo: "Energia subjacente à forma como sou sozinho.",
      },
      {
        deck: 1,
        pergunta: "Quem eu sou perto das pessoas?",
        casas: ["Casa 2: Quem sou na presença de outras pessoas."],
        fundo: "Energia subjacente à forma como me relaciono socialmente.",
      },
      {
        deck: 1,
        pergunta: "Quem eu sou no amor?",
        casas: ["Casa 3: Quem sou nas relações amorosas."],
        fundo: "Energia subjacente à minha forma de viver o amor.",
      },
      {
        deck: 1,
        pergunta: "Quem eu sou quando estou ferido?",
        casas: ["Casa 4: Quem sou quando estou emocionalmente ferido."],
        fundo: "Energia subjacente à forma como reajo às feridas.",
      },
      {
        deck: 2,
        pergunta: "Quem eu sou quando estou feliz?",
        casas: ["Casa 5: Quem sou quando estou feliz."],
        fundo: "Energia subjacente à expressão da felicidade.",
      },
      {
        deck: 2,
        pergunta: "Qual parte da minha personalidade é genuína?",
        casas: ["Casa 6: Parte genuína da personalidade."],
        fundo: "Energia subjacente à autenticidade.",
      },
      {
        deck: 2,
        pergunta:
          "Qual parte da minha personalidade é uma defesa emocional?",
        casas: ["Casa 7: Parte que funciona como defesa emocional."],
        fundo: "Energia subjacente à defesa emocional.",
      },
      {
        deck: 2,
        pergunta: "O que as pessoas nunca percebem sobre mim?",
        casas: ["Casa 8: Aspecto que as pessoas não percebem."],
        fundo: "Energia subjacente ao que permanece oculto.",
      },
      {
        deck: 3,
        pergunta: "O que eu gostaria que percebessem sobre mim?",
        casas: ["Casa 9: Aquilo que gostaria que percebessem."],
        fundo: "Energia subjacente a esse desejo.",
      },
      {
        deck: 3,
        pergunta:
          "Qual é a minha verdadeira identidade neste momento da vida?",
        casas: ["Casa 10: Identidade atual."],
        fundo: "Energia subjacente à identidade.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casa 11: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Emocional e Autoconhecimento",
    nome: "O Labirinto do Ego",
    descricao:
      "Método voltado para autossabotagem, bloqueios emocionais e padrões que dificultam sua evolução.",
    itens: [
      "O que mais trava sua vida atualmente.",
      "Formas de autossabotagem.",
      "Padrões repetidos por medo.",
      "O que precisa ser desapegado.",
      "Insistências e desgastes desnecessários.",
      "Necessidade de controle do ego.",
      "Prisões emocionais.",
      "Caminhos para amadurecimento.",
      "Consequências de permanecer no mesmo padrão.",
      "Como destravar sua vida.",
      "Conselho final.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "O que mais trava minha evolução?",
        casas: ["Casa 1: O que mais trava minha evolução."],
        fundo: "Energia subjacente ao bloqueio.",
      },
      {
        deck: 1,
        pergunta: "Como eu me autossaboto?",
        casas: ["Casa 2: Forma de autossabotagem."],
        fundo: "Energia subjacente à autossabotagem.",
      },
      {
        deck: 1,
        pergunta: "O que repito por medo?",
        casas: ["Casa 3: Padrão repetido por medo."],
        fundo: "Energia subjacente ao medo.",
      },
      {
        deck: 1,
        pergunta: "O que preciso desapegar?",
        casas: ["Casa 4: Aquilo de que preciso desapegar."],
        fundo: "Energia subjacente ao desapego.",
      },
      {
        deck: 2,
        pergunta: "O que estou insistindo sem necessidade?",
        casas: ["Casa 5: Aquilo em que insisto sem necessidade."],
        fundo: "Energia subjacente à insistência.",
      },
      {
        deck: 2,
        pergunta: "O que meu ego quer controlar?",
        casas: ["Casa 6: Aquilo que meu ego tenta controlar."],
        fundo: "Energia subjacente à necessidade de controle.",
      },
      {
        deck: 2,
        pergunta: "Onde estou emocionalmente preso?",
        casas: ["Casa 7: Área ou situação de prisão emocional."],
        fundo: "Energia subjacente à prisão emocional.",
      },
      {
        deck: 2,
        pergunta: "O que preciso desenvolver para amadurecer?",
        casas: ["Casa 8: Aspecto a desenvolver."],
        fundo: "Energia subjacente ao amadurecimento.",
      },
      {
        deck: 3,
        pergunta: "O que acontece se eu continuar assim?",
        casas: ["Casa 9: Tendência caso o padrão continue."],
        fundo: "Energia subjacente à tendência.",
      },
      {
        deck: 3,
        pergunta: "Como destravar minha vida?",
        casas: ["Casa 10: Caminho para destravar a vida."],
        fundo: "Energia subjacente ao desbloqueio.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casa 11: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Emocional e Autoconhecimento",
    nome: "Arquivo Emocional",
    descricao:
      "Método de autoconhecimento voltado para infância, experiências emocionais e padrões construídos ao longo da vida.",
    itens: [
      "Energia emocional da infância.",
      "Acontecimentos que marcaram sua personalidade.",
      "Aprendizados sobre amor e rejeição.",
      "Dores emocionais ainda carregadas.",
      "Mecanismos de defesa emocional.",
      "Sentimentos nunca expressados.",
      "Partes emocionais presas ao passado.",
      "O que precisa ser ressignificado.",
      "Possibilidades de transformação.",
      "Conselho final.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Qual era a minha energia na infância?",
        casas: ["Casa 1: Energia emocional na infância."],
        fundo: "Energia subjacente à infância.",
      },
      {
        deck: 1,
        pergunta: "O que mais marcou minha personalidade?",
        casas: ["Casa 2: Experiência que marcou a personalidade."],
        fundo: "Energia subjacente a essa marca.",
      },
      {
        deck: 1,
        pergunta: "O que aprendi sobre o amor?",
        casas: ["Casa 3: Aprendizados sobre o amor."],
        fundo: "Energia subjacente aos aprendizados.",
      },
      {
        deck: 1,
        pergunta: "O que aprendi sobre rejeição?",
        casas: ["Casa 4: Aprendizados sobre rejeição."],
        fundo: "Energia subjacente aos aprendizados.",
      },
      {
        deck: 2,
        pergunta: "Qual trauma ou dor ainda carrego?",
        casas: ["Casa 5: Trauma ou dor ainda carregada."],
        fundo: "Energia subjacente à dor.",
      },
      {
        deck: 2,
        pergunta: "Qual defesa emocional criei?",
        casas: ["Casa 6: Defesa emocional criada."],
        fundo: "Energia subjacente à defesa emocional.",
      },
      {
        deck: 2,
        pergunta: "O que nunca consegui expressar?",
        casas: ["Casa 7: Aquilo que nunca consegui expressar."],
        fundo: "Energia subjacente ao que não foi expresso.",
      },
      {
        deck: 2,
        pergunta: "Qual parte minha ficou presa no passado?",
        casas: ["Casa 8: Parte que ficou presa no passado."],
        fundo: "Energia subjacente ao que permanece no passado.",
      },
      {
        deck: 3,
        pergunta: "O que preciso ressignificar?",
        casas: ["Casa 9: Aspecto a ressignificar."],
        fundo: "Energia subjacente à ressignificação.",
      },
      {
        deck: 3,
        pergunta: "Quem eu seria sem essas dores?",
        casas: ["Casa 10: Quem poderia ser sem essas dores."],
        fundo: "Energia subjacente a essa possibilidade.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casa 11: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Emocional e Autoconhecimento",
    nome: "Mapa da Autoestima",
    descricao:
      "Método voltado para autoconhecimento, inseguranças e fortalecimento do amor-próprio.",
    itens: [
      "Como você se enxerga atualmente.",
      "Como as pessoas percebem você.",
      "Inseguranças e fragilidades.",
      "Qualidades que você não reconhece.",
      "Padrões que enfraquecem sua autoestima.",
      "Atitudes que fortalecem sua confiança.",
      "Comparações que precisam ser deixadas para trás.",
      "Conselho sobre amor-próprio.",
      "Conselho final.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Como me vejo hoje?",
        casas: ["Casa 1: Percepção atual sobre mim mesma."],
        fundo: "Energia subjacente à autoimagem.",
      },
      {
        deck: 1,
        pergunta: "Como os outros realmente me enxergam?",
        casas: ["Casa 2: Percepção externa."],
        fundo: "Energia subjacente à percepção externa.",
      },
      {
        deck: 1,
        pergunta: "Qual é a minha insegurança mais forte?",
        casas: ["Casa 3: Insegurança mais forte."],
        fundo: "Energia subjacente à insegurança.",
      },
      {
        deck: 2,
        pergunta: "Qual qualidade eu não valorizo em mim?",
        casas: ["Casa 4: Qualidade não reconhecida."],
        fundo: "Energia subjacente à qualidade.",
      },
      {
        deck: 2,
        pergunta: "O que destrói minha autoestima?",
        casas: ["Casa 5: Fatores que prejudicam a autoestima."],
        fundo: "Energia subjacente ao que enfraquece a autoestima.",
      },
      {
        deck: 2,
        pergunta: "O que fortalece minha autoestima?",
        casas: ["Casa 6: Fatores que fortalecem a autoestima."],
        fundo: "Energia subjacente ao fortalecimento.",
      },
      {
        deck: 3,
        pergunta: "O que preciso parar de comparar?",
        casas: ["Casa 7: Aspecto que preciso parar de comparar."],
        fundo: "Energia subjacente à comparação.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho do oráculo sobre amor-próprio?",
        casas: ["Casa 8: Conselho sobre amor-próprio."],
        fundo: "Energia subjacente ao conselho.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casa 9: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Emocional e Autoconhecimento",
    nome: "Mapa do Propósito",
    descricao:
      "Método de autoconhecimento voltado para compreender o que dá sentido à vida, reconhecer potenciais pessoais e identificar caminhos de desenvolvimento.",
    itens: [
      "O que realmente dá sentido à vida.",
      "O que a essência busca viver.",
      "Potenciais que pedem expressão.",
      "O que afasta do verdadeiro caminho.",
      "Aspectos que precisam ser desenvolvidos.",
      "O que precisa ser deixado para trás.",
      "Direção que favorece a evolução.",
      "O que pode ser construído a partir da transformação pessoal.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "O que realmente dá sentido à minha vida?",
        casas: ["Casas 1 e 2: Sentido e significado da vida."],
        fundo: "Energia subjacente ao sentido de vida.",
      },
      {
        deck: 1,
        pergunta: "O que minha essência busca viver?",
        casas: ["Casas 3 e 4: Experiências que a essência busca."],
        fundo: "Energia subjacente aos desejos da essência.",
      },
      {
        deck: 1,
        pergunta: "Qual potencial existe em mim que pede expressão?",
        casas: ["Casas 5 e 6: Potencial que busca expressão."],
        fundo: "Energia subjacente ao potencial.",
      },
      {
        deck: 2,
        pergunta: "O que está me afastando do meu verdadeiro caminho?",
        casas: ["Casas 7 e 8: Fatores de afastamento."],
        fundo: "Energia subjacente aos afastamentos.",
      },
      {
        deck: 2,
        pergunta: "O que preciso desenvolver em mim?",
        casas: ["Casas 9 e 10: Aspectos a desenvolver."],
        fundo: "Energia subjacente ao desenvolvimento.",
      },
      {
        deck: 2,
        pergunta: "O que preciso deixar para trás?",
        casas: ["Casas 11 e 12: Aquilo que precisa ser deixado."],
        fundo: "Energia subjacente ao desapego.",
      },
      {
        deck: 3,
        pergunta: "Que direção favorece minha evolução neste momento?",
        casas: ["Casas 13 e 14: Direção favorável."],
        fundo: "Energia subjacente à direção.",
      },
      {
        deck: 3,
        pergunta:
          "O que posso construir a partir de quem estou me tornando?",
        casas: ["Casas 15 e 16: Possibilidades de construção."],
        fundo: "Energia subjacente ao que pode ser construído.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho final do oráculo?",
        casas: ["Casas 17 e 18: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Raio-X da Pessoa",
    descricao:
      "Método profundo voltado para explorar a personalidade, as intenções, os conflitos internos e os comportamentos de uma pessoa dentro de uma conexão.",
    itens: [
      "Essência e personalidade.",
      "Imagem que a pessoa tenta transmitir.",
      "O que esconde conscientemente.",
      "O que não admite para si mesma.",
      "Como age quando deseja algo.",
      "Maior defeito ou risco.",
      "Verdadeiras intenções com o consulente.",
      "Sentimentos que podem existir na conexão.",
      "Conselho final.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Quem é essa pessoa?",
        casas: ["Casas 1 e 2: Personalidade, essência e lado genuíno."],
        fundo: "Energia subjacente à personalidade.",
      },
      {
        deck: 1,
        pergunta:
          "Qual imagem essa pessoa tenta passar para os outros?",
        casas: ["Casas 3 e 4: Máscara social e postura."],
        fundo: "Energia subjacente à imagem transmitida.",
      },
      {
        deck: 1,
        pergunta: "O que essa pessoa esconde conscientemente?",
        casas: ["Casas 5 e 6: Segredos e aspectos escondidos."],
        fundo: "Energia subjacente ao que é escondido.",
      },
      {
        deck: 2,
        pergunta: "O que essa pessoa nem admite para si mesma?",
        casas: ["Casas 1 e 2: Conflitos internos e sentimentos reprimidos."],
        fundo: "Energia subjacente ao que não admite.",
      },
      {
        deck: 2,
        pergunta: "Como essa pessoa age quando quer algo?",
        casas: ["Casas 3 e 4: Forma de agir para conseguir o que deseja."],
        fundo: "Energia subjacente à forma de agir.",
      },
      {
        deck: 2,
        pergunta: "Qual é o maior defeito ou perigo vindo dessa pessoa?",
        casas: ["Casas 5 e 6: Padrões negativos e riscos."],
        fundo: "Energia subjacente ao principal risco.",
      },
      {
        deck: 3,
        pergunta: "Qual é a verdadeira intenção dela com o consulente?",
        casas: ["Casas 1 e 2: Intenções na conexão."],
        fundo: "Energia subjacente às intenções.",
      },
      {
        deck: 3,
        pergunta: "O que essa pessoa sente pelo consulente no fundo?",
        casas: ["Casas 3 e 4: Sentimentos na conexão."],
        fundo: "Energia subjacente aos sentimentos.",
      },
      {
        deck: 3,
        pergunta: "Qual é o conselho do baralho para o consulente?",
        casas: ["Casas 5 e 6: Conselho ao consulente."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "As Máscaras da Amizade",
    descricao:
      "Método voltado para analisar amizades, intenções e a dinâmica da relação.",
    itens: [
      "Opinião da pessoa sobre você.",
      "Como ela fala de você na sua ausência.",
      "Pontos positivos da amizade.",
      "Desgastes e lados negativos.",
      "Verdadeiras intenções.",
      "Imagem que ela tenta transmitir.",
      "Conselho final.",
    ],
    tiragem: [
      {
        pergunta: "Qual é a opinião dessa pessoa sobre a consulente?",
        casas: ["Casa 1: Opinião sobre a consulente."],
        fundo: "Energia subjacente à opinião.",
      },
      {
        pergunta:
          "Como essa pessoa fala sobre a consulente quando ela não está?",
        casas: ["Casa 2: Forma de falar na ausência da consulente."],
        fundo: "Energia subjacente à comunicação.",
      },
      {
        pergunta:
          "Qual é o lado positivo de continuar com essa amizade?",
        casas: ["Casa 3: Aspectos positivos da amizade."],
        fundo: "Energia subjacente aos benefícios.",
      },
      {
        pergunta:
          "Qual é o lado negativo de continuar com essa amizade?",
        casas: ["Casa 4: Aspectos negativos da amizade."],
        fundo: "Energia subjacente aos aspectos desfavoráveis.",
      },
      {
        pergunta:
          "Quais são as verdadeiras intenções dessa pessoa com você?",
        casas: ["Casa 5: Intenções dentro da amizade."],
        fundo: "Energia subjacente às intenções.",
      },
      {
        pergunta:
          "Qual imagem essa pessoa gostaria de passar para a consulente?",
        casas: ["Casa 6: Imagem que deseja transmitir."],
        fundo: "Energia subjacente à imagem.",
      },
      {
        pergunta: "Qual é o conselho do oráculo?",
        casas: ["Casas 9 e 10: Conselho sobre a amizade."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Pontes do Destino",
    descricao:
      "Método voltado para afastamentos, reconciliações e conexões que ainda possuem pendências emocionais.",
    itens: [
      "O que causou o afastamento.",
      "Sentimentos e vínculos ainda existentes.",
      "Bloqueios que impedem a reconciliação.",
      "Quem precisa agir.",
      "Chances de retomada.",
      "Conselho final.",
    ],
    tiragem: [
      {
        pergunta: "O que causou o afastamento?",
        casas: ["Casas 1 e 2: Causas do afastamento."],
        fundo: "Energia subjacente ao afastamento.",
      },
      {
        pergunta: "O que ainda existe entre vocês?",
        casas: ["Casas 3 e 4: Sentimentos e vínculos restantes."],
        fundo: "Energia subjacente ao vínculo.",
      },
      {
        pergunta: "O que impede a reconciliação?",
        casas: ["Casas 5 e 6: Obstáculos à reconciliação."],
        fundo: "Energia subjacente aos obstáculos.",
      },
      {
        pergunta: "Quem precisa agir?",
        casas: ["Casas 7 e 8: Quem precisa tomar a iniciativa."],
        fundo: "Energia subjacente à necessidade de ação.",
      },
      {
        pergunta: "Qual é a chance de retomada?",
        casas: ["Casas 9 e 10: Potencial de retomada."],
        fundo: "Energia subjacente à possibilidade de reconciliação.",
      },
      {
        pergunta:
          "Qual é o conselho do oráculo para você sobre essa situação?",
        casas: ["Casas 11 e 12: Conselho sobre o afastamento."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Hexagrama do Amor",
    descricao:
      "Método voltado para entender sua vida amorosa e os caminhos para encontrar uma conexão verdadeira.",
    itens: [
      "Por que você ainda não encontrou seu par.",
      "Como superar bloqueios afetivos.",
      "Atitudes que podem aproximar o amor.",
      "Características da pessoa ideal.",
      "Onde essa conexão pode surgir.",
      "Tendências de tempo para esse encontro.",
      "Conselho final.",
    ],
    tiragem: [
      {
        pergunta: "Por que você ainda não encontrou seu par?",
        casas: ["Casas 1 e 2: Motivos para ainda não ter encontrado seu par."],
        fundo: "Energia subjacente aos motivos.",
      },
      {
        pergunta: "Como você pode superar as dificuldades apresentadas?",
        casas: ["Casas 3 e 4: Caminhos para superar as dificuldades."],
        fundo: "Energia subjacente à superação.",
      },
      {
        pergunta:
          "Que atitude você pode estar tomando que dificulta encontrar seu par?",
        casas: ["Casas 5 e 6: Atitudes que dificultam o encontro."],
        fundo: "Energia subjacente às atitudes.",
      },
      {
        pergunta: "Quem seria a pessoa certa para você?",
        casas: ["Casas 7 e 8: Perfil da pessoa mais adequada."],
        fundo: "Energia subjacente ao perfil apresentado.",
      },
      {
        pergunta: "Onde você poderá encontrar seu par?",
        casas: ["Casas 9 e 10: Contextos e ambientes do encontro."],
        fundo: "Energia subjacente ao encontro.",
      },
      {
        pergunta: "Quando você poderá encontrar seu par?",
        casas: ["Casas 11 e 12: Tendência de tempo."],
        fundo: "Energia subjacente ao tempo do encontro.",
      },
      {
        pergunta: "Qual é o conselho do oráculo?",
        casas: ["Casas 13 e 14: Conselho sobre a busca amorosa."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Disponibilidade Emocional",
    descricao:
      "Método voltado para entender a abertura emocional, as intenções e os bloqueios afetivos de uma pessoa.",
    itens: [
      "Estado emocional atual.",
      "Envolvimento com outras pessoas.",
      "Vontade ou resistência em viver algo amoroso.",
      "Motivos emocionais por trás do comportamento.",
      "Bloqueios.",
      "Intenções em relação a você.",
      "O que você precisa entender sobre essa pessoa.",
      "Conselho final.",
    ],
    tiragem: [
      {
        pergunta: "Como essa pessoa está se sentindo no momento?",
        casas: ["Casa 1: Estado emocional atual."],
        fundo: "Energia subjacente ao estado emocional.",
      },
      {
        pergunta: "Essa pessoa está se envolvendo com alguém agora?",
        casas: ["Casa 2: Existência de outro envolvimento."],
        fundo: "Energia subjacente ao envolvimento.",
      },
      {
        pergunta: "Essa pessoa quer se envolver com alguém agora?",
        casas: ["Casas 3 e 4: Desejo e disponibilidade emocional."],
        fundo: "Energia subjacente à disposição para um relacionamento.",
      },
      {
        pergunta:
          "Por que essa pessoa quer ou não quer se envolver com alguém neste momento?",
        casas: ["Casas 5 e 6: Motivos internos."],
        fundo: "Energia subjacente ao motivo.",
      },
      {
        pergunta: "O que impede essa pessoa de agir livremente?",
        casas: ["Casas 7 e 8: Bloqueios."],
        fundo: "Energia subjacente ao bloqueio.",
      },
      {
        pergunta: "Qual é a intenção dessa pessoa em relação ao consulente?",
        casas: ["Casas 9 e 10: Intenções."],
        fundo: "Energia subjacente às intenções.",
      },
      {
        pergunta: "O que o consulente precisa entender sobre essa pessoa?",
        casas: ["Casas 11 e 12: Aspectos a compreender."],
        fundo: "Energia subjacente ao que precisa ser compreendido.",
      },
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Entre Desejo e Atitude",
    descricao:
      "Método voltado para investigar o que outra pessoa sente, suas pretensões, aquilo que gostaria de fazer com esse sentimento e o que tende a fazer de fato.",
    itens: [
      "Sentimentos que a pessoa esconde.",
      "Natureza do sentimento.",
      "O que gostaria de fazer.",
      "O que realmente tende a fazer.",
      "Imagem que tenta transmitir.",
      "Conselho final.",
    ],
    tiragem: [
      {
        pergunta: "O que ele sente por ela e esconde?",
        casas: ["Casas 1 e 2: Sentimentos não demonstrados."],
        fundo: "Energia subjacente aos sentimentos ocultos.",
      },
      {
        pergunta: "Como é esse sentimento dele?",
        casas: ["Casas 3 e 4: Natureza do sentimento."],
        fundo: "Energia subjacente ao sentimento.",
      },
      {
        pergunta: "O que ele pretende fazer sobre o que sente?",
        casas: ["Casa 5: O que gostaria de fazer."],
        fundo: "Energia subjacente às pretensões.",
      },
      {
        pergunta: "O que ele vai de fato fazer sobre o que sente?",
        casas: ["Casa 6: Atitude que tende a tomar."],
        fundo: "Energia subjacente à ação.",
      },
      {
        pergunta: "Qual imagem ele quer passar para você?",
        fundo: "A imagem ou impressão que deseja transmitir.",
      },
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Linha do Tempo Amorosa",
    descricao:
      "Método voltado para entender as próximas movimentações emocionais e afetivas dentro de uma conexão.",
    itens: [
      "O que a pessoa pretende fazer.",
      "O que ela realmente tende a fazer.",
      "Comportamento nas próximas semanas.",
      "Tendências para os próximos meses.",
      "Como o consulente tende a se sentir.",
      "Imagem que a pessoa deseja transmitir.",
      "Conselhos sobre a relação.",
    ],
    tiragem: [
      {
        oraculo: 1,
        pergunta: "O que ele pretende fazer nos próximos dias?",
        casas: ["Casa 1: Planejamento e intenções."],
        fundo: "Energia subjacente ao planejamento.",
      },
      {
        oraculo: 1,
        pergunta: "O que de fato ele vai fazer nos próximos dias?",
        casas: ["Casa 2: Ações que tende a realizar."],
        fundo: "Energia subjacente às ações.",
      },
      {
        oraculo: 1,
        pergunta: "Como ele vai agir nas próximas semanas?",
        periodos: [
          "Semana 1.",
          "Semana 2.",
          "Semana 3.",
        ],
        casas: ["Casa 3: Tendências de comportamento nas próximas semanas."],
        fundo: "Energia subjacente às tendências.",
      },
      {
        oraculo: 1,
        pergunta: "Como ele vai agir nos próximos meses?",
        periodos: [
          "Mês 1.",
          "Mês 2.",
          "Mês 3.",
        ],
        casas: ["Casa 4: Tendências de comportamento nos próximos meses."],
        fundo: "Energia subjacente às tendências.",
      },
      {
        oraculo: 2,
        pergunta:
          "Como a consulente vai se sentir em relação a ele nas próximas semanas?",
        casas: ["Casa 1: Sentimentos nas próximas semanas."],
        fundo: "Energia subjacente aos sentimentos.",
      },
      {
        oraculo: 2,
        pergunta:
          "Como a consulente vai se sentir em relação a ele nos próximos meses?",
        casas: ["Casa 2: Sentimentos nos próximos meses."],
        fundo: "Energia subjacente aos sentimentos.",
      },
      {
        oraculo: 2,
        pergunta: "Qual imagem ele gostaria de passar para ela?",
        casas: ["Casa 3: Imagem que deseja transmitir."],
        fundo: "Energia subjacente à imagem.",
      },
      {
        oraculo: 2,
        pergunta: "Qual é o conselho do oráculo sobre ele?",
        casas: ["Casas 4 e 5: Conselho sobre ele."],
        fundo: "Energia subjacente ao conselho.",
      },
      {
        oraculo: 2,
        pergunta: "Qual é o conselho do oráculo para a consulente?",
        casas: ["Casas 6 e 7: Conselho para a consulente."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "A Arte da Conquista",
    descricao:
      "Método voltado para atração, aproximação e desenvolvimento de uma conexão amorosa, com foco em atitudes e na dinâmica entre as pessoas.",
    itens: [
      "Como agir para aproximar a pessoa.",
      "Como fortalecer a conexão.",
      "Impressão que a pessoa possui sobre você.",
      "Imagem que pode despertar interesse.",
      "Possibilidades de caminhos entre vocês.",
      "Conselho final.",
    ],
    tiragem: [
      {
        pergunta: "Como agir para que essa pessoa chegue até você?",
        casas: ["Casas 1 e 2: Atitudes para favorecer a aproximação."],
      },
      {
        pergunta:
          "Como agir para que, depois que a pessoa chegar, ela permaneça?",
        casas: ["Casas 3 e 4: Atitudes para desenvolver a conexão."],
      },
      {
        pergunta: "Qual é a impressão que ele tem de você atualmente?",
        casas: ["Casa 5: Impressão atual."],
        fundo: "Energia subjacente à impressão.",
      },
      {
        pergunta:
          "Que impressão você deve passar para encantar essa pessoa?",
        casas: ["Casa 6: Imagem que pode favorecer a aproximação."],
        fundo: "Energia subjacente à imagem.",
      },
      {
        pergunta: "Vocês têm caminhos juntos?",
        fundo: "Energia subjacente à possibilidade de conexão.",
      },
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Mapa da Relação",
    descricao:
      "Método aprofundado para analisar sentimentos, pensamentos, intenções e a dinâmica real entre duas pessoas.",
    itens: [
      "Sentimentos e pensamentos de ambos.",
      "Visão de cada um sobre a relação.",
      "Intenções e atitudes reais.",
      "Obstáculos da conexão.",
      "O que cada um pode fazer para melhorar.",
      "Dinâmica emocional.",
      "Conselhos para ambos.",
    ],
    tiragem: [
      {
        oraculo: 1,
        pergunta: "Quais são os sentimentos dele por mim agora?",
        casas: ["Casas 1 e 2: Sentimentos dele."],
        fundo: "Energia subjacente aos sentimentos.",
      },
      {
        oraculo: 1,
        pergunta: "Quais são os pensamentos dele sobre mim agora?",
        casas: ["Casas 3 e 4: Pensamentos dele."],
        fundo: "Energia subjacente aos pensamentos.",
      },
      {
        oraculo: 1,
        pergunta: "Quais pensamentos ele tem sobre nossa relação?",
        casas: ["Casas 5 e 6: Pensamentos sobre a relação."],
        fundo: "Energia subjacente aos pensamentos.",
      },
      {
        oraculo: 1,
        pergunta: "Quais são as intenções dele comigo neste momento?",
        casas: ["Casas 7 e 8: Intenções dele."],
        fundo: "Energia subjacente às intenções.",
      },
      {
        oraculo: 1,
        pergunta: "O que ele vai fazer em relação a mim?",
        casas: ["Casas 9 e 10: Ações que tende a tomar."],
        fundo: "Energia subjacente às ações.",
      },
      {
        oraculo: 2,
        pergunta: "Quais são os meus sentimentos por ele agora?",
        casas: ["Casas 1 e 2: Meus sentimentos."],
        fundo: "Energia subjacente aos sentimentos.",
      },
      {
        oraculo: 2,
        pergunta: "Quais são os meus pensamentos sobre ele agora?",
        casas: ["Casas 3 e 4: Meus pensamentos."],
        fundo: "Energia subjacente aos pensamentos.",
      },
      {
        oraculo: 2,
        pergunta: "Quais são os meus pensamentos sobre nossa relação?",
        casas: ["Casas 5 e 6: Pensamentos sobre a relação."],
        fundo: "Energia subjacente aos pensamentos.",
      },
      {
        oraculo: 2,
        pergunta: "Quais são as minhas intenções com ele neste momento?",
        casas: ["Casas 7 e 8: Minhas intenções."],
        fundo: "Energia subjacente às intenções.",
      },
      {
        oraculo: 2,
        pergunta: "O que vou fazer em relação a ele?",
        casas: ["Casas 9 e 10: Minhas ações."],
        fundo: "Energia subjacente às ações.",
      },
      {
        oraculo: 3,
        pergunta: "Qual é o maior obstáculo da nossa relação?",
        casas: ["Casas 1 e 2: Obstáculo principal."],
        fundo: "Energia subjacente ao obstáculo.",
      },
      {
        oraculo: 3,
        pergunta: "O que ele pode fazer para superar esse obstáculo?",
        casas: ["Casas 3 e 4: Ações dele."],
        fundo: "Energia subjacente às ações.",
      },
      {
        oraculo: 3,
        pergunta: "O que eu posso fazer para superar esse obstáculo?",
        casas: ["Casas 5 e 6: Minhas ações."],
        fundo: "Energia subjacente às ações.",
      },
      {
        oraculo: 3,
        pergunta: "Qual é a dinâmica do nosso relacionamento?",
        casas: ["Casas 7 e 8: Dinâmica da relação."],
        fundo: "Energia subjacente à dinâmica.",
      },
      {
        oraculo: 3,
        pergunta:
          "Qual conselho o baralho dá para ele sobre nossa dinâmica?",
        casas: ["Casas 9 e 10: Conselho para ele."],
        fundo: "Energia subjacente ao conselho.",
      },
      {
        oraculo: 3,
        pergunta:
          "Qual conselho o baralho dá para mim sobre nossa dinâmica?",
        casas: ["Casas 11 e 12: Conselho para mim."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
    observacoes: [
      "A dinâmica é a forma como o casal interage e se comunica: quem cede mais, como os conflitos são resolvidos e como o afeto é demonstrado.",
      "Os obstáculos são desafios concretos ou acontecimentos que testam a relação, como finanças, trabalho, distância geográfica ou questões familiares.",
      "A dinâmica é um padrão interno e contínuo; os obstáculos são problemas específicos a serem resolvidos ou administrados.",
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Sombras da Relação",
    descricao:
      "Método profundo voltado para explorar aspectos ocultos, padrões destrutivos, intenções e pontos de tensão dentro de uma conexão amorosa.",
    itens: [
      "O que a pessoa esconde conscientemente.",
      "Sentimentos não admitidos.",
      "Pensamentos sobre traição ou substituição.",
      "Interesse por terceiros.",
      "O que é dito sobre o consulente.",
      "Papel que a pessoa deseja ocupar na relação.",
      "O que mantém a relação viva.",
      "Padrões destrutivos e manipulações.",
      "Possíveis tendências futuras.",
      "Consequências de permanecer ou se afastar.",
    ],
    tiragem: [
      {
        oraculo: 1,
        pergunta: "O que ele esconde de mim conscientemente?",
        casas: ["Casas 1 e 2: O que esconde conscientemente."],
      },
      {
        oraculo: 1,
        pergunta: "O que ele sente, mas não admite nem para si mesmo?",
        casas: ["Casas 3 e 4: Sentimentos não admitidos."],
      },
      {
        oraculo: 1,
        pergunta:
          "Ele já pensou em me trair, substituir ou procurar outra pessoa?",
        casas: ["Casas 5 e 6: Pensamentos sobre outras possibilidades."],
      },
      {
        oraculo: 1,
        pergunta:
          "Existe interesse emocional, sexual ou energético em outra pessoa?",
        casas: ["Casas 7 e 8: Interesse em terceiros."],
      },
      {
        oraculo: 1,
        pergunta: "O que ele fala sobre mim para terceiros?",
        casas: ["Casas 9 e 10: Comunicação sobre o consulente."],
      },
      {
        oraculo: 1,
        pergunta:
          "Qual é o verdadeiro papel que ele quer ocupar na minha vida?",
        casas: ["Casas 11 e 12: Papel desejado na relação."],
      },
      {
        oraculo: 1,
        pergunta: "O que ele ganha permanecendo nessa relação?",
        casas: ["Casas 13 e 14: Benefícios percebidos da relação."],
      },
      {
        oraculo: 1,
        pergunta: "O que ele teme perder comigo?",
        casas: ["Casas 15 e 16: Medos relacionados à perda."],
      },
      {
        oraculo: 2,
        pergunta: "Qual é a verdadeira base dessa relação?",
        casas: ["Casas 1 e 2: Base da relação."],
      },
      {
        oraculo: 2,
        pergunta: "O que mantém essa relação viva hoje?",
        casas: ["Casas 3 e 4: Elementos que mantêm a relação."],
      },
      {
        oraculo: 2,
        pergunta: "Qual é o maior veneno dessa conexão?",
        casas: ["Casas 5 e 6: Principal fator destrutivo."],
      },
      {
        oraculo: 2,
        pergunta: "Existe manipulação emocional nessa relação?",
        casas: ["Casas 7 e 8: Possível manipulação emocional."],
      },
      {
        oraculo: 2,
        pergunta: "Qual padrão destrutivo se repete entre nós?",
        casas: ["Casas 9 e 10: Padrão destrutivo."],
      },
      {
        oraculo: 2,
        pergunta: "Qual verdade nenhum dos dois quer encarar?",
        casas: ["Casas 11 e 12: Verdade difícil de encarar."],
      },
      {
        oraculo: 2,
        pergunta: "Essa relação evolui, estagna ou se destrói?",
        casas: ["Casas 13 e 14: Tendência de evolução."],
      },
      {
        oraculo: 2,
        pergunta: "Qual é o destino dessa conexão se nada mudar?",
        casas: ["Casas 15 e 16: Tendência caso nada mude."],
      },
      {
        oraculo: 3,
        pergunta: "O que ele pretende fazer daqui para frente?",
        casas: ["Casas 1 e 2: Intenções futuras."],
      },
      {
        oraculo: 3,
        pergunta: "Existe arrependimento verdadeiro nele?",
        casas: ["Casas 3 e 4: Arrependimento."],
      },
      {
        oraculo: 3,
        pergunta: "Ele pretende esconder algo de mim ainda?",
        casas: ["Casas 5 e 6: Possíveis omissões."],
      },
      {
        oraculo: 3,
        pergunta: "Qual é a próxima atitude importante dele?",
        casas: ["Casas 7 e 8: Próxima atitude importante."],
      },
      {
        oraculo: 3,
        pergunta: "O que o baralho me alerta a não ignorar?",
        casas: ["Casas 9 e 10: Alertas importantes."],
      },
      {
        oraculo: 3,
        pergunta: "O que preciso enxergar sem emoção?",
        casas: ["Casas 11 e 12: Aspectos a analisar com clareza."],
      },
      {
        oraculo: 3,
        pergunta: "O que acontece se eu permanecer nessa relação?",
        casas: ["Casas 13 e 14: Tendência de permanência."],
      },
      {
        oraculo: 3,
        pergunta: "O que acontece se eu me afastar dessa relação?",
        casas: ["Casas 15 e 16: Tendência de afastamento."],
      },
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "As Três Faces do Amor",
    descricao:
      "Método para analisar uma situação amorosa que envolve uma pessoa interessada em alguém que já está em um relacionamento sério. Também pode ser adaptado para comparar possibilidades afetivas envolvendo uma pessoa solteira e para consulentes de diferentes gêneros.",
    itens: [
      "Apego emocional e sentimentos do homem pela consulente.",
      "Atração sexual.",
      "Aspectos de que ele não gosta na consulente.",
      "Como ele vê a possibilidade de relacionamento.",
      "Futuro amoroso com a consulente.",
      "Sentimentos e relação com a parceira atual.",
      "Futuro amoroso com a parceira atual.",
      "Conselho do oráculo para a consulente.",
    ],
    tiragem: [
      {
        oraculo: 1,
        titulo: "A conexão com a consulente",
        perguntas: [
          "Casas 1 e 2: Apego emocional do homem pela consulente.",
          "Casas 3 e 4: Sentimentos do homem pela consulente.",
          "Casas 5 e 6: Atração sexual do homem pela consulente.",
          "Casas 7 e 8: O que o homem não gosta na consulente.",
          "Casas 9 e 10: Como o homem vê um possível relacionamento com a consulente.",
          "Casas 11 e 12: Futuro amoroso com a consulente.",
        ],
        fundo:
          "Fundo do deck para cada questão: energia subjacente à posição analisada.",
      },
      {
        oraculo: 2,
        titulo: "A relação com a parceira atual",
        perguntas: [
          "Casas 1 e 2: Sentimentos em relação à esposa ou namorada.",
          "Casas 3 e 4: Relação sexual com a parceira atual.",
          "Casas 5 e 6: O que não gosta na parceira ou na relação.",
          "Casas 7 e 8: Como se sente sobre o casamento ou relacionamento atual.",
          "Casas 9 e 10: Futuro amoroso com a parceira atual.",
        ],
        fundo:
          "Fundo do deck para cada questão: energia subjacente à posição analisada.",
      },
      {
        oraculo: 3,
        titulo: "Conselhos",
        perguntas: [
          "Casas 1 e 2: Conselho do oráculo sobre o homem para a consulente.",
          "Casas 3 e 4: Conselho do oráculo sobre a própria consulente.",
        ],
        fundo:
          "Fundo do deck: energia subjacente ao conselho.",
      },
    ],
    observacoes: [
      "A consulente não precisa ter tido um caso ou envolvimento com o homem analisado.",
      "O método também pode ser usado quando existe apenas atração ou desejo.",
      "Pode ser adaptado para consulentes homens, com os ajustes necessários na identificação das pessoas envolvidas.",
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Mapa do Novo Amor",
    descricao:
      "Método voltado para explorar as possibilidades de um novo relacionamento, o perfil de uma possível conexão, os caminhos para o encontro e os aprendizados necessários para viver uma nova experiência amorosa.",
    itens: [
      "Tipo de pessoa que tende a entrar na sua vida.",
      "Como e onde conhecer essa pessoa.",
      "O que a conexão pode despertar.",
      "Como tende a acontecer a aproximação.",
      "Características da possível relação.",
      "Potencial de relacionamento sério.",
      "O que desenvolver em si para viver um novo amor.",
      "O que pode dificultar essa conexão.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Que tipo de pessoa tende a entrar na minha vida amorosa?",
        casas: ["Casas 1 e 2: Perfil, personalidade e energia da pessoa."],
        fundo: "Energia geral da possível chegada.",
      },
      {
        deck: 1,
        pergunta: "Como e onde posso conhecer essa pessoa?",
        casas: ["Casas 3 e 4: Circunstâncias e ambientes do encontro."],
        fundo: "O que pode estar por trás desse encontro.",
      },
      {
        deck: 1,
        pergunta: "O que essa pessoa poderá despertar em mim?",
        casas: ["Casas 5 e 6: Sentimentos e emoções despertados."],
        fundo: "Essência da experiência.",
      },
      {
        deck: 2,
        pergunta: "Como tende a ser a aproximação entre nós?",
        casas: ["Casas 1 e 2: Dinâmica inicial e desenvolvimento."],
        fundo: "Energia da aproximação.",
      },
      {
        deck: 2,
        pergunta: "Quais serão as principais características dessa relação?",
        casas: ["Casas 3 e 4: Afinidades e aspectos da conexão."],
        fundo: "O que sustenta a relação.",
      },
      {
        deck: 2,
        pergunta:
          "Essa conexão tem potencial para se tornar um relacionamento sério?",
        casas: ["Casas 5 e 6: Possibilidades de compromisso e estabilidade."],
        fundo: "Tendência geral para o futuro da conexão.",
      },
      {
        deck: 3,
        pergunta: "O que preciso desenvolver em mim para viver um novo amor?",
        casas: ["Casas 1 e 2: Aspectos a desenvolver."],
        fundo: "O que está por trás dessa necessidade.",
      },
      {
        deck: 3,
        pergunta:
          "O que pode dificultar a chegada ou o desenvolvimento desse novo amor?",
        casas: ["Casas 3 e 4: Bloqueios e situações que podem interferir."],
        fundo: "Raiz das dificuldades.",
      },
      {
        deck: 3,
        pergunta:
          "Qual é o conselho do oráculo para minha vida amorosa neste momento?",
        casas: ["Casas 5 e 6: Orientação para a vida amorosa."],
        fundo: "Mensagem final do oráculo.",
      },
    ],
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa da Mediunidade",
    descricao:
      "Método voltado para explorar potenciais mediúnicos, bloqueios percebidos e caminhos de desenvolvimento espiritual.",
    itens: [
      "Potenciais mediúnicos.",
      "Bloqueios que dificultam o desenvolvimento.",
      "O que favorece o desenvolvimento.",
      "Como aflorar e fortalecer os dons.",
      "Mensagens da espiritualidade.",
      "Cuidados importantes.",
      "Conselho final.",
    ],
    estruturaPerguntaObjetiva: {
      casas: [
        "Casa 1: Resposta objetiva.",
        "Casa 2: Explicação da resposta objetiva.",
        "Casa 3: Tendência futura.",
      ],
      fundo: "Algo que ainda não sei.",
    },
    perguntasObjetivas: [
      "Que mediunidade essa pessoa tem o potencial para desenvolver nesta encarnação?",
      "Qual outra mediunidade essa pessoa tem o potencial para desenvolver nesta encarnação?",
      "Qual outra mediunidade essa pessoa tem o potencial para desenvolver nesta encarnação?",
      "Tem mais mediunidades?",
      "O que bloqueia a mediunidade dessa pessoa agora?",
      "O que favorece a mediunidade dessa pessoa agora?",
      "Como essa pessoa pode aflorar e desenvolver essas mediunidades?",
      "Tem algum recado da espiritualidade sobre as mediunidades dessa pessoa?",
      "Qual é o conselho do oráculo sobre a mediunidade dessa pessoa?",
      "O que essa pessoa deve observar ao desenvolver suas mediunidades?",
    ],
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa da Espiritualidade",
    descricao:
      "Método voltado para compreender a conexão espiritual, a relação com guias e mentores e os caminhos para fortalecer essa conexão.",
    itens: [
      "Estado espiritual atual.",
      "Relação com guias e mentores.",
      "Formas de fortalecer a conexão.",
      "Bloqueios.",
      "Energias favoráveis.",
      "Mensagens da espiritualidade.",
      "Conselho final.",
    ],
    tiragem: [
      {
        pergunta:
          "Como está a relação dessa pessoa com a espiritualidade, os mentores e os guias?",
        casas: [
          "Casas 1 e 2: Consulente.",
          "Casas 3 e 4: Guias.",
        ],
      },
      {
        pergunta:
          "Como essa pessoa pode se aproximar da própria espiritualidade?",
        casas: ["Casas 5 e 6: Aproximação espiritual."],
        fundo: "Energia subjacente à aproximação.",
      },
      {
        pergunta:
          "O que bloqueia a conexão com a espiritualidade dessa pessoa agora?",
        casas: ["Casas 7 e 8: Bloqueios da conexão."],
        fundo: "Energia subjacente aos bloqueios.",
      },
      {
        pergunta:
          "O que favorece a conexão com a espiritualidade dessa pessoa agora?",
        casas: ["Casas 9 e 10: Fatores favoráveis."],
        fundo: "Energia subjacente aos fatores favoráveis.",
      },
      {
        pergunta: "Qual é o recado da espiritualidade para essa pessoa?",
        casas: ["Casas 11 e 12: Mensagem espiritual."],
        fundo: "Energia subjacente à mensagem.",
      },
      {
        pergunta:
          "Qual é o conselho do oráculo sobre a conexão espiritual?",
        casas: ["Casas 13 e 14: Conselho final."],
        fundo: "Energia subjacente ao conselho.",
      },
    ],
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Caminhos na Cartomancia",
    descricao:
      "Método voltado para explorar potenciais, bloqueios e possibilidades dentro do caminho da cartomancia.",
    itens: [
      "Se existe caminho na cartomancia.",
      "Bloqueios e facilidades.",
      "Potencial para interpretação das cartas.",
      "Possibilidades de atuação profissional.",
      "Tendências de prosperidade financeira.",
      "Realização pessoal.",
      "Como desenvolver melhor esse dom.",
      "Proteção espiritual.",
      "Influências ancestrais.",
      "Conselho final.",
    ],
    estruturaPerguntaObjetiva: {
      casas: [
        "Casa 1: Resposta objetiva.",
        "Casa 2: Explicação da resposta objetiva.",
        "Casa 3: Tendência futura.",
      ],
      fundo: "Algo que ainda não sei.",
    },
    perguntasObjetivas: [
      "Essa pessoa tem caminho na cartomancia nesta encarnação?",
      "O que bloqueia esse caminho atualmente?",
      "O que favorece esse caminho atualmente?",
      "Essa pessoa teria facilidade para interpretar cartas?",
      "Essa pessoa conseguiria trabalhar profissionalmente com cartomancia?",
      "Essa pessoa teria prosperidade financeira na cartomancia?",
      "Esse caminho traria realização pessoal para essa pessoa?",
      "Como essa pessoa pode desenvolver melhor esse dom?",
      "Existe proteção espiritual ou influência ancestral nesse caminho?",
      "Qual conselho o oráculo dá sobre esse caminho na cartomancia?",
    ],
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa da Proteção Espiritual",
    descricao:
      "Método voltado para refletir sobre a proteção espiritual, possíveis vulnerabilidades e atitudes que podem fortalecer a segurança e o equilíbrio pessoal.",
    itens: [
      "Como está a proteção espiritual atualmente.",
      "O que pode estar causando vulnerabilidade.",
      "Energias ou situações que podem afetar o equilíbrio.",
      "O que favorece a proteção.",
      "Como fortalecer a proteção espiritual.",
      "Cuidados espirituais importantes.",
      "Forças ou aspectos espirituais relacionados à proteção.",
      "Conselho final.",
    ],
    tiragem: [
      "Como está a sua proteção espiritual atualmente?",
      "O que pode estar deixando você espiritualmente vulnerável?",
      "Quais energias ou situações podem estar afetando seu equilíbrio?",
      "O que favorece sua proteção neste momento e como você pode fortalecê-la?",
      "Existe algum cuidado espiritual que você deveria ter?",
      "Quais forças ou aspectos espirituais podem atuar em sua proteção?",
      "Qual é o conselho final do oráculo sobre proteção espiritual?",
    ],
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa da Demanda",
    descricao:
      "Método espiritual voltado para investigar possíveis interferências percebidas, compreender seus impactos e explorar orientações para lidar com a situação.",
    itens: [
      "Possível existência de interferência.",
      "Natureza da interferência.",
      "Origem ou situação relacionada.",
      "Há quanto tempo tende a atuar.",
      "Áreas da vida possivelmente afetadas.",
      "Sinais ou acontecimentos relacionados.",
      "Tendência de continuidade.",
      "O que pode favorecer o afastamento.",
      "O que deve ser evitado.",
      "Orientação espiritual.",
      "O que ainda não foi percebido.",
      "Conselho final.",
    ],
    tiragem: [
      "Existe alguma demanda ou interferência espiritual direcionada a você?",
      "Qual é a natureza dessa interferência, caso exista?",
      "De onde ou de que situação essa interferência pode estar relacionada?",
      "Há quanto tempo essa energia tende a estar atuando?",
      "Em quais áreas da vida essa interferência pode estar repercutindo?",
      "Quais sinais ou acontecimentos podem estar relacionados a essa situação?",
      "Essa interferência possui força ou tendência de continuidade?",
      "O que pode favorecer a quebra ou o afastamento dessa influência?",
      "O que você deve evitar neste momento?",
      "Qual orientação espiritual existe para lidar com essa situação?",
      "Existe algo que você ainda não percebeu sobre essa questão?",
      "Qual é o conselho final do oráculo?",
    ],
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa do Ambiente",
    descricao:
      "Método voltado para compreender a energia percebida de um ambiente e identificar caminhos para sua harmonização.",
    itens: [
      "Energia atual do ambiente.",
      "O que existe de positivo no local.",
      "O que pode estar prejudicando a energia.",
      "Como o ambiente afeta emocionalmente.",
      "Como afeta a espiritualidade.",
      "O que favorece a harmonização.",
      "Pontos que merecem atenção.",
      "Tendência energética.",
      "Conselho final.",
    ],
    tiragem: [
      "Energia atual do ambiente.",
      "O que existe de positivo no local?",
      "O que pode estar prejudicando a energia?",
      "Como o ambiente afeta você emocionalmente?",
      "Como o ambiente afeta sua espiritualidade?",
      "O que pode favorecer a harmonização?",
      "O que merece atenção?",
      "Qual é a tendência energética do ambiente?",
      "Qual é o conselho final do oráculo?",
    ],
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa da Missão Espiritual",
    descricao:
      "Método voltado para compreender o propósito espiritual, os aprendizados, os potenciais e os caminhos de desenvolvimento ao longo da jornada pessoal.",
    itens: [
      "Propósito espiritual nesta encarnação.",
      "Aprendizados que a pessoa busca desenvolver.",
      "Potenciais espirituais.",
      "O que pode afastar do caminho espiritual.",
      "O que precisa ser desenvolvido.",
      "Experiências que favorecem o amadurecimento.",
      "Como se alinhar ao propósito.",
      "O que precisa compreender sobre a jornada atual.",
      "Conselho final do oráculo.",
    ],
    tiragem: [
      {
        deck: 1,
        pergunta: "Qual é o propósito espiritual dessa pessoa nesta encarnação?",
        casas: ["Casas 1 e 2: Propósito central e jornada espiritual."],
        fundo: "Energia que sustenta esse propósito.",
      },
      {
        deck: 1,
        pergunta:
          "Quais aprendizados a alma dessa pessoa busca desenvolver nesta vida?",
        casas: ["Casas 3 e 4: Lições, experiências e desafios."],
        fundo: "Aprendizado mais profundo.",
      },
      {
        deck: 1,
        pergunta: "Quais potenciais espirituais essa pessoa carrega?",
        casas: ["Casas 5 e 6: Capacidades e potenciais."],
        fundo: "O que ainda precisa ser reconhecido.",
      },
      {
        deck: 2,
        pergunta:
          "O que pode estar afastando essa pessoa de seu caminho espiritual?",
        casas: ["Casas 1 e 2: Fatores de afastamento."],
        fundo: "Raiz desse afastamento.",
      },
      {
        deck: 2,
        pergunta:
          "O que essa pessoa precisa desenvolver para evoluir espiritualmente?",
        casas: ["Casas 3 e 4: Virtudes, atitudes e conhecimentos."],
        fundo: "Principal aspecto a ser trabalhado.",
      },
      {
        deck: 2,
        pergunta:
          "Quais experiências podem contribuir para o cumprimento de sua missão espiritual?",
        casas: ["Casas 5 e 6: Experiências e oportunidades."],
        fundo: "Sentido dessas experiências.",
      },
      {
        deck: 3,
        pergunta:
          "Como essa pessoa pode se alinhar melhor ao seu propósito espiritual?",
        casas: ["Casas 1 e 2: Atitudes e escolhas favoráveis."],
        fundo: "Energia que favorece o alinhamento.",
      },
      {
        deck: 3,
        pergunta:
          "O que essa pessoa precisa compreender sobre sua jornada espiritual neste momento?",
        casas: ["Casas 3 e 4: Mensagem sobre a fase atual."],
        fundo: "Aquilo que ainda precisa ser percebido.",
      },
      {
        deck: 3,
        pergunta:
          "Qual é o conselho do oráculo para essa pessoa seguir sua missão espiritual?",
        casas: ["Casas 5 e 6: Orientação para a jornada."],
        fundo: "Mensagem final do oráculo.",
      },
    ],
  },
];

export const metodosPrecos = {
  normal: [
    { nome: "1 método", valor: 55 },
    { nome: "2 métodos", valor: 105 },
    { nome: "3 métodos", valor: 155 },
    { nome: "4 métodos", valor: 205 },
    { nome: "5 métodos", valor: 255 },
    { nome: "6 métodos", valor: 305 },
    { nome: "7 métodos", valor: 355 },
    { nome: "8 métodos", valor: 405 },
    { nome: "9 métodos", valor: 455 },
    { nome: "10 métodos", valor: 505 },
  ],

  espiritual: [
    { nome: "1 método", valor: 75 },
    { nome: "2 métodos", valor: 145 },
    { nome: "3 métodos", valor: 215 },
    { nome: "4 métodos", valor: 285 },
    { nome: "5 métodos", valor: 355 },
    { nome: "6 métodos", valor: 425 },
  ],
};

export const previsoes2028 = {
  titulo: "Fim de Ano — Previsões para 2028",

  descricao:
    "Consultas especiais para explorar as tendências, oportunidades, desafios e aprendizados de 2028, com opções de leitura geral, mensal e por área da vida.",

  comoFunciona: [
    {
      nome: "Uma área",
      descricao: "Análise completa de uma área específica.",
    },
    {
      nome: "Combo de áreas",
      descricao:
        "Combinação de duas ou mais áreas escolhidas pelo cliente.",
    },
    {
      nome: "Completão 2028",
      descricao:
        "Análise de todas as áreas da vida, incluindo amor, família, amizades, trabalho, finanças, saúde, desenvolvimento pessoal e espiritualidade.",
    },
  ],

  consultas: [
    {
      nome: "Previsão Geral 2028 — Panorama do Ano",
      valor: 185,
      descricao:
        "Uma leitura para conhecer as principais tendências, oportunidades, desafios e acontecimentos de 2028 em todas as áreas da vida.",
      decks: [
        {
          nome: "1° deck — Panorama Geral",
          perguntas: [
            {
              pergunta: "Qual será a energia predominante de 2028?",
              casas: [
                "Casa 1: Energia principal do ano.",
                "Casa 2: Como essa energia tende a se manifestar.",
              ],
              fundo: "Energia subjacente do ano.",
            },
            {
              pergunta: "Quais serão os principais acontecimentos de 2028?",
              casas: [
                "Casa 3: Principal acontecimento ou tendência.",
                "Casa 4: Desdobramento.",
              ],
              fundo: "Influências por trás dos acontecimentos.",
            },
            {
              pergunta: "Qual será o maior desafio do ano?",
              casas: [
                "Casa 5: Principal desafio.",
                "Casa 6: Como lidar com ele.",
              ],
              fundo: "O que está por trás do desafio.",
            },
          ],
        },
        {
          nome: "2° deck — Amor e Relações",
          perguntas: [
            {
              pergunta: "Como tende a se desenvolver minha vida amorosa?",
              casas: [
                "Casa 1: Tendência amorosa.",
                "Casa 2: Desdobramentos.",
              ],
              fundo: "Energia predominante no amor.",
            },
            {
              pergunta:
                "Como estarão meus relacionamentos familiares e sociais?",
              casas: [
                "Casa 3: Tendência dos relacionamentos.",
                "Casa 4: O que merece atenção.",
              ],
              fundo: "Influências sobre esses vínculos.",
            },
          ],
        },
        {
          nome: "3° deck — Trabalho e Finanças",
          perguntas: [
            {
              pergunta: "Como tende a se desenvolver minha vida profissional?",
              casas: [
                "Casa 1: Tendência profissional.",
                "Casa 2: Oportunidades e desdobramentos.",
              ],
              fundo: "Energia profissional do ano.",
            },
            {
              pergunta: "Como estarão minhas finanças em 2028?",
              casas: [
                "Casa 3: Tendência financeira.",
                "Casa 4: O que pode favorecer ou dificultar a prosperidade.",
              ],
              fundo: "Energia financeira do ano.",
            },
          ],
        },
        {
          nome: "4° deck — Saúde e Bem-Estar",
          perguntas: [
            {
              pergunta:
                "Quais aspectos da minha saúde e do meu bem-estar merecem atenção?",
              casas: [
                "Casa 1: Tendência geral relacionada ao bem-estar.",
                "Casa 2: Aspectos que merecem cuidado.",
              ],
              fundo: "Mensagem complementar.",
            },
            {
              pergunta: "O que devo priorizar no meu autocuidado?",
              casas: [
                "Casa 3: O que precisa de mais atenção.",
                "Casa 4: Atitudes que podem favorecer meu bem-estar.",
              ],
              fundo: "Orientação complementar.",
            },
          ],
        },
        {
          nome: "5° deck — Vida Pessoal e Espiritualidade",
          perguntas: [
            {
              pergunta: "Como será meu desenvolvimento pessoal em 2028?",
              casas: [
                "Casa 1: Tendência de desenvolvimento.",
                "Casa 2: Aprendizados e possibilidades de evolução.",
              ],
              fundo: "Energia por trás do processo.",
            },
            {
              pergunta: "Como tende a se desenvolver minha vida espiritual?",
              casas: [
                "Casa 3: Tendência espiritual.",
                "Casa 4: Aprendizados e experiências.",
              ],
              fundo: "Mensagem espiritual.",
            },
          ],
        },
        {
          nome: "6° deck — Encerramento",
          perguntas: [
            {
              pergunta:
                "Qual será minha maior oportunidade ou conquista em 2028?",
              casas: [
                "Casa 1: Oportunidade ou conquista em potencial.",
                "Casa 2: Como ela pode se desenvolver.",
              ],
              fundo: "O que favorece essa realização.",
            },
            {
              pergunta: "O que devo deixar para trás para avançar?",
              casas: [
                "Casa 3: O que precisa ser encerrado ou superado.",
                "Casa 4: Como trabalhar essa questão.",
              ],
              fundo: "O que ainda me prende a esse ciclo.",
            },
            {
              pergunta: "Qual é o conselho do oráculo para meu ano de 2028?",
              casas: [
                "Casa 5: Conselho principal.",
                "Casa 6: Melhor postura diante do ano.",
              ],
              fundo: "Mensagem final.",
            },
          ],
        },
      ],
    },

    {
      nome: "Previsão Mensal 2028 — Janeiro a Dezembro",
      valor: 245,
      descricao:
        "Uma leitura para acompanhar as tendências de cada mês, identificando acontecimentos, desafios e oportunidades ao longo do ano.",
      decks: [
        {
          nome: "1° deck — Janeiro a Abril",
          meses: ["Janeiro", "Fevereiro", "Março", "Abril"],
          casas: [
            "Casa 1: Principal tendência do mês.",
            "Casa 2: Como essa tendência pode se desenvolver.",
          ],
          fundo:
            "Energia subjacente de cada mês.",
        },
        {
          nome: "2° deck — Maio a Agosto",
          meses: ["Maio", "Junho", "Julho", "Agosto"],
          casas: [
            "Casa 1: Principal tendência do mês.",
            "Casa 2: Como essa tendência pode se desenvolver.",
          ],
          fundo:
            "Energia subjacente de cada mês.",
        },
        {
          nome: "3° deck — Setembro a Dezembro",
          meses: ["Setembro", "Outubro", "Novembro", "Dezembro"],
          casas: [
            "Casa 1: Principal tendência do mês.",
            "Casa 2: Como essa tendência pode se desenvolver.",
          ],
          fundo:
            "Energia subjacente de cada mês.",
        },
      ],
    },

    {
      nome: "Previsão Amorosa 2028",
      valor: 125,
      descricao:
        "Uma leitura completa sobre a vida amorosa, relacionamentos, sentimentos, possibilidades e acontecimentos afetivos ao longo do ano.",
      decks: [
        {
          nome: "1° deck — Tendências Amorosas",
          perguntas: [
            {
              pergunta:
                "O que tende a se manifestar na minha vida amorosa em 2028?",
              casas: [
                "Casa 1: Principal tendência.",
                "Casa 2: Como essa tendência se desenvolve.",
              ],
              fundo: "Energia subjacente.",
            },
            {
              pergunta: "Quais oportunidades amorosas podem surgir?",
              casas: [
                "Casa 3: Oportunidades.",
                "Casa 4: Como podem se desenvolver.",
              ],
              fundo: "Influências sobre as possibilidades.",
            },
            {
              pergunta: "Quais desafios posso enfrentar no amor?",
              casas: [
                "Casa 5: Principal desafio.",
                "Casa 6: Como lidar com ele.",
              ],
              fundo: "O que está por trás do desafio.",
            },
          ],
        },
        {
          nome: "2° deck — Relacionamentos e Possibilidades",
          perguntas: [
            {
              pergunta:
                "Como tendem a se desenvolver meus relacionamentos atuais ou futuros?",
              casas: [
                "Casa 1: Tendência dos relacionamentos.",
                "Casa 2: Desdobramentos.",
              ],
              fundo: "Energia predominante.",
            },
            {
              pergunta: "O que pode favorecer minha vida amorosa?",
              casas: [
                "Casa 3: O que favorece.",
                "Casa 4: Como aproveitar essa possibilidade.",
              ],
              fundo: "Influências favoráveis.",
            },
            {
              pergunta: "O que merece minha atenção na vida amorosa?",
              casas: [
                "Casa 5: O que merece atenção.",
                "Casa 6: Melhor postura diante disso.",
              ],
              fundo: "O que está por trás desse ponto.",
            },
          ],
        },
        {
          nome: "3° deck — Aprendizados e Conselho",
          perguntas: [
            {
              pergunta: "Qual será meu principal aprendizado amoroso em 2028?",
              casas: [
                "Casa 1: Aprendizado.",
                "Casa 2: Como desenvolvê-lo.",
              ],
              fundo: "Sentido mais profundo.",
            },
            {
              pergunta: "O que preciso deixar para trás na minha vida amorosa?",
              casas: [
                "Casa 3: O que precisa ser superado.",
                "Casa 4: Como trabalhar essa questão.",
              ],
              fundo: "O que ainda me prende.",
            },
            {
              pergunta: "Qual é o conselho do oráculo para minha vida amorosa?",
              casas: [
                "Casa 5: Conselho principal.",
                "Casa 6: Melhor postura.",
              ],
              fundo: "Mensagem final.",
            },
          ],
        },
      ],
    },

    {
      nome: "Previsão Profissional e Financeira 2028",
      valor: 125,
      descricao:
        "Uma leitura sobre carreira, trabalho, dinheiro, oportunidades, crescimento e prosperidade durante o ano.",
      decks: [
        {
          nome: "1° deck — Trabalho e Carreira",
          perguntas: [
            {
              pergunta:
                "Como tende a se desenvolver minha vida profissional em 2028?",
              casas: [
                "Casa 1: Principal tendência.",
                "Casa 2: Desdobramentos.",
              ],
              fundo: "Energia profissional do ano.",
            },
            {
              pergunta: "Quais oportunidades profissionais podem surgir?",
              casas: [
                "Casa 3: Oportunidades.",
                "Casa 4: Como aproveitá-las.",
              ],
              fundo: "Influências sobre as oportunidades.",
            },
            {
              pergunta: "Quais desafios posso enfrentar profissionalmente?",
              casas: [
                "Casa 5: Principal desafio.",
                "Casa 6: Como lidar com ele.",
              ],
              fundo: "O que está por trás do desafio.",
            },
          ],
        },
        {
          nome: "2° deck — Dinheiro e Prosperidade",
          perguntas: [
            {
              pergunta: "Como tende a se desenvolver minha vida financeira?",
              casas: [
                "Casa 1: Tendência financeira.",
                "Casa 2: Desdobramentos.",
              ],
              fundo: "Energia financeira do ano.",
            },
            {
              pergunta: "O que pode favorecer minha prosperidade?",
              casas: [
                "Casa 3: O que favorece.",
                "Casa 4: Como aproveitar esse potencial.",
              ],
              fundo: "Influências favoráveis.",
            },
            {
              pergunta: "O que pode dificultar meu crescimento financeiro?",
              casas: [
                "Casa 5: Principal dificuldade.",
                "Casa 6: Como lidar com ela.",
              ],
              fundo: "O que está por trás da questão.",
            },
          ],
        },
        {
          nome: "3° deck — Crescimento e Conselho",
          perguntas: [
            {
              pergunta:
                "Qual será meu maior potencial de crescimento profissional e financeiro?",
              casas: [
                "Casa 1: Potencial de crescimento.",
                "Casa 2: Como desenvolvê-lo.",
              ],
              fundo: "O que favorece o crescimento.",
            },
            {
              pergunta:
                "O que preciso mudar para avançar profissionalmente e financeiramente?",
              casas: [
                "Casa 3: O que precisa mudar.",
                "Casa 4: Como trabalhar essa mudança.",
              ],
              fundo: "O que ainda impede o avanço.",
            },
            {
              pergunta:
                "Qual é o conselho do oráculo para minha carreira e minhas finanças?",
              casas: [
                "Casa 5: Conselho principal.",
                "Casa 6: Melhor postura.",
              ],
              fundo: "Mensagem final.",
            },
          ],
        },
      ],
    },

    {
      nome: "Previsão Espiritual 2028",
      valor: 125,
      descricao:
        "Uma leitura sobre espiritualidade, desenvolvimento interior, aprendizados, conexão espiritual e evolução pessoal durante o ano.",
      decks: [
        {
          nome: "1° deck — Caminho Espiritual",
          perguntas: [
            {
              pergunta: "Como tende a se desenvolver minha espiritualidade em 2028?",
              casas: [
                "Casa 1: Principal tendência.",
                "Casa 2: Desdobramentos.",
              ],
              fundo: "Energia espiritual do ano.",
            },
            {
              pergunta: "Quais experiências podem marcar meu caminho espiritual?",
              casas: [
                "Casa 3: Experiências ou acontecimentos.",
                "Casa 4: O que podem despertar ou ensinar.",
              ],
              fundo: "Influências por trás das experiências.",
            },
            {
              pergunta: "Quais potenciais espirituais posso desenvolver?",
              casas: [
                "Casa 5: Potenciais.",
                "Casa 6: Como desenvolvê-los.",
              ],
              fundo: "O que favorece o desenvolvimento.",
            },
          ],
        },
        {
          nome: "2° deck — Aprendizados e Evolução",
          perguntas: [
            {
              pergunta: "Qual será meu principal aprendizado espiritual?",
              casas: [
                "Casa 1: Aprendizado.",
                "Casa 2: Como aplicá-lo.",
              ],
              fundo: "Sentido mais profundo.",
            },
            {
              pergunta: "O que pode dificultar minha evolução espiritual?",
              casas: [
                "Casa 3: Principal bloqueio.",
                "Casa 4: Como trabalhar essa questão.",
              ],
              fundo: "O que está por trás do bloqueio.",
            },
            {
              pergunta: "O que pode fortalecer minha conexão espiritual?",
              casas: [
                "Casa 5: O que favorece a conexão.",
                "Casa 6: Como desenvolver essa aproximação.",
              ],
              fundo: "Influência espiritual.",
            },
          ],
        },
        {
          nome: "3° deck — Direcionamento e Conselho",
          perguntas: [
            {
              pergunta:
                "O que preciso compreender sobre meu caminho espiritual neste ano?",
              casas: [
                "Casa 1: O que precisa ser compreendido.",
                "Casa 2: Como aplicar esse entendimento.",
              ],
              fundo: "Mensagem complementar.",
            },
            {
              pergunta: "O que devo desenvolver ou transformar em mim?",
              casas: [
                "Casa 3: O que precisa ser desenvolvido ou transformado.",
                "Casa 4: Como trabalhar esse aspecto.",
              ],
              fundo: "O que favorece a transformação.",
            },
            {
              pergunta:
                "Qual é o conselho do oráculo para minha jornada espiritual em 2028?",
              casas: [
                "Casa 5: Conselho principal.",
                "Casa 6: Melhor postura.",
              ],
              fundo: "Mensagem final.",
            },
          ],
        },
      ],
    },
  ],

  precosPorArea: [
    { nome: "1 área", valor: 125 },
    { nome: "2 áreas", valor: 240 },
    { nome: "3 áreas", valor: 355 },
    { nome: "4 áreas", valor: 470 },
    { nome: "5 áreas", valor: 585 },
    { nome: "6 áreas", valor: 700 },
    { nome: "7 áreas", valor: 815 },
  ],

  completão: {
    nome: "Completão 2028",
    valor: 799,
    descricao:
      "Inclui a análise aprofundada de todas as áreas disponíveis no catálogo, com amor, finanças, trabalho, família, estudos, vida social, saúde e espiritualidade.",
    areas: [
      "Amor",
      "Finanças",
      "Trabalho",
      "Família",
      "Estudos",
      "Vida social",
      "Saúde",
      "Desenvolvimento pessoal",
      "Espiritualidade",
    ],
  },
};

export const planos = [
  {
    nome: "Plano Perguntas",
    valor: 1198,
    descricao: "Perguntas recorrentes ao longo do mês.",
  },
  {
    nome: "Plano Previsões",
    valor: 1498,
    descricao:
      "Acompanhamento mensal com previsões das áreas disponíveis no catálogo.",
  },
  {
    nome: "Plano Métodos",
    valor: 1998,
    descricao:
      "Acesso recorrente aos métodos e tiragens disponíveis durante o período do plano.",
  },
  {
    nome: "Plano Completo",
    valor: 3198,
    descricao:
      "Acesso contínuo a perguntas, previsões, métodos e tiragens aprofundadas.",
  },
];

export const fidelidade = [
  {
    atendimentos: 5,
    beneficio: "1 pergunta bônus gratuita",
  },
  {
    atendimentos: 10,
    beneficio: "1 método ou previsão bônus gratuita",
  },
  {
    atendimentos: 15,
    beneficio: "1 pergunta + 1 método ou previsão bônus gratuita",
  },
  {
    atendimentos: 20,
    beneficio: "1 pergunta + 1 método + 1 previsão bônus gratuita",
  },
];
