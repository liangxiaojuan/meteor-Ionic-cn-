/**
 * Created by dxs on 2015-08-28.
 */


angular.module("index").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider){
            $locationProvider.html5Mode(true);

            $stateProvider
                .state('cordova', {
                    url: '/home/cordova',
                    templateUrl: 'client/views/cordova/cordova.ng.html',
                    controller: 'cordovaCtrl'

                })
                .state('camera', {
                    url: '/home/cordova/camera',
                    templateUrl: 'client/views/cordova/camera/camera.ng.html',
                    controller: 'cameraCtrl'

                })
                .state('socialsharing', {
                     url: '/home/cordova/socialsharing',
                     templateUrl: 'client/views/cordova/socialsharing/socialsharing.ng.html',
                      controller: ''
                    })



        }]
);
