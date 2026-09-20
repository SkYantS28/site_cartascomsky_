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
    titulo: "Mini Curso/Aulão",
    instrutor: "Vivian Lenormand",
    plataforma: "Online",
    link: "https://www.portalvivian.com/",
    imagem: img("images/cursos/vivian_lenormand_curso.webp"),
  },
];
