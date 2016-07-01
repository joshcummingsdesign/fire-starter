angular.module('fireStarter')

  .directive('todos', function() {

    return {
      templateUrl: 'views/todos.html',
      controller: 'mainCtrl',
      replace: true
    };

  });
