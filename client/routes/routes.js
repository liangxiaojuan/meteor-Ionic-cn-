/**
 * Created by dxs on 2015-06-19.
 * 全局路由
 */

angular.module("myGlobal").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider){
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise("/home");
        }]
);