var myApp = angular.module('myApp', []);

function FirstCtrl ($scope) {
	$scope.data = {
		message: "def Piotr",
		testVar: "additional string"
	};
	$scope.name = "Janusz";
	$scope.sayHelloWorld = function () {
		$scope.data = {
			message: "Andrzej",
			testVar: "changed additional string"
		}
	};
	$scope.reverseMessage = function (message) {
		return message.split("").reverse().join("");
	};
}

