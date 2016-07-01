webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	angular.module("fireStarter", ["firebase"]);

	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// Initialize Firebase
	var config = {
	  apiKey: "AIzaSyCnupoDkAuj6lGsElxjvhJYt6tYNqsJiw8",
	  authDomain: "open-tab.firebaseapp.com",
	  databaseURL: "https://open-tab.firebaseio.com",
	  storageBucket: "open-tab.appspot.com",
	};
	firebase.initializeApp(config);


/***/ },
/* 2 */
/***/ function(module, exports) {

	angular.module('fireStarter')

	  .controller('mainCtrl', function($scope, dataService) {

	    $scope.todos = dataService.getTodos();

	    $scope.addTodo = dataService.addTodo;

	    $scope.deleteTodo = dataService.deleteTodo;

	    $scope.saveTodo = dataService.saveTodo;

	  });


/***/ },
/* 3 */
/***/ function(module, exports) {

	angular.module('fireStarter')

	  .directive('todos', function() {

	    return {
	      templateUrl: 'templates/todos.html',
	      controller: 'mainCtrl',
	      replace: true
	    };

	  });


/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ }
]);