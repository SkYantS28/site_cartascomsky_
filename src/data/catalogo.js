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
  },

  {
    categoria: "Caminhos, Escolhas e Decisões",
    nome: "Encruzilhada dos Caminhos",
    descricao:
      "Método voltado para decisões, escolhas e caminhos possíveis diante de uma situação.",
    itens: [
      "Energia do caminho escolhido.",
      "Consequências e tendências futuras.",
      "Potencial de crescimento e prosperidade.",
      "Pontos positivos e motivações.",
      "Desgastes, medos e dificuldades.",
      "Conselho final do oráculo.",
    ],
    adicional: "Adicional de R$25,00 por caminho possível.",
  },

  {
    categoria: "Caminhos, Escolhas e Decisões",
    nome: "O Mapa do Sonho",
    descricao:
      "Método voltado para entender as possibilidades, obstáculos e caminhos para realização de um sonho ou objetivo importante.",
    itens: [
      "Chances de realização do sonho.",
      "Possibilidades no futuro próximo.",
      "Tendências para o futuro mais distante.",
      "Atitudes que favorecem a concretização.",
      "Pessoas ou situações que podem atrapalhar.",
      "Melhor caminho para alcançar esse objetivo.",
      "Conselho final do oráculo.",
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
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa da Carreira",
    descricao:
      "Método voltado para analisar a vida profissional, ambiente de trabalho e tendências da carreira.",
    itens: [
      "Energia atual no trabalho.",
      "Atitudes que podem estar prejudicando a situação.",
      "Como agir para melhorar o ambiente profissional.",
      "Tendências e previsões para a carreira.",
      "Possibilidades caso permaneça no trabalho atual.",
      "Possibilidades caso decida sair.",
      "Conselho final do oráculo.",
    ],
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
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa da Precificação",
    descricao:
      "Método voltado para encontrar uma faixa de preço estratégica para um serviço.",
    itens: [
      "Se o preço atual corresponde ao valor entregue.",
      "Percepção do público sobre o serviço.",
      "Impacto do preço nas vendas.",
      "Potencial para aumentar o valor.",
      "Comparação entre diferentes faixas de preço.",
    ],
    adicional: "Inclui dois valores. Cada valor adicional custa R$15,00.",
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
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa do Empreendedorismo",
    descricao:
      "Método voltado para compreender os caminhos, desafios e potencial de crescimento de um negócio ou projeto profissional.",
    itens: [
      "Energia atual do negócio.",
      "O que está dificultando seu crescimento.",
      "Principais pontos fortes e diferenciais.",
      "O que pode favorecer o desenvolvimento.",
      "Oportunidades de crescimento.",
      "Tendências para o negócio.",
      "Conselho final do oráculo.",
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
  },

  {
    categoria: "Emocional e Autoconhecimento",
    nome: "Arquivo Emocional",
    descricao:
      "Método de autoconhecimento voltado para infância, traumas emocionais e padrões construídos ao longo da vida.",
    itens: [
      "Energia emocional da infância.",
      "Acontecimentos que marcaram sua personalidade.",
      "Aprendizados sobre amor e rejeição.",
      "Dores e traumas ainda carregados.",
      "Mecanismos de defesa emocional.",
      "Sentimentos nunca expressados.",
      "Partes emocionais presas ao passado.",
      "O que precisa ser ressignificado.",
      "Quem você pode se tornar ao superar essas dores.",
      "Conselho final.",
    ],
  },

  {
    categoria: "Emocional e Autoconhecimento",
    nome: "Mapa da Autoestima",
    descricao:
      "Método voltado para autoconhecimento, inseguranças e fortalecimento do amor-próprio.",
    itens: [
      "Como você se enxerga atualmente.",
      "Como as pessoas realmente percebem você.",
      "Inseguranças e fragilidades.",
      "Qualidades que você não reconhece.",
      "Padrões que enfraquecem sua autoestima.",
      "Energias e atitudes que fortalecem sua confiança.",
      "Comparações que precisam ser deixadas para trás.",
      "Conselho final.",
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Raio-X da Pessoa",
    descricao:
      "Método profundo voltado para revelar a personalidade, intenções e lados ocultos de uma pessoa.",
    itens: [
      "Essência e personalidade verdadeira.",
      "Imagem que a pessoa tenta transmitir.",
      "Segredos e comportamentos escondidos.",
      "Conflitos internos.",
      "Emoções reprimidas.",
      "Forma como age quando deseja algo.",
      "Defeitos, riscos e padrões negativos.",
      "Intenções reais com o consulente.",
      "Sentimentos verdadeiros no fundo da conexão.",
      "Conselho final.",
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "As Máscaras da Amizade",
    descricao:
      "Método voltado para analisar amizades, intenções ocultas e a verdadeira energia da relação.",
    itens: [
      "Opinião da pessoa sobre você.",
      "Como ela fala de você na sua ausência.",
      "Pontos positivos da amizade.",
      "Desgastes e lados negativos.",
      "Verdadeiras intenções.",
      "Imagem que ela tenta transmitir.",
      "Conselho final.",
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Pontes do Destino",
    descricao:
      "Método voltado para afastamentos, reconciliações e conexões que ainda possuem pendências emocionais.",
    itens: [
      "O que causou o afastamento.",
      "Sentimentos e energias ainda existentes.",
      "Bloqueios que impedem a reconciliação.",
      "Quem precisa agir.",
      "Chances de retomada.",
      "Conselho final.",
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Disponibilidade Emocional",
    descricao:
      "Método voltado para entender a abertura emocional, intenções e bloqueios afetivos de uma pessoa.",
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
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Entre Desejo e Atitude",
    descricao:
      "Método voltado para entender sentimentos ocultos, intenções e atitudes reais de uma pessoa.",
    itens: [
      "Sentimentos que a pessoa esconde.",
      "Como esse sentimento funciona.",
      "Desejos e vontades emocionais.",
      "O que gostaria de fazer.",
      "O que realmente tende a fazer.",
      "Imagem que tenta transmitir.",
      "Conselho final.",
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
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "A Arte da Conquista",
    descricao:
      "Método voltado para atração, aproximação e desenvolvimento de uma conexão amorosa.",
    itens: [
      "Como agir para aproximar a pessoa.",
      "Como fortalecer a conexão.",
      "Impressão que a pessoa possui sobre você.",
      "Energia e imagem que despertam interesse.",
      "Possibilidades de caminhos entre vocês.",
      "Conselho final.",
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "Sombras da Relação",
    descricao:
      "Método profundo voltado para revelar verdades ocultas, padrões destrutivos e intenções dentro de uma conexão amorosa.",
    itens: [
      "Sentimentos e pensamentos escondidos.",
      "Segredos e atitudes não demonstradas.",
      "Possibilidade de interesse em terceiros.",
      "O que a pessoa fala sobre você.",
      "Intenções reais.",
      "Padrões tóxicos e manipulações emocionais.",
      "O que mantém a conexão viva.",
      "Tendências futuras.",
      "Consequências de permanecer ou se afastar.",
      "Conselho final.",
    ],
  },

  {
    categoria: "Amor e Relacionamentos",
    nome: "As Três Faces do Amor",
    descricao:
      "Método voltado para triângulos amorosos, relações paralelas e disputas afetivas.",
    itens: [
      "Sentimentos, apego emocional e atração.",
      "Visão sobre um possível relacionamento.",
      "Dinâmica emocional e sexual da relação atual.",
      "O que prende ou incomoda na relação atual.",
      "Tendências futuras com ambas as conexões.",
      "Conselhos para a consulente.",
    ],
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa da Mediunidade",
    descricao:
      "Método voltado para entender potenciais mediúnicos, bloqueios espirituais e caminhos de desenvolvimento espiritual.",
    itens: [
      "Mediunidades com potencial de desenvolvimento.",
      "Bloqueios que dificultam a mediunidade.",
      "Energias e atitudes que favorecem o desenvolvimento.",
      "Como aflorar e fortalecer os dons.",
      "Mensagens da espiritualidade.",
      "Cuidados importantes.",
      "Conselho final.",
    ],
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa da Espiritualidade",
    descricao:
      "Método voltado para entender sua conexão espiritual, energias ao redor e relação com mentores e guias.",
    itens: [
      "Estado espiritual atual.",
      "Energia dos guias e mentores.",
      "Formas de fortalecer a conexão.",
      "Bloqueios.",
      "Energias favoráveis.",
      "Mensagens da espiritualidade.",
      "Conselho final.",
    ],
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Caminhos na Cartomancia",
    descricao:
      "Método voltado para entender potenciais, bloqueios e possibilidades dentro do caminho da cartomancia.",
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
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa da Proteção Espiritual",
    descricao:
      "Método voltado para compreender a proteção espiritual, possíveis vulnerabilidades e atitudes que podem fortalecer a segurança energética.",
    itens: [
      "Como está sua proteção atualmente.",
      "O que pode estar causando vulnerabilidade.",
      "Energias ou situações que afetam seu equilíbrio.",
      "O que favorece sua proteção.",
      "Como fortalecer sua proteção.",
      "Cuidados espirituais.",
      "Forças que podem atuar em sua proteção.",
      "Conselho final.",
    ],
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa da Demanda",
    descricao:
      "Método voltado para investigar possíveis interferências espirituais direcionadas à pessoa e compreender como essa situação pode estar se manifestando.",
    itens: [
      "Existência de possível demanda ou interferência.",
      "Natureza da interferência.",
      "Origem ou situação relacionada.",
      "Há quanto tempo tende a atuar.",
      "Áreas da vida afetadas.",
      "Sinais ou acontecimentos relacionados.",
      "Força e continuidade da influência.",
      "O que pode favorecer o afastamento.",
      "O que deve ser evitado.",
      "Orientação espiritual.",
      "O que ainda não foi percebido.",
      "Conselho final.",
    ],
  },

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa do Ambiente",
    descricao:
      "Método voltado para compreender a energia espiritual de um ambiente e caminhos para sua harmonização.",
    itens: [
      "Energia atual do ambiente.",
      "Aspectos positivos do local.",
      "O que pode prejudicar a energia.",
      "Como o ambiente afeta emocionalmente.",
      "Como afeta a espiritualidade.",
      "O que favorece a harmonização.",
      "Pontos que merecem atenção.",
      "Tendência energética.",
      "Conselho final.",
    ],
  },
];

export const metodosPrecos = {
  normal: [
    { nome: "1 método", valor:  55 },
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
