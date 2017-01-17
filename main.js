var highwayapp =  angular.module('highWays',['ngRoute'])

highwayapp.config(($routeProvider,$locationProvider)=>{
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/RT51', {
                controller: 'Rt51Ctrl',
                templateUrl: 'partial/route51.html'
        })
        .when('/RT66',{
            controller: 'Rt66Ctrl',
            templateUrl:'partial/route66.html'
        })
        .otherwise({redirectTo:'/'});
})

highwayapp.controller('Rt51Ctrl', function($scope){
    $scope.road = "RT 51"
    $scope.info = "long highway through Illinois"
})

highwayapp.controller('Rt66Ctrl', function($scope){
    $scope.road = "RT 66"
    $scope.info = "Historical highway through America"
})
