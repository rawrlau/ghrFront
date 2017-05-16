angular
  .module('app')
  .component('ghrCandidatos', {
    templateUrl: 'app/candidatos/candidatos.template.html',
    controller: CandidatosController
  });
function CandidatosController($http) {
  // http://localhost:8080/gehr_mult_web_gestionhrapi_01/services/rest/CandidatosServiceREST/candidatos/list
  // avatares https://api.adorable.io/avatars/80/1
  const vm = this;
//   vm.lerdo = {
//     expectContractual:
// 'Encontrar el anillo',
//     expectEconomica:
// 2,
//     feedbackSourcing:
// 'FS',
//     idCandidato:
// 111,
//     nombre:
// 'Manuel',
//     perfil:
// 'Hobbit',
//     provincia:
// 'Misty Mountain',
//     tecnicoSeleccion:
// 'TS'};
  $http
    .get('http://localhost:8080/gehr_mult_web_gestionhrapi_01/services/rest/CandidatosServiceREST/candidatos/list')
    .then(response => {
      vm.candidatos = response.data['ns1.candidatos'];
    });
}
