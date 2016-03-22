angular.module('app')
    .controller('LoginController', function ($scope, $http) {
        $scope.login = function (user) {
            user.grant_type = 'password';
            return $http({
                method: 'POST',
                url: 'http://www.cheapwatcher.com/api/Authenticate',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {
                    user: user
                }
            }).success(function (result) {
                console.log(result);
            }).error(function (result) {
                console.log(result);
                });
            console.log(user.username);
            console.log(user.password);
            console.log(user.grant_type);
        };  
});