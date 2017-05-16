angular
  .module('app')
  .component('ghrCandidato', {
    templateUrl: 'app/candidato/candidato.template.html',
    bindings: {
      datos: '<datos'
    }
  });
