/**
 * Created by dxs on 2015-08-28.
 */


angular.module("index").controller("sideMenusCtrl", ['$scope','$ionicSideMenuDelegate',
    function ($scope,$ionicSideMenuDelegate) {
        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    }]);