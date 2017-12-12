var app = angular.module('angularTravel', []);
app.controller('tableDataAddCtrl', function($scope, $http) {
    $scope.getData=[
	{id:1, date:"01 ธ.ค. 60", locationstart:"CSI", locationend:"เดอะมอลล์งามวงศ์วาน", vehicle:"ขนส่งสาธารณะ", cost:10, taxinvoice:"asdfasd56464ads234a", reason:"พรีเซ้นงาน"},
	{id:2, date:"01 ธ.ค. 60", locationstart:"เดอะมอลล์งามวงศ์วาน", locationend:"Panyapiwat", vehicle:"ขนส่งสาธารณะ", cost:25, taxinvoice:"ada34fw232d232d3", reason:"พรีเซ้นงาน"},
	{id:3, date:"01 ธ.ค. 60", locationstart:"Panyapiwat", locationend:"เดอะมอลล์งามวงศ์วาน", vehicle:"ขนส่งสาธารณะ", cost:25, taxinvoice:"ada34fw2322122d3", reason:"พรีเซ้นงาน"},
	{id:4, date:"01 ธ.ค. 60", locationstart:"เดอะมอลล์งามวงศ์วาน", locationend:"CSI", vehicle:"ขนส่งสาธารณะ", cost:10, taxinvoice:"asdfasd56464asfqw323", reason:"พรีเซ้นงาน"},
	{id:5, date:"02 ธ.ค. 60", locationstart:"CSI", locationend:"panyapiwat", vehicle:"bus", cost:50, distance:10, rate:5, other:"add fuel", othercost:100, taxinvoice:"asdfasd56464ads234a", reason:"meeting"},
	{id:6, date:"03 ธ.ค. 60", locationstart:"CSI", locationend:"มหิดล", vehicle:"bus", cost:50, distance:10, rate:5, other:"add fuel", othercost:100, taxinvoice:"asdfasd56464ads234a", reason:"meeting"},
	{id:7, date:"04 ธ.ค. 60", locationstart:"CSI", locationend:"ปากเกร็ด", vehicle:"bus", cost:50, distance:10, rate:5, other:"add fuel", othercost:100, taxinvoice:"asdfasd56464ads234a", reason:"meeting"},
	{id:8, date:"05 ธ.ค. 60", locationstart:"CSI", locationend:"พระนครเหนือ", vehicle:"bus", cost:50, distance:10, rate:5, other:"add fuel", othercost:100, taxinvoice:"asdfasd56464ads234a", reason:"meeting"},
	{id:9, date:"06 ธ.ค. 60", locationstart:"CSI", locationend:"รังสิต", vehicle:"bus", cost:50, distance:10, rate:5, other:"add fuel", othercost:100, taxinvoice:"asdfasd56464ads234a", reason:"meeting"},
	{id:10, date:"07 ธ.ค. 60", locationstart:"CSI", locationend:"สวนสัตว์ดุสิต", vehicle:"bus", cost:50, distance:10, rate:5, other:"add fuel", othercost:100, taxinvoice:"asdfasd56464ads234a", reason:"meeting"},
	{id:11, date:"08 ธ.ค. 60", locationstart:"CSI", locationend:"เมืองทอง", vehicle:"bus", cost:50, distance:10, rate:5, other:"add fuel", othercost:100, taxinvoice:"asdfasd56464ads234a", reason:"meeting"},
	{id:12, date:"09 ธ.ค. 60", locationstart:"CSI", locationend:"จตุจักร", vehicle:"bus", cost:50, distance:10, rate:5, other:"add fuel", othercost:100, taxinvoice:"asdfasd56464ads234a", reason:"meeting"}
	]
	console.log($scope.getData);
});
