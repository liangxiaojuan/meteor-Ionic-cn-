/**
 * Created by dxs on 2015-08-27.
 */

angular.module("index").controller("headerIndexCtrl", ['$scope', '$stateParams', '$meteor', '$rootScope', '$state',
    function ($scope, $stateParams, $meteor, $rootScope,  $state) {

        $scope.headers=[
            {name:'light',color:'(白色)'},
            {name:'stable',color:'(灰色)'},
            {name:'positive',color:'(深蓝)'},
            {name:'calm',color:'(浅蓝)'},
            {name:'balanced',color:'(浅绿)'},
            {name:'energized',color:'(黄色)'},
            {name:'assertive',color:'(红色)'},
            {name:'royal',color:'(紫色)'},
            {name:'dark',color:'(黑色)'}

        ];

    }
]);
