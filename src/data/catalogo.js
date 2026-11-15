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
    "Uma análise aprofundada da área escolhida para compreender as principais tendências do mês, situações que merecem atenção, melhores formas de agir e aprendizados que podem surgir durante o período.",

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
  // =====================================================
  // CAMINHOS, ESCOLHAS E DECISÕES
  // =====================================================

  {
    categoria: "Caminhos, Escolhas e Decisões",
    nome: "Oráculo da Clareza",
    descricao:
      "Uma leitura para analisar uma questão de forma objetiva, identificando o que favorece e desfavorece a situação, o que pode acontecer daqui para frente, os resultados possíveis e a melhor direção a seguir.",
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
      "Uma leitura para orientar decisões e projetos, mostrando o que deve ser evitado, quais caminhos estão favoráveis e quais situações exigem atenção, cautela ou uma análise mais cuidadosa.",
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
      "Uma análise comparativa entre diferentes possibilidades, permitindo compreender o potencial de cada escolha, suas consequências, oportunidades, dificuldades e qual caminho tende a ser mais favorável. O valor inclui a análise de dois caminhos, com possibilidade de acrescentar outros mediante pagamento adicional.",
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
      "Uma leitura para compreender as possibilidades de realização de um sonho ou objetivo importante, analisando as tendências para o futuro próximo e distante, os obstáculos que podem surgir, as atitudes necessárias e o caminho mais favorável para alcançar essa conquista.",
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
    categoria: "Caminhos, Escolhas e Decisões",
    nome: "Núcleo Desperto",
    descricao:
      "Uma leitura de autoconhecimento voltada para compreender o que realmente está por trás de uma escolha ou decisão. Ajuda a identificar motivações, desejos genuínos, medos, influências externas, situações que você tenta evitar e aquilo que realmente deseja alcançar.",
    itens: [
      "Motivações reais por trás da escolha.",
      "Desejos genuínos envolvidos na decisão.",
      "Medos que influenciam o processo.",
      "Influências externas que interferem na escolha.",
      "O que você está tentando evitar.",
      "O que realmente deseja alcançar.",
      "Conselho final do oráculo.",
    ],
  },

  // =====================================================
  // TRABALHO, CARREIRA E PROSPERIDADE
  // =====================================================

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa da Prosperidade",
    descricao:
      "Uma leitura voltada para compreender a situação financeira atual, identificar o que pode estar dificultando sua prosperidade, conhecer as tendências para o dinheiro e descobrir quais atitudes podem favorecer crescimento, estabilidade e melhorias financeiras.",
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
      "Uma análise da sua vida profissional, considerando o momento atual, os comportamentos que podem estar prejudicando sua trajetória, as possibilidades de melhoria e as tendências para permanecer no trabalho atual ou buscar uma nova oportunidade.",
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
      "Uma leitura para quem está desempregado ou deseja conquistar uma nova oportunidade profissional. Ajuda a compreender o momento atual, identificar dificuldades, reconhecer o que precisa ser aprimorado e conhecer as tendências para os próximos meses.",
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
      "Uma leitura estratégica para profissionais e empreendedores que desejam definir ou revisar os preços de seus produtos e serviços. Analisa se o valor cobrado corresponde ao que é entregue, como o público tende a percebê-lo, o impacto nas vendas e quais faixas de preço podem favorecer o equilíbrio entre comercialização e valorização do trabalho.",
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
      "Uma leitura para compreender como você é percebida profissionalmente, reconhecer seus talentos e diferenciais, identificar o que pode estar impedindo seu reconhecimento e descobrir oportunidades para demonstrar seu potencial e conquistar maior valorização.",
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
      "Uma leitura para quem considera mudar de emprego, área, profissão ou trajetória profissional. Analisa as motivações por trás desse desejo, o que precisa ser compreendido antes da decisão, as tendências de permanecer ou mudar e os riscos e oportunidades envolvidos.",
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
      "Uma leitura para avaliar o potencial de um projeto, compreender seus principais obstáculos, identificar fatores que podem favorecer seu desenvolvimento e conhecer as oportunidades, a recepção do público e as possibilidades de crescimento.",
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
      "Uma leitura para empreendedores que desejam compreender a situação atual do negócio, reconhecer seus pontos fortes, identificar dificuldades de crescimento e descobrir oportunidades e atitudes que podem favorecer o desenvolvimento da empresa.",
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
      "Uma leitura para analisar uma oportunidade profissional ou financeira específica antes de tomar uma decisão. Ajuda a compreender o que ela pode proporcionar, seus pontos positivos, riscos, impactos financeiros e profissionais e seu potencial de crescimento.",
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
    nome: "Mapa da Negociação",
    descricao:
      "Uma leitura para compreender a dinâmica de uma negociação, identificar seus pontos favoráveis e desfavoráveis, reconhecer os obstáculos envolvidos e descobrir como se posicionar para buscar um resultado mais vantajoso. Também analisa os ganhos e melhorias que podem ser conquistados.",
    itens: [
      "Energia e dinâmica da negociação.",
      "Pontos favoráveis e recursos disponíveis.",
      "Obstáculos e fatores desfavoráveis.",
      "Postura e estratégia mais favoráveis.",
      "Potencial de resultado.",
      "Ganhos e melhorias possíveis.",
      "Conselho final do oráculo.",
    ],
  },

  {
    categoria: "Trabalho, Carreira e Prosperidade",
    nome: "Mapa da Valorização",
    descricao:
      "Uma leitura para compreender como as pessoas percebem seu trabalho, identificar fatores que contribuem para sua valorização ou desvalorização, reconhecer seus diferenciais e descobrir como melhorar seu posicionamento profissional e financeiro.",
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

  // =====================================================
  // EMOCIONAL E AUTOCONHECIMENTO
  // =====================================================

  {
    categoria: "Emocional e Autoconhecimento",
    nome: "Espelho de Vênus",
    descricao:
      "Uma leitura de autoconhecimento voltada para autoestima, aparência, personalidade e percepção pessoal. Ajuda a reconhecer suas qualidades, compreender padrões que precisam ser trabalhados, identificar potenciais ainda não explorados e entender quais aspectos emocionais merecem atenção.",
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
      "Uma leitura para compreender seu estado emocional, identificar padrões que se repetem, reconhecer atitudes de autossabotagem e medos ocultos e descobrir caminhos para romper ciclos negativos e desenvolver seu potencial emocional.",
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
      "Uma leitura profunda de autoconhecimento para investigar aspectos que você tenta esconder, padrões destrutivos, medos, impulsos, projeções emocionais e feridas que ainda influenciam suas decisões. Um convite para reconhecer o que precisa ser confrontado e transformado.",
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
      "Uma leitura para compreender as diferentes versões de si mesmo: quem você é na solitude, nas relações sociais e amorosas, nos momentos felizes e nas situações de dor. Ajuda a reconhecer sua identidade genuína, mecanismos de defesa e aspectos que nem sempre são percebidos pelas outras pessoas.",
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
      "Uma leitura voltada para identificar o que trava sua evolução, compreender formas de autossabotagem, reconhecer padrões repetidos por medo e perceber onde existe apego ou necessidade de controle. Ajuda a entender o que precisa ser deixado para trás para amadurecer e avançar.",
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
      "Uma leitura de autoconhecimento voltada para compreender como experiências da infância e vivências marcantes podem ter influenciado sua personalidade, sua forma de amar e lidar com rejeições. Ajuda a reconhecer dores ainda presentes, defesas emocionais e aspectos que precisam ser ressignificados.",
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
      "Uma leitura para compreender sua autoimagem, identificar inseguranças, reconhecer qualidades que você não valoriza e perceber quais comportamentos e comparações podem enfraquecer sua autoestima. Também aponta caminhos para fortalecer a confiança e o amor-próprio.",
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
    categoria: "Emocional e Autoconhecimento",
    nome: "Mapa do Propósito",
    descricao:
      "Uma leitura para compreender o que dá sentido à sua vida, reconhecer os desejos da sua essência e identificar potenciais que precisam ganhar espaço. Ajuda a perceber o que pode estar afastando você do seu caminho, o que precisa desenvolver ou deixar para trás e quais direções favorecem sua evolução.",
    itens: [
      "O que realmente dá sentido à sua vida.",
      "Experiências que sua essência busca viver.",
      "Potenciais que precisam ser expressos.",
      "O que está afastando você do seu caminho.",
      "Aspectos que precisam ser desenvolvidos.",
      "O que precisa ser deixado para trás.",
      "Direções favoráveis para sua evolução.",
      "O que pode construir a partir de quem está se tornando.",
      "Conselho final do oráculo.",
    ],
  },

  // =====================================================
  // AMOR E RELACIONAMENTOS
  // =====================================================

  {
    categoria: "Amor e Relacionamentos",
    nome: "Raio-X da Pessoa",
    descricao:
      "Uma leitura profunda para compreender a personalidade de uma pessoa, a imagem que ela tenta transmitir, aspectos que esconde, conflitos internos, comportamentos, defeitos, riscos e suas verdadeiras intenções e sentimentos em relação a você.",
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
      "Uma leitura para investigar a dinâmica de uma amizade, compreender a opinião e as intenções da outra pessoa, descobrir como ela se comporta na sua ausência e identificar os aspectos positivos e negativos de manter esse vínculo.",
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
      "Uma leitura para compreender afastamentos, vínculos que permanecem e possibilidades de reconciliação. Ajuda a identificar o que causou a distância, quais obstáculos impedem uma retomada, quem tende a tomar a iniciativa e quais são as possibilidades para essa conexão.",
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
      "Uma leitura para compreender o estado emocional de uma pessoa e sua disponibilidade para viver um relacionamento. Investiga possíveis envolvimentos, desejos, resistências, bloqueios e intenções em relação ao consulente.",
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
      "Uma leitura para compreender o que pode estar dificultando a chegada de um relacionamento, quais atitudes favorecem ou atrapalham esse encontro, o perfil de uma pessoa compatível, onde essa conexão pode surgir e as tendências para sua vida amorosa.",
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
      "Uma leitura para acompanhar as possíveis movimentações de uma pessoa em relação a você, comparando o que ela pretende fazer com o que tende a fazer nos próximos dias, semanas e meses. Também analisa como você pode se sentir durante esse período e quais orientações podem ajudar a lidar com a situação.",
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
      "Uma leitura para investigar não apenas o que uma pessoa sente, mas também o que deseja fazer em relação a esses sentimentos e quais atitudes realmente tende a tomar. Ajuda a compreender sentimentos ocultos, intenções e a imagem que ela deseja transmitir.",
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
      "Uma análise aprofundada da dinâmica entre duas pessoas. Compara sentimentos, pensamentos, intenções e atitudes de ambos, identifica obstáculos e padrões de interação e mostra o que cada um pode fazer para melhorar a relação e lidar com os desafios existentes.",
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
      "Uma leitura voltada para atração e aproximação amorosa. Ajuda a compreender como agir para despertar o interesse de uma pessoa, como favorecer a continuidade da aproximação, qual impressão ela possui sobre você e quais caminhos podem existir entre vocês.",
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
      "Uma leitura profunda para investigar aspectos ocultos de uma relação, sentimentos não admitidos, possíveis interesses em terceiros, intenções, padrões destrutivos e manipulações emocionais. Também analisa o que mantém a conexão, as tendências futuras e as possíveis consequências de permanecer ou se afastar.",
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
      "Uma leitura para situações de triângulo amoroso, relações paralelas ou disputas afetivas. Compara os sentimentos, a atração, os vínculos e as perspectivas de futuro envolvendo as pessoas da situação, oferecendo também orientações para a consulente compreender seu lugar nessa dinâmica.",
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
    categoria: "Amor e Relacionamentos",
    nome: "Mapa do Novo Amor",
    descricao:
      "Uma leitura para quem deseja compreender as possibilidades de viver uma nova experiência amorosa. Analisa o perfil de uma pessoa que pode surgir, como esse encontro pode acontecer, o que essa conexão pode despertar, suas possibilidades de desenvolvimento e o que você pode trabalhar em si para se abrir a um novo relacionamento.",
    itens: [
      "Perfil e características de uma pessoa que pode surgir.",
      "Possíveis circunstâncias e ambientes do encontro.",
      "O que essa pessoa pode despertar emocionalmente.",
      "Como tende a acontecer a aproximação.",
      "Características e dinâmica da possível relação.",
      "Potencial para compromisso e estabilidade.",
      "O que desenvolver para viver um novo amor.",
      "Possíveis bloqueios e dificuldades.",
      "Conselho final para sua vida amorosa.",
    ],
  },

  // =====================================================
  // MEDIUNIDADE E ESPIRITUALIDADE
  // =====================================================

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa da Mediunidade",
    descricao:
      "Uma leitura para compreender os potenciais mediúnicos que podem ser desenvolvidos, identificar possíveis bloqueios e fatores favoráveis, conhecer caminhos para fortalecer esses dons e receber orientações sobre cuidados e desenvolvimento espiritual.",
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
      "Uma leitura para compreender sua relação com a espiritualidade, seus guias e mentores. Ajuda a perceber como está essa conexão, o que pode estar dificultando ou favorecendo sua aproximação espiritual e quais mensagens e orientações podem ser importantes neste momento.",
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
      "Uma leitura para compreender se existe potencial para desenvolver um caminho na cartomancia, identificar facilidades e bloqueios, avaliar possibilidades de atuação profissional e prosperidade e receber orientações para desenvolver suas habilidades com as cartas.",
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
      "Uma leitura para compreender como está sua proteção espiritual, reconhecer possíveis vulnerabilidades e identificar situações que podem afetar seu equilíbrio. Também aponta caminhos, cuidados e atitudes que podem favorecer o fortalecimento da sua proteção.",
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
      "Uma leitura para investigar possíveis interferências espirituais direcionadas a você, compreender sua natureza e possíveis repercussões, identificar sinais relacionados à situação e receber orientações sobre cuidados e caminhos para lidar com essa questão.",
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
      "Uma leitura para compreender a energia espiritual de um ambiente, reconhecer os aspectos positivos e possíveis fatores que prejudicam sua harmonia e entender como esse local pode influenciar seu bem-estar emocional e espiritual.",
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

  {
    categoria: "Mediunidade e Espiritualidade",
    nome: "Mapa da Missão Espiritual",
    descricao:
      "Uma leitura para compreender seu propósito espiritual nesta encarnação, os aprendizados que sua alma busca desenvolver e os potenciais que carrega. Ajuda a identificar o que pode estar afastando você do seu caminho, quais experiências favorecem sua evolução e como se alinhar melhor à sua jornada espiritual.",
    itens: [
      "Propósito espiritual nesta encarnação.",
      "Aprendizados que sua alma busca desenvolver.",
      "Potenciais espirituais que podem ser reconhecidos.",
      "O que pode estar afastando você do seu caminho.",
      "Aspectos que precisam ser desenvolvidos.",
      "Experiências que favorecem sua evolução.",
      "Como se alinhar melhor ao seu propósito.",
      "O que compreender sobre sua jornada atual.",
      "Conselho final para seguir sua missão espiritual.",
    ],
  },
];

