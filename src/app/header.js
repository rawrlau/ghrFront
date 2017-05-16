angular
  .module('app')
  .component('ghrHeader', {
    templateUrl: 'app/header.html',
    bindings: {
      title: '@'
    },
    controller() {
      const vm = this;
      vm.$onInit = function () {
        vm.myTitle = vm.title.toUpperCase();
      };
    }
  });
