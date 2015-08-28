/**
 * Created by dxs on 2015-08-27.
 */


angular.module("index").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider){
            $locationProvider.html5Mode(true);


            $stateProvider
                .state('js', {
                    url: '/home/js',
                    templateUrl: 'client/views/js/js.ng.html',
                    controller: 'jsIndexCtrl'

                })
                .state('actionSheet', {
                    url: '/home/js/actionSheet',
                    templateUrl: 'client/views/js/action/actionSheet.ng.html',
                    controller: 'actionSheetCtrl'

                })
                .state('backdrop', {
                    url: '/home/js/backdrop',
                    templateUrl: 'client/views/js/backdrop/backdrop.ng.html',
                    controller: 'backdropCtrl'

                })
                .state('contents', {
                    url: '/home/js/contents',
                    templateUrl: 'client/views/js/content/content.ng.html',
                    controller: 'contentCtrl'

                })
                .state('Lists', {
                    url: '/home/js/Lists',
                    templateUrl: 'client/views/js/lists/lists.ng.html',
                    controller: 'ListsCtrl'

                })
                .state('loading', {
                    url: '/home/js/loading',
                    templateUrl: 'client/views/js/loading/loading.ng.html',
                    controller: 'loadingCtrl'

                })
                .state('modal', {
                    url: '/home/js/modal',
                    templateUrl: 'client/views/js/modal/modal.ng.html',
                    controller: 'modalCtrl'

                })
                .state('popover', {
                    url: '/home/js/popover',
                    templateUrl: 'client/views/js/popover/popover.ng.html',
                    controller: 'popoverCtrl'

                })
                .state('popup', {
                    url: '/home/js/popup',
                    templateUrl: 'client/views/js/popup/popup.ng.html',
                    controller: 'popupCtrl'

                })
                .state('scroll', {
                    url: '/home/js/scroll',
                    templateUrl: 'client/views/js/scroll/scroll.ng.html',
                    controller: 'scrollCtrl'

                })
                .state('sideMenus', {
                    url: '/home/js/sideMenus',
                    templateUrl: 'client/views/js/sideMenus/sideMenus.ng.html',
                    controller: 'sideMenusCtrl'
                })

                .state('slideBox', {
                    url: '/home/js/slideBox',
                    templateUrl: 'client/views/js/slideBox/slideBox.ng.html',
                    controller: 'slideBoxCtrl'

                })
                .state('Tabs', {
                    url: '/home/js/Tabs',
                    templateUrl: 'client/views/js/Tabs/Tabs.ng.html',
                    controller: 'tabsCtrl'

                })



        }]
);
