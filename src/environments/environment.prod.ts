// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