// =====================================================
// VALORES DOS MÉTODOS
// =====================================================

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
    "Prepare-se para conhecer as tendências, oportunidades, desafios e aprendizados que podem marcar seu ano de 2028. Escolha uma previsão específica, combine as áreas que deseja analisar ou opte pela leitura completa para ter uma visão abrangente dos diferentes aspectos da sua vida.",

  comoFunciona: {
    titulo: "Como funcionam as consultas",

    descricao:
      "Você poderá escolher entre três modalidades: Previsão Geral 2028, Previsões por Área ou Completão 2028. Escolha a opção que melhor corresponde ao que deseja compreender sobre seu ano.",

    opcoes: [
      {
        nome: "Previsão Geral 2028",
        descricao:
          "Panorama completo das sete áreas da vida, com tendências, oportunidades, desafios e direcionamentos para 2028.",
      },
      {
        nome: "Previsões por Área",
        descricao:
          "Análise completa de uma ou mais áreas escolhidas por você, com panorama anual e previsões de janeiro a dezembro.",
      },
      {
        nome: "Completão 2028",
        descricao:
          "Análise completa das sete áreas da vida, incluindo panorama anual, oportunidades, desafios, aprendizados, direcionamentos e previsões mensais.",
      },
    ],
  },

  consultas: [
    {
      nome: "Previsão Geral 2028 — Panorama do Ano",
      valor: 185,

      descricao:
        "Uma leitura para conhecer as principais tendências, oportunidades, desafios e acontecimentos de 2028, considerando todas as áreas da vida.",

      itens: [
        "Panorama geral de 2028.",
        "Energia predominante e tendências do ano.",
        "Principais acontecimentos e desafios.",
        "Oportunidades e direcionamentos.",
        "Aprendizados e possibilidades de conquista.",
        "Conselho e orientação para o ano.",
        "Análise das sete áreas da vida.",
      ],
    },

    {
      nome: "Previsão Mensal 2028 — Janeiro a Dezembro",
      valor: 245,

      descricao:
        "Uma leitura para acompanhar os doze meses de 2028, identificando as principais tendências, oportunidades e desafios de cada período.",

      itens: [
        "Previsão de janeiro a dezembro.",
        "Principal tendência de cada mês.",
        "Possíveis desdobramentos mensais.",
        "Oportunidades e pontos de atenção.",
        "Orientações para cada período.",
      ],
    },

    {
      nome: "Previsão Amorosa 2028",
      valor: 125,

      descricao:
        "Uma leitura completa sobre sua vida amorosa em 2028, considerando relacionamentos, sentimentos, oportunidades e desafios afetivos.",

      itens: [
        "Panorama amoroso de 2028.",
        "Tendências e oportunidades afetivas.",
        "Desafios e pontos de atenção.",
        "Aprendizados e direcionamentos amorosos.",
        "Previsões de janeiro a dezembro.",
      ],
    },

    {
      nome: "Previsão Financeira 2028",
      valor: 125,

      descricao:
        "Uma leitura sobre sua vida financeira em 2028, considerando dinheiro, estabilidade, ganhos, gastos, oportunidades e prosperidade.",

      itens: [
        "Panorama financeiro de 2028.",
        "Tendências relacionadas a dinheiro e estabilidade.",
        "Oportunidades e possibilidades de ganhos.",
        "Desafios e pontos de atenção.",
        "Orientações financeiras para o ano.",
        "Previsões de janeiro a dezembro.",
      ],
    },

    {
      nome: "Previsão Profissional 2028",
      valor: 125,

      descricao:
        "Uma leitura sobre sua carreira e vida profissional em 2028, considerando trabalho, oportunidades, ambiente profissional e crescimento.",

      itens: [
        "Panorama profissional de 2028.",
        "Tendências na carreira e no trabalho.",
        "Oportunidades de crescimento.",
        "Desafios e mudanças profissionais.",
        "Direcionamentos para sua evolução.",
        "Previsões de janeiro a dezembro.",
      ],
    },

    {
      nome: "Previsão Familiar 2028",
      valor: 125,

      descricao:
        "Uma leitura sobre suas relações familiares em 2028, considerando convivência, vínculos, mudanças, oportunidades e desafios.",

      itens: [
        "Panorama familiar de 2028.",
        "Tendências nas relações familiares.",
        "Convivência e vínculos.",
        "Possíveis mudanças e desafios.",
        "Orientações para lidar com situações familiares.",
        "Previsões de janeiro a dezembro.",
      ],
    },

    {
      nome: "Previsão dos Estudos 2028",
      valor: 125,

      descricao:
        "Uma leitura sobre sua vida acadêmica e seus estudos em 2028, considerando aprendizado, desempenho, oportunidades e desenvolvimento.",

      itens: [
        "Panorama acadêmico de 2028.",
        "Tendências relacionadas aos estudos.",
        "Oportunidades de aprendizado.",
        "Desafios e pontos de atenção.",
        "Orientações para seu desenvolvimento acadêmico.",
        "Previsões de janeiro a dezembro.",
      ],
    },

    {
      nome: "Previsão da Vida Social 2028",
      valor: 125,

      descricao:
        "Uma leitura sobre sua vida social em 2028, considerando amizades, contatos, convivência, novas conexões e experiências sociais.",

      itens: [
        "Panorama social de 2028.",
        "Tendências nas amizades e relações sociais.",
        "Novas conexões e oportunidades.",
        "Desafios na convivência.",
        "Orientações para sua vida social.",
        "Previsões de janeiro a dezembro.",
      ],
    },

    {
      nome: "Previsão da Saúde 2028",
      valor: 125,

      descricao:
        "Uma leitura simbólica sobre tendências relacionadas ao bem-estar, autocuidado e hábitos saudáveis ao longo de 2028. Não substitui avaliação, orientação ou acompanhamento médico.",

      itens: [
        "Panorama simbólico do bem-estar em 2028.",
        "Tendências relacionadas ao autocuidado.",
        "Hábitos e aspectos que merecem atenção.",
        "Orientações para priorizar o bem-estar.",
        "Previsões de janeiro a dezembro.",
      ],
    },
  ],

  areas: [
    "Amor",
    "Vida financeira",
    "Trabalho",
    "Família",
    "Estudos",
    "Vida social",
    "Saúde",
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
      "Uma análise aprofundada de todas as sete áreas da vida, reunindo amor, vida financeira, trabalho, família, estudos, vida social e saúde em uma leitura completa sobre seu ano de 2028.",

    areas: [
      "Amor",
      "Vida financeira",
      "Trabalho",
      "Família",
      "Estudos",
      "Vida social",
      "Saúde",
    ],

    itens: [
      "Previsão Amorosa 2028.",
      "Previsão Financeira 2028.",
      "Previsão Profissional 2028.",
      "Previsão Familiar 2028.",
      "Previsão dos Estudos 2028.",
      "Previsão da Vida Social 2028.",
      "Previsão da Saúde 2028.",
      "Panorama anual de cada área.",
      "Oportunidades, desafios e aprendizados.",
      "Direcionamentos e conselhos.",
      "Previsões de janeiro a dezembro para cada área.",
    ],
  },
};


// =====================================================
// PLANOS DE ACOMPANHAMENTO
// =====================================================

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

// =====================================================
// CÍRCULO DA LUA — FIDELIDADE
// =====================================================

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
