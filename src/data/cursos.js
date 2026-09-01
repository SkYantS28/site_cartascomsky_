const img = (path) => `${import.meta.env.BASE_URL}${path}`;

export const cursos = [
  {
    titulo: "Cursos Athena",
    instrutor: "Athena",
    plataforma: "Hotmart",
    link: "https://athenacursos.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAUDvqZwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp_orkIy6BN81KmBBgCOPboadk0YLMFaxnvMgoy-zKVpsZOzFCu_mWcrplhxJ_aem_qz91WVgftUsiAT03u8H8jA#cursos",
    imagem: img("images/cursos/curso_athena.png"),
  },

  {
    titulo: "Curso Baralho Cigano",
    instrutor: "Debyday Gipsy",
    plataforma: "Online",
    link: "https://www.debydaygipsy.com/curso-baralho-cigano-t20",
    imagem: img("images/cursos/CursoBaralhoCigano_debyday_gipsy.avif"),
  },

  {
    titulo: "Curso Baralho Cigano",
    instrutor: "Phelippe Pereira Colle",
    plataforma: "Hotmart",
    link: "https://hotmart.com/pt-br/marketplace/produtos/baralho-cigano-lenormand-curso/L11292913Y",
    imagem: img("images/cursos/curso_baralho_cigano_phelippe_pereira_colle.webp"),
  },

  {
    titulo: "Escola Cartomancia",
    instrutor: "Letícia Etcheverry Almeida da Silva",
    plataforma: "Online",
    link: "https://www.instagram.com/escoladacartomancia/",
    imagem: img("images/cursos/escola_cartomancia_curso.jpg"),
  },

  {
    titulo: "Curso Baralho Cigano",
    instrutor: "Lana Regina",
    plataforma: "Hotmart",
    link: "https://hotmart.com/pt-br/marketplace/produtos/bco/I25877736H",
    imagem: img("images/cursos/lana_regina_curso_baralho_cigano.webp"),
  },

  {
    titulo: "Mini Curso/Aulão",
    instrutor: "Vivian Lenormand",
    plataforma: "Online",
    link: "https://www.portalvivian.com/",
    imagem: img("images/cursos/vivian_lenormand_curso.webp"),
  },
];
