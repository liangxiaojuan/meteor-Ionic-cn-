/**
 * Created by dxs on 2015-08-28.
 */


angular.module("index").controller("contentCtrl", ['$scope','$http',
    function ($scope ,$http) {

        $scope.items = [1, 2, 3];
        $scope.doRefresh = function () {
            $http.get('/new-items')
                .success(function(newItems) {
                    $scope.items.push( $scope.items.length+1);
                })
                .finally(function () {
                    // Stop the ion-refresher from spinning
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };
    }
]);
