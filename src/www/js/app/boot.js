require.config({
  baseUrl: 'js',
  paths: {
    'es5-shim': '../components/es5-shim/es5-shim',
    '$': '../components/jquery/index',
    'jquery': '../components/jquery/index',
    'hammer': '../components/hammerjs/dist/jquery.hammer',
    'mout': '../components/mout/src',
    'dust': '../components/dustjs-linkedin/dist/dust-full-2.0.4',
    'dust-helpers': '../components/dustjs-linkedin-helpers/dist/dust-helpers-1.1.1',
    'rdust': '../components/require-dust/require-dust',
    'iScroll': '../components/iscroll/dist/iscroll-lite-min',
    'bootstrap': '../components/bootstrap/dist/js/bootstrap',
    'lavaca': '../components/lavaca/src'
  },
  shim: {
    $: {
      exports: '$'
    },
    jquery: {
      exports: '$'
    },
    hammer: {
      deps: ['$'],
      exports: 'Hammer'
    },
    dust: {
      exports: 'dust'
    },
    'dust-helpers': {
      deps: ['dust']
    },
    bootstrap: {
      deps: ['$']
    }
  }
});
require(['es5-shim']);
require(['app/app']);