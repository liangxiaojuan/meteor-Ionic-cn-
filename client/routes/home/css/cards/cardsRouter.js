/**
 * Created by dxs on 2015-08-27.
 */
/**
 * Created by dxs on 2015-08-27.
 */



angular.module("index").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider){
            $locationProvider.html5Mode(true);


            $stateProvider

                .state('cards', {
                    url: '/home/css/cards',
                    templateUrl: 'client/views/css/cards/cards.ng.html',
                    controller: ''

                })

                .state('card', {
                    url: '/home/css/cards/list',
                    templateUrl: 'client/views/css/cards/card.ng.html',
                    controller: ''

                })
                .state('cardHF', {
                    url: '/home/css/cards/cardHF',
                    templateUrl: 'client/views/css/cards/cardHF.ng.html',
                    controller: ''

                })

                .state('cardList', {
                    url: '/home/css/cards/cardList',
                    templateUrl: 'client/views/css/cards/cardList.ng.html',
                    controller: ''

                })

                .state('cardImages', {
                    url: '/home/css/cards/cardImages',
                    templateUrl: 'client/views/css/cards/cardImages.ng.html',
                    controller: ''

                })

                .state('cardShowcase', {
                    url: '/home/css/cards/cardShowcase',
                    templateUrl: 'client/views/css/cards/cardShowcase.ng.html',
                    controller: ''

                })



        }]
);
