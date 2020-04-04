angular.module('ecothink').controller('CadastroController',function($scope,$http,$location,$window){
    $scope.usuario = {};
    $scope.mensagem = '';
    console.log('entrou no controller de cadastro');
    console.log($scope.usuario);
    $scope.submeter = function(){
        //se existir um formulario valido
        if($scope.formulario.$valid){
            $http.post('/usuario',$scope.usuario,{headers:{'adress':'e8da82b2'}})
            .success(function(){
                console.log($scope.usuario.email);
                console.log($scope.usuario);
                $scope.usuario = {};
                $scope.mensagem ='usuario cadastrado com sucesso';
                $window.location.href = '/';
                //futuramente redirecionar o usuario para se logar
            })
            .error(function(error){
                console.error(error);
                $scope.mensagem = 'Não Foi Possivel se cadastrar,favor tente novamente';
            });
        
        }

    }
});