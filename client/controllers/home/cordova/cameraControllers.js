/**
 * Created by dxs on 2015-08-28.
 */


angular.module("index").controller("cordovaCtrl", ['$scope',
    function ($scope) {
        $scope.cordovas=[
            {id:'camera',name:'Aamera(照相机)'},
            {id:'socialsharing',name:'Socialsharing(分享)'},
            {id:'xxx',name:'cordova插件期待开发中..'},
        ];


    }
]);
