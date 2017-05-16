angular.module('subPrueba', [])
.run($log => {
  $log.log('Ejecutando subPrueba');
}
).value('excluir', 'Karma')
.component('componenteHijo', {
  // template() {
  //   return ['<h1> Soy el Componente Hijo </h1>',
  //     '<h2>Atributo: {{$ctrl.atrString}}</h2>'
  //   ].join('');
  // },
  templateUrl: 'app/subPrueba/prueba.template.html',
  bindings: {
    atrString: '<atributoHijo',
    limite: '<limite'
  },
  controller: tecnologiasObj
});

function tecnologiasObj($filter, excluir) {
  const vm = this;
  vm.arrayTecnologias = [
    {
      key: 'gulp',
      title: 'Gulp',
      logo: 'http://fountainjs.io/assets/imgs/gulp.png',
      text1: 'The streaming build system',
      text2: 'Automate and enhance your workflow'
    },
    {
      key: 'angular1',
      title: 'Angular 1',
      logo: 'http://fountainjs.io/assets/imgs/angular1.png',
      text1: 'HTML enhanced for web apps!',
      text2: 'AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.'
    },
    {
      key: 'browsersync',
      title: 'Browsersync',
      logo: 'http://fountainjs.io/assets/imgs/browsersync.png',
      text1: 'Time-saving synchronised browser testing',
      text2: 'It’s wicked-fast and totally free'
    },
    {
      key: 'scss',
      title: 'Sass',
      logo: 'http://fountainjs.io/assets/imgs/sass.png',
      text1: 'Syntactically Awesome Style Sheets.',
      text2: 'CSS with superpowers.'
    },
    {
      key: 'babel',
      title: 'Babel',
      logo: 'http://fountainjs.io/assets/imgs/babel.png',
      text1: 'Babel is a JavaScript compiler',
      text2: 'Use next generation JavaScript, today'
    },
    {
      key: 'eslint',
      title: 'ESLint',
      logo: 'http://fountainjs.io/assets/imgs/eslint.png',
      text1: 'The pluggable linting utility for JavaScript and JSX.',
      text2: '1 tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.'
    },
    {
      key: 'karma',
      title: 'Karma',
      logo: 'http://fountainjs.io/assets/imgs/karma.png',
      text1: 'Spectacular Test Runner for JavaScript',
      text2: 'Things should be simple. We believe in testing and so we want to make it as simple as possible'
    },
    {
      key: 'inject',
      title: 'Inject & Bower',
      logo: 'http://fountainjs.io/assets/imgs/bower.png',
      text1: 'Automatically inject scripts and styles tags in your HTML.',
      text2: 'Use Bower, a package manager for the web.'
    }
  ];
  const noKarma = $filter('filter')(vm.arrayTecnologias, {title: '!' + excluir});
  vm.filtro = noKarma;
}
