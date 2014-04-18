var myApp = angular.module('myApp', []);

myApp.filter('reverse', function() {
	return function (text) {
		return text.split("").reverse().join("");
	}
})

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
		$scope.data.secMessage = "Default text after click!";
	};
	$scope.reverseMessage = function (message) {
		return message.split("").reverse().join("");
	};
}

function SecondCtrl ($scope) {
	$scope.cities = [
		'Warszawa',
		'Szczecin',
		'Wrocław',
		'Poznań',
		'Gdańsk',
		'Gdynia',
		'Sopot',
		'Kraków'
	];
	$scope.citiesJson = [
		{
			city: "Warszawa",
			president: "Jan Nowak"
		},
		{
			city: "Kraków",
			president: "Adam Małysz"
		},
		{
			city: "Łódź",
			president: "Jane Ahonen"
		},
		{
			city: "Wrocław",
			president: "Jan Mateja"
		},
		{
			city: "Poznań",
			president: "Hanawald"
		},
		{
			city: "Gdańsk",
			president: "Wojciech Skupień"
		},
		{
			city: "Gdynia",
			president: "Łukasz Kruczek"
		},
		{
			city: "Sopot",
			president: "Robert Mateja"
		}
	];
};

