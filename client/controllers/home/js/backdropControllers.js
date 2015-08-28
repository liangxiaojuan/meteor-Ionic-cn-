
/**
 * Created by dxs on 2015-08-28.
 */

angular.module("index").controller("backdropCtrl", ['$scope','$ionicBackdrop','$timeout',
    function ($scope , $ionicBackdrop, $timeout) {


            $scope.action = function () {
                $ionicBackdrop.retain();
                $timeout(function () {
                    $ionicBackdrop.release();
                }, 1000);
            };

        $scope.actionone = function () {
            $ionicBackdrop.retain();
            $timeout(function () {
                $ionicBackdrop.release();
            }, 2000);
        };
        $scope.actiontwo = function () {
            $ionicBackdrop.retain();
            $timeout(function () {
                $ionicBackdrop.release();
            }, 3000);
        };
    }
]);
