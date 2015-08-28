/**
 * Created by dxs on 2015-08-28.
 */




angular.module("index").controller("tabsCtrl", ['$scope','$ionicTabsDelegate',
    function ($scope, $ionicTabsDelegate) {
        $scope.selectTabWithIndex = function(index) {
            $ionicTabsDelegate.select(index);
        }
    }]);