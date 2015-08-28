/**
 * Created by dxs on 2015-08-28.
 */


angular.module("index").controller("scrollCtrl", ['$scope','$ionicScrollDelegate',
    function ($scope,$ionicScrollDelegate) {

        $scope.scrollMainToTop = function() {
            $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
        };
        $scope.scrollSmallToTop = function() {
            $ionicScrollDelegate.$getByHandle('small').scrollTop();
        };
    }]);