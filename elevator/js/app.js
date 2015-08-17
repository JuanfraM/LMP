"use strict";

var app= angular.module('desachate', ['ngRoute','controladores']);
 
// Declared route 
app.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/evento', {
	        templateUrl: 'paginas/evento.html',
	        controller: 'evento'
	    })
		.when('/programa', {
	        templateUrl: 'paginas/programa.html',
	        controller: 'programa'
	    })
	    .when('/fotos', {
	        templateUrl: 'paginas/fotos.html',
	        controller: 'fotos'
	    })
	    .when('/invitados', {
	        templateUrl: 'paginas/invitados.html',
	        controller: 'invitados'
	    })
	    .when('/contacto', {
	        templateUrl: 'paginas/contacto.html',
	        controller: 'contacto'
	    })
		.otherwise({
			templateUrl: 'paginas/home.html',
			controller: "home"
		});
}]);