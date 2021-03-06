angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', routesConfig]);

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('app.candidatos', {
      url: 'candidatos',
      template: '<ghr-candidatos-list>Loading..</ghr-candidatos-list>',
      controller: function ($log) {
        $log.log('');
      }
    })
    .state('app.contactos', {
      url: 'contactos',
      template: '<ghr-tecnologias-list>Hola tecnologias</ghr-tecnologias-list>',
      controller: function ($log) {
        $log.log('');
      }
    })
    .state('app.solicitudes', {
      url: 'solicitudes',
      template: '<ghr-solicitudes-list>Loading..</ghr-solicitudes-list>',
      controller: function ($log) {
        $log.log('');
      }
    });
}
