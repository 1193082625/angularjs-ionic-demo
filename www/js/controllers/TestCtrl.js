"use strict";

app.controller('TestCtrl',["$scope", "$stateParams", "$rootScope", "TestService",function ($scope, $stateParams, $rootScope, TestService) {
  // TestServer.getData($stateParams.gameId).then(function (data) {
  //   $scope.chat = data;
  // }, function (error) {
  //   console.log(error)
  // });
  $rootScope.$broadcast('loading:show');

  setTimeout(function () {
    $rootScope.$broadcast('loading:hide');
  },3000);
  console.log($stateParams.Id);
  $scope.data = {
    id: $stateParams.Id
  }
}])
