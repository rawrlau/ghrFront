angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', routesConfig]);

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  // indico al pantalla por defecto al iniciar
  $urlRouterProvider.when('/', '/dashboard');
  $urlRouterProvider.otherwise('/dashboard');
  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('app.solicitudesDashboard', {
      url: 'dashboard',
      template: '<ghr-solicitudes-dashboard>Loading..</ghr-solicitudes-dashboard>',
      controller: function ($log) {
        $log.log('');
      }
    })
    .state('app.candidatos', {
      url: 'candidatos',
      template: '<ghr-candidatos-list>Loading..</ghr-candidatos-list>',
      controller: function ($log) {
        $log.log('');
      }
    })
    .state('app.candidatos-perfil', {
      url: 'candidatos/:id',
      params: {
        mode: 'view'
      },
      template: '<ghr-candidatos>Loading..</ghr-candidatos>',
      controller: function ($log, $stateParams) {
        $log.log('');
      }
    })
    .state('app.tecnologias', {
      url: 'tecnologias',
      template: '<ghr-tecnologias-list>Hola tecnologias</ghr-tecnologias-list>',
      controller: function ($log) {
        $log.log('');
      }
    })
    .state('app.tecnologiasDetalle', {
      url: 'tecnologias/:id/',
      params: {
        mode: 'view'
      },
      controller: function ($stateParams) {},
      template: '<ghr-tecnologias>Loading..</ghr-tecnologias>'
    })
    .state('app.solicitudes', {
      url: 'solicitudes',
      template: '<ghr-solicitudes-list>Loading..</ghr-solicitudes-list>',
      params: {
        mode: 'view'
      },
      controller: function ($log) {
        $log.log('');
      }
    })
    .state('app.solicitudesForm', {
      url: 'solicitudes/:id',
      template: '<ghr-solicitudes-form>Loading..</ghr-solicitudes-form>',
      params: {
        mode: 'view'
      },
      controller: function ($log, $stateParams) {
        $log.log($stateParams.id);
        angular.isDefined($stateParams.id);
      }
    });
}
