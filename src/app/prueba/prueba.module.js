angular.module('prueba', ['subPrueba', 'componentePadre'])
.run($log => {
  $log.log('Ejecutando prueba');
});
angular.module('componentePadre', [])
.component('componentePadre', {
  template() {
    return ['<h1> Soy Componente Padre </h1>',
      '<input ng-model="busqueda" placeholder="Busqueda">',
      '<input ng-model="limite" placeholder="Limite">',
      '<input ng-model="$ctrl.padreExcluir" placeholder="Excluir">',
      '<componente-hijo atributo-hijo="busqueda" limite="limite"></componente-hijo>'
    ].join('');
  },
  controller: controladorPadre,
  bindings: {
    atrString: '@'
  }
}).run($log => {
  $log.log('Ejecutando componente padre');
});

function controladorPadre(excluir) {
  const vm = this;
  vm.padreExcluir = excluir;
  excluir = vm.padreExcluir;
}
