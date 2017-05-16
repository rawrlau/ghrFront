angular.module('formExample', [])
.component('exampleComponent', {
  templateUrl: 'app/formularioSolicitudes/form.solicitudes.html',
  controller: solicitudesController
});

function solicitudesController() {
  const vm = this;
  vm.master = {};

  vm.update = function (solicitud) {
    vm.master = angular.copy(solicitud);
  };

  vm.reset = function (form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    vm.solicitud = angular.copy(vm.master);
  };
  vm.reset();
}
