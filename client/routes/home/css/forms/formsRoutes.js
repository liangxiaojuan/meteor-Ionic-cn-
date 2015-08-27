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

                .state('forms', {
                    url: '/home/css/forms',
                    templateUrl: 'client/views/css/forms/forms.ng.html',
                    controller: ''

                })

                .state('form', {
                    url: '/home/css/forms/form',
                    templateUrl: 'client/views/css/forms/form.ng.html',
                    controller: ''

                })
                .state('formPlaceholder', {
                    url: '/home/css/forms/formPlaceholder',
                    templateUrl: 'client/views/css/forms/formPlaceholder.ng.html',
                    controller: ''

                })

                .state('formInline', {
                    url: '/home/css/forms/formInline',
                    templateUrl: 'client/views/css/forms/formInline.ng.html',
                    controller: ''

                })

                .state('formStacked', {
                    url: '/home/css/forms/formStacked',
                    templateUrl: 'client/views/css/forms/formStacked.ng.html',
                    controller: ''

                })

                .state('formFloating', {
                    url: '/home/css/forms/formFloating',
                    templateUrl: 'client/views/css/forms/formFloating.ng.html',
                    controller: ''

                })
                .state('formInset', {
                    url: '/home/css/forms/formInset',
                    templateUrl: 'client/views/css/forms/formInset.ng.html',
                    controller: ''

                })

                .state('formInput', {
                    url: '/home/css/forms/formInput',
                    templateUrl: 'client/views/css/forms/formInput.ng.html',
                    controller: ''

                })

                .state('formIcons', {
                    url: '/home/css/forms/formIcons',
                    templateUrl: 'client/views/css/forms/formIcons.ng.html',
                    controller: ''

                })

                .state('formHeader', {
                    url: '/home/css/forms/formHeader',
                    templateUrl: 'client/views/css/forms/formHeader.ng.html',
                    controller: ''

                })




        }]
);
