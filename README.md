# Cartas com Sky

<p>
  <strong>Website institucional e catálogo de serviços para leituras de tarot e oráculo.</strong>
</p>

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.28.0-CA4245?logo=reactrouter&logoColor=white)
![Deploy](https://img.shields.io/badge/Azure-Static_Web_Apps-0078D4?logo=microsoftazure&logoColor=white)
![Status](https://img.shields.io/badge/status-em_desenvolvimento-yellow)

## Sobre o projeto

O **Cartas com Sky** é uma aplicação web desenvolvida para apresentar serviços de leitura de tarot e oráculo, divulgar métodos disponíveis e orientar visitantes pelo processo de agendamento.

Este projeto também representa um exercício prático de desenvolvimento frontend para consolidar conhecimentos em componentização, navegação SPA, organização de dados, responsividade e implantação contínua.

## Funcionalidades

- Página inicial com apresentação da proposta do serviço
- Catálogo de leituras e métodos disponíveis
- Página explicativa sobre como funciona o agendamento
- Integração com WhatsApp para contato e agendamento
- Informações sobre formas de pagamento
- Navegação por rotas com React Router
- Cabeçalho, rodapé e plano de fundo estrelado reutilizáveis
- Interface adaptada para dispositivos móveis
- Build automatizado e implantação no Azure Static Web Apps

## Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| React 18 | Construção da interface e componentes |
| React Router DOM | Navegação entre páginas |
| Vite | Ambiente de desenvolvimento e geração do build |
| CSS | Estilização, responsividade e variáveis visuais |
| JavaScript ES6+ | Regras de interação e dados da aplicação |
| GitHub Actions | Automação de build e implantação |
| Azure Static Web Apps | Hospedagem da aplicação |

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Página inicial |
| `/catalogo` | Catálogo de serviços |
| `/catalogo_blackweek` | Catálogo promocional |
| `/agendamento` | Processo de agendamento e pagamento |

## Estrutura do projeto

```text
src/
├── components/
│   ├── Footer.jsx / Footer.css
│   ├── Header.jsx / Header.css
│   ├── MethodCard.jsx
│   └── StarBackground.jsx / StarBackground.css
├── data/
│   ├── catalogo.js
│   ├── catalogo_bblackweek.js
│   ├── cursos.js
│   ├── livros.js
│   └── oraculos.js
├── pages/
│   ├── Agendamento.jsx / Agendamento.css
│   ├── Catalogo.jsx / Catalogo.css
│   ├── Cursos.jsx / Cursos.css
│   ├── Livros.jsx / Livros.css
│   ├── Oraculos.jsx / Oraculos.css
│   ├── Home.jsx / Home.css
│   └── catalogo_blackweek.jsx
├── styles/
│   ├── global.css
│   └── variables.css
├── App.jsx
└── main.jsx
```

## Como executar localmente

### Pré-requisitos

- Node.js 18 ou superior
- npm

### Instalação

```bash
git clone https://github.com/SkYantS28/site_cartascomsky_.git
cd site_cartascomsky_
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Build de produção

```bash
npm run build
```

Os arquivos de produção serão gerados no diretório `dist/`.

### Visualizar o build localmente

```bash
npm run preview
```

## Implantação

O repositório possui workflow do GitHub Actions para build e implantação no **Azure Static Web Apps**:

- Push na branch `main`
- Pull requests destinadas à branch `main`
- Diretório de saída configurado como `dist`

O deploy depende da variável protegida `AZURE_STATIC_WEB_APPS_API_TOKEN`, configurada nos secrets do repositório.

## Aprendizados demonstrados

Este projeto evidencia conhecimentos relacionados a:

- Desenvolvimento de interfaces com React
- Organização de componentes reutilizáveis
- Configuração de rotas em uma SPA
- Separação entre apresentação, dados e estilos
- Uso de CSS responsivo e variáveis visuais
- Integração com links externos e WhatsApp
- Configuração de build com Vite
- Estruturação de um projeto para entrega acadêmica
- Publicação automatizada com GitHub Actions

## Personalização

### Dados do catálogo

Edite os arquivos da pasta `src/data/` para alterar produtos, serviços e informações exibidas.

### WhatsApp

O número e a mensagem padrão são configurados em `src/pages/Agendamento.jsx`:

```javascript
const whatsappNumber = "5521978757381";
```

### Estilo

As principais cores, espaçamentos e efeitos visuais podem ser ajustados em `src/styles/variables.css`.

## Autor

Projeto desenvolvido por **Sky Crizosti**.

## Licença

Todos os direitos sobre identidade visual, textos e materiais autorais pertencem a Cartas com Sky.
