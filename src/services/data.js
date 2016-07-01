angular.module('fireStarter')

  .service("dataService", function($firebaseArray) {

    var ref = firebase.database().ref();
    var list = $firebaseArray(ref);

    this.getTodos = function() {
      return list;
    };

    this.addTodo = function() {
      list.$add({name: 'New todo item', completed: false});
    };

    this.deleteTodo = function(todo) {
      list.$remove(todo);
    };

    this.saveTodo = function(todo) {
      list.$save(todo);
    };

  });
