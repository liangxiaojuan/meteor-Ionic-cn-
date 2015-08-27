/**
 * Created by dxs on 2015-08-27.
 */


angular.module("index").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider){
            $locationProvider.html5Mode(true);


            $stateProvider
                .state('css', {
                    url: '/home/css',
                    templateUrl: 'client/views/css/css.ng.html',
                    controller: 'cssIndexCtrl'

                })
                .state('header', {
                    url: '/home/css/header',
                    templateUrl: 'client/views/css/header/header.ng.html',
                    controller: 'headerIndexCtrl'

                })
                .state('headerSort', {
                    url: '/home/css/header/:id',
                    templateUrl: 'client/views/css/header/headerSort.ng.html',
                    controller: 'headerSortIndexCtrl'

                })
                .state('footer', {
                    url: '/home/css/footer',
                    templateUrl: 'client/views/css/footer/footer.ng.html',
                    controller: 'footerIndexCtrl'

                })
                .state('footerSort', {
                    url: '/home/css/footer/:id',
                    templateUrl: 'client/views/css/footer/footerSort.ng.html',
                    controller: 'footerSortIndexCtrl'

                })
                .state('content', {
                    url: '/home/css/content',
                    templateUrl: 'client/views/css/content/content.ng.html',
                    controller: ''

                })
                .state('toggle', {
                    url: '/home/css/toggle',
                    templateUrl: 'client/views/css/toggle/toggle.ng.html',
                    controller: ''

                })
                .state('checkbox', {
                    url: '/home/css/checkbox',
                    templateUrl: 'client/views/css/checkbox/checkbox.ng.html',
                    controller: ''

                })
                .state('radio', {
                    url: '/home/css/radio',
                    templateUrl: 'client/views/css/radio/radio.ng.html',
                    controller: ''

                })
                .state('range', {
                    url: '/home/css/range',
                    templateUrl: 'client/views/css/range/range.ng.html',
                    controller: ''

                })
                .state('select', {
                    url: '/home/css/select',
                    templateUrl: 'client/views/css/select/select.ng.html',
                    controller: ''

                })


        }]
);
