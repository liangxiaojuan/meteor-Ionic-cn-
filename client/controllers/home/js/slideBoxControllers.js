/**
 * Created by dxs on 2015-08-28.
 */



angular.module("index").controller("slideBoxCtrl", ['$scope','$ionicSlideBoxDelegate',
    function ($scope, $ionicSlideBoxDelegate) {
        $scope.slideHasChanged = function() {
            $ionicSlideBoxDelegate.next();
        };
    }]);