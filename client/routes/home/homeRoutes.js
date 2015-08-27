/**
 * Created by dxs on 2015-08-27.
 */


angular.module("index").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider){
            $locationProvider.html5Mode(true);

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'client/views/home.ng.html',
                    controller: 'homeIndexCtrl'
                    /* resolve: {
                     'subscribe': [
                     '$meteor', function($meteor) {
                     return $meteor.subscribe('firstGoodsClass');
                     }
                     ]
                     }*/
                })


        }]
);
