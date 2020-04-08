angular.module('ecothink').controller('IndexController',function($scope,$http){
    console.log('entrou no controller index');
    const cor = document.getElementById('cor');
    cor.classList.add('bg-success');
});