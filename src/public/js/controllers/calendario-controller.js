angular.module('ecothink').controller('CalendarioController',function($scope,$http){
    console.log('entrou no controller calendario');
    const cor = document.getElementById('cor');
    const classe = document.getElementsByClassName('bg-success');
        if(classe){
            cor.classList.remove('bg-success');
        }
    $scope.today = new Date();
});