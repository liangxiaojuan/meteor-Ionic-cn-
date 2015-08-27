/**
 * Created by dxs on 2015-08-27.
 */
/**
 * Created by dxs on 2015-08-27.
 */

angular.module("index").controller("headerSortIndexCtrl", ['$scope', '$stateParams', '$meteor', '$rootScope', '$state',
    function ($scope, $stateParams, $meteor, $rootScope,  $state) {

        $scope.name=$stateParams.id;
    }
]);
