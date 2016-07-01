angular.module('fireStarter')

  .controller('mainCtrl', function($scope, dataService) {

    $scope.todos = dataService.getTodos();

    $scope.addTodo = dataService.addTodo;

    $scope.deleteTodo = dataService.deleteTodo;

    $scope.saveTodo = dataService.saveTodo;

  });
