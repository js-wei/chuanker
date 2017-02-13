var app = angular.module('myApp', []);

app.controller('newsCtrl', function($scope,$http) {
    $http.jsonp('http://iboke.com/index/publish/get_colunm.json?callback=JSON_CALLBACK').then(function(data){
    	
    });
});