angular.module('ecothink',['ngRoute','ngAnimate'])
.config(function($routeProvider,$locationProvider){
        //habilidando modo de html
        $locationProvider.html5Mode(true);
        //rotas do angularJs        
        $routeProvider.when('/',{
            //pagina que sera carregada
            templateUrl:'partials/home.html',
            //controller da pagina 
            controller:'IndexController'
        });
        $routeProvider.when('/cadastro',{
            templateUrl:'partials/cadastro.html',
            controller:'CadastroController'

        });
        $routeProvider.when('/perfil',{
            templateUrl:'partials/perfil.html',
            controller:'TestController'
        });
        $routeProvider.when('/login',{
            templateUrl:'partials/login.html',
            controller:'IndexController'
        });
        $routeProvider.when('/calendario',{
            templateUrl:'partials/calendario.html',
            controller:'CalendarioController'
        })
        //obrigando o usuario a ser redirecionado para '/'
        $routeProvider.otherwise({redirectTo: '/'});
});