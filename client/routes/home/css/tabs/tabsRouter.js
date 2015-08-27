/**
 * Created by dxs on 2015-08-27.
 */

angular.module("index").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider){
            $locationProvider.html5Mode(true);


            $stateProvider

                .state('tabs', {
                    url: '/home/css/tabs',
                    templateUrl: 'client/views/css/tabs/tabs.ng.html',
                    controller: ''

                })

                .state('tab', {
                    url: '/home/css/tabs/tab',
                    templateUrl: 'client/views/css/tabs/tab.ng.html',
                    controller: ''

                })
                .state('tabIcon', {
                    url: '/home/css/tabs/tabIcon',
                    templateUrl: 'client/views/css/tabs/tabIcon.ng.html',
                    controller: ''

                })

                .state('tabTopIcon', {
                    url: '/home/css/tabs/tabTopIcon',
                    templateUrl: 'client/views/css/tabs/tabTopIcon.ng.html',
                    controller: ''

                })

                .state('tabLeftIcon', {
                    url: '/home/css/tabs/tabLeftIcon',
                    templateUrl: 'client/views/css/tabs/tabLeftIcon.ng.html',
                    controller: ''

                })

                .state('tabStriped', {
                    url: '/home/css/tabs/tabStriped',
                    templateUrl: 'client/views/css/tabs/tabStriped.ng.html',
                    controller: ''

                })

        }]
);
