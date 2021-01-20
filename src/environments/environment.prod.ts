export const environment = {
  production: true,

  // apiBase: 'https://localhost:44332/api',
  apiBase: "http://localhost/BeforeIDie/api",
  // apiBase: "http://localhost:8070",

  // Sonho
  listarSonhos: 'sonho',
  pegarSonho: 'sonho/',
  cadastrarSonho: 'sonho/novo-sonho',
  alterarSonho: 'sonho/alterar-sonho',
  deletarSonho: 'sonho',
  sonhoSonhador: 'sonho/sonhos-sonhador',
  sonhosPublicos: 'sonho/sonhos-visibilidade',

  // Sonhador
  listarSonhador: 'sonhador',
  pegarSonhador: 'sonhador',
  entrar: 'sonhador/entrar',
  registrar: 'sonhador/nova-conta',
  alterarConta: 'sonhador/alterar-conta',
  deletarSonhador: 'sonhador/',

  // Visibilidade
  listarVisibilidadeSonho: 'VisibilidadeVisibilidadeSonho',

  // Status
  listarStatus: 'StatusSonho',
};
