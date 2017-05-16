angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'ghrApp'
    })
    .state('app.candidatos', {
      url: 'candidatos',
      template: '<ghr-candidatos>Loading...</ghr-candidatos>',
      controller($log) {
        $log.log('');
      }
    })
    .state('app.tecnologias', {
      url: 'tecnologias',
      template: '<H1>Hola tecnologias</H1>',
      controller($log) {
        $log.log('');
      }
    })
      .state('app.solicitudes', {
        url: 'solicitudes',
        template: '<component-solicitudes>Hola solicitudes</component-solicitudes>',
        controller($log) { // controller : function($log)
          $log.log('');
        }
      });
}

/* .state('app.hijo', {
url: 'hijo/:id',
template: '<h1>Hola soy el hijo</h1>'
controller: function($log, $stateParams) {
  $log.log('Parametros del estado', $stateParams)
}
}) */
