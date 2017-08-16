/**
 * Created by 小虎Oni on 2016/5/19.
 */
'use strict';

// 这里使用的app.controller其实是使用了$controllerProvider.register
app.controller('AccountCtrl', ['$scope',function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}]);
