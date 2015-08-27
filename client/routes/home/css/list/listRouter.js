/**
 * Created by dxs on 2015-08-27.
 */



angular.module("index").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider){
            $locationProvider.html5Mode(true);


            $stateProvider

                .state('lists', {
                    url: '/home/css/lists',
                    templateUrl: 'client/views/css/lists/lists.ng.html',
                    controller: ''

                })

                .state('list', {
                    url: '/home/css/lists/list',
                    templateUrl: 'client/views/css/lists/list.ng.html',
                    controller: ''

                })
                .state('listDividers', {
                    url: '/home/css/lists/listDividers',
                    templateUrl: 'client/views/css/lists/listDividers.ng.html',
                    controller: ''

                })

                .state('listIcons', {
                    url: '/home/css/lists/listIcons',
                    templateUrl: 'client/views/css/lists/listIcons.ng.html',
                    controller: ''

                })

                .state('listButtons', {
                    url: '/home/css/lists/listButtons',
                    templateUrl: 'client/views/css/lists/listButtons.ng.html',
                    controller: ''

                })

                .state('listAvatars', {
                    url: '/home/css/lists/listAvatars',
                    templateUrl: 'client/views/css/lists/listAvatars.ng.html',
                    controller: ''

                })

                .state('listThumbnails', {
                    url: '/home/css/lists/listThumbnails',
                    templateUrl: 'client/views/css/lists/listThumbnails.ng.html',
                    controller: ''

                })

                .state('listInset', {
                    url: '/home/css/lists/listInset',
                    templateUrl: 'client/views/css/lists/listInset.ng.html',
                    controller: ''

                })

        }]
);
