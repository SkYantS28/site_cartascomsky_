# Cartas com Sky - Website

Um website moderno para leituras de tarot e oráculo, desenvolvido com React 18, Vite e Tailwind CSS.

## Instalação

1. Clone o repositório ou extraia os arquivos
2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── StarBackground.jsx & StarBackground.css
│   └── MethodCard.jsx
├── pages/
│   ├── Home.jsx & Home.css
│   ├── Catalogo.jsx & Catalogo.css
│   ├── Livros.jsx & Livros.css
│   ├── Oraculos.jsx & Oraculos.css
│   └── Agendamento.jsx & Agendamento.css
├── data/
│   ├── catalogo.js
│   ├── livros.js
│   └── oraculos.js
├── styles/
│   ├── variables.css (cores e tokens)
│   ├── global.css (reset e tipografia)
│   └── animations.css (animações)
├── App.jsx (router principal)
└── main.jsx (entry point)
```

## Customizações

### Adicionar sua foto

1. Coloque a imagem em `public/images/sky.jpg`
2. A foto será automaticamente exibida na home page

### Adicionar imagens dos livros

1. Crie a pasta `public/images/livros/`
2. Adicione as imagens: `livro-1.jpg`, `livro-2.jpg`, etc.

### Adicionar imagens dos oráculos

1. Crie a pasta `public/images/oraculos/`
2. Adicione as imagens: `oraculo-1.jpg`, `oraculo-2.jpg`, etc.

### Alterar dados do catálogo

Edite `src/data/catalogo.js` para:
- Adicionar/remover métodos
- Alterar preços
- Modificar descrições
- Adicionar/remover planos

### Alterar WhatsApp

Abra `src/pages/Agendamento.jsx` e altere:

```javascript
const whatsappNumber = "5521978757381";
```

### Alterar cores

Edite `src/styles/variables.css` para personalizar o esquema de cores.

## Tecnologias

- **React 18.3.1** - UI library
- **React Router DOM 6.28.0** - Routing
- **Vite 5.4.2** - Build tool
- **CSS Custom Properties** - Styling

## Fontes

- **Cormorant Garamond** - Headings (serif)
- **Montserrat** - Body text e UI (sans-serif)

Importadas via Google Fonts.

## Estrutura de Cores

- Primária: `--pink` (#e83f91)
- Secundária: `--roxo` (#6b3fa0), `--roxo-escuro` (#45256b)
- Backgrounds: `--lilas-fundo` (#faf7ff), `--lilas-claro` (#f1e9ff)
- Texto: `--texto` (#493b52), `--texto-claro` (#75677d)
- Sombra: `--sombra` (0 10px 30px rgba(107, 63, 160, 0.10))

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build produção

## Licença

Todos os direitos reservados a Cartas com Sky.
