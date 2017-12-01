var app = angular.module('angularTravel', []);
app.controller('tableDataAddCtrl', function($scope, $http) {
    $scope.getData=[
	{id:1, date:"01 ธ.ค. 60", locationstart:"CSI", locationend:"panyapiwat", vehicle:"bus", cost:50, distance:13, rate:5, other:"add fuel", othercost:100, taxinvoice:"asdfasd56464ads234a", reason:"meeting"},
	{id:2, date:"01 ธ.ค. 60", locationstart:"CSI", locationend:"panyapiwat", vehicle:"bus", cost:50, distance:13, rate:5, other:"add fuel", othercost:100, taxinvoice:"asdfasd56464ads234a", reason:"meeting"},
	{id:3, date:"01 ธ.ค. 60", locationstart:"CSI", locationend:"panyapiwat", vehicle:"bus", cost:50, distance:13, rate:5, other:"add fuel", othercost:100, taxinvoice:"asdfasd56464ads234a", reason:"meeting"}
	]
});