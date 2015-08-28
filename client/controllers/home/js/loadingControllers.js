/**
 * Created by dxs on 2015-08-28.
 */


angular.module("index").controller("loadingCtrl", ['$scope','$ionicLoading','$timeout',
    function ($scope,$ionicLoading,$timeout ) {

        $scope.show = function() {
            $ionicLoading.show({
                template: 'Loading...'
            });
            $timeout(function () {
                $ionicLoading.hide();
            }, 2000);
        };

    }]);