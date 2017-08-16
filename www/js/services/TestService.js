'use strict';
app.factory('TestService', ["$http","$q",function ($http,$q) {
  var service = {};
  service.getData = function(gameId) {
    var deferred = $q.defer();
    var url = "http://m?id="+gameId;
    url+="&callback=JSON_CALLBACK";
    $http.jsonp(url).success(function (data) {
      //业务处理
      deferred.resolve(data);
    }).error(function (error) {
      //业务处理
      deferred.reject(error)
    })
    return deferred.promise;
  }

  return service;
}])
