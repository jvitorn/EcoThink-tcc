angular.module('ecothink').controller('CadastroController',function($scope,$http){
    $scope.usuario = {};
    $scope.mensagem = '';
    console.log('entrou no controller de cadastro');
    console.log($scope.usuario);
    $scope.submeter = function(){
        //se existir um formulario valido
        if($scope.formulario.$valid){

            $http.post('/usuario',$scope.usuario)
            .success(function(){
                $scope.usuario = {};
                $scope.mensagem ='foto cadastrada com sucesso';
                //futuramente redirecionar o usuario para se logar
            })
            .error(function(error){
                console.error(error);
                $scope.mensagem = 'Não Foi Possivel se cadastrar,favor tente novamente';
            });
        }

    }
});