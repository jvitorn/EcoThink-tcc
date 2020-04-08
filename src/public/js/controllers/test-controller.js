angular.module('ecothink').controller('TestController',function($scope,$http){
    console.log('entrou no controller teste');
    const cor = document.getElementById('cor');
    const classe = document.getElementsByClassName('bg-success');
    if(classe){
        cor.classList.remove('bg-success');
    }
});