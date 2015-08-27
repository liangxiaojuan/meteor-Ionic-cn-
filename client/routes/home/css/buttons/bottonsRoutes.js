


angular.module("index").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider){
            $locationProvider.html5Mode(true);


            $stateProvider

                .state('buttons', {
                    url: '/home/css/buttons',
                    templateUrl: 'client/views/css/buttons/buttons.ng.html',
                    controller: ''

                })

                .state('button', {
                    url: '/home/css/buttons/button',
                    templateUrl: 'client/views/css/buttons/button.ng.html',
                    controller: ''

                })
                .state('buttonBlock', {
                    url: '/home/css/buttons/buttonBlock',
                    templateUrl: 'client/views/css/buttons/buttonBlock.ng.html',
                    controller: ''

                })

                .state('buttonFull', {
                    url: '/home/css/buttons/buttonFull',
                    templateUrl: 'client/views/css/buttons/buttonFull.ng.html',
                    controller: ''

                })

                .state('buttonSizes', {
                    url: '/home/css/buttons/buttonSizes',
                    templateUrl: 'client/views/css/buttons/buttonSizes.ng.html',
                    controller: ''

                })

                .state('buttonOutlined', {
                    url: '/home/css/buttons/buttonOutlined',
                    templateUrl: 'client/views/css/buttons/buttonOutlined.ng.html',
                    controller: ''

                })

                .state('buttonClear', {
                    url: '/home/css/buttons/buttonClear',
                    templateUrl: 'client/views/css/buttons/buttonClear.ng.html',
                    controller: ''

                })

                .state('buttonIcon', {
                    url: '/home/css/buttons/buttonIcon',
                    templateUrl: 'client/views/css/buttons/buttonIcon.ng.html',
                    controller: ''

                })

                .state('buttonHead', {
                    url: '/home/css/buttons/buttonHead',
                    templateUrl: 'client/views/css/buttons/buttonHead.ng.html',
                    controller: ''

                })

                .state('buttonCleHead', {
                    url: '/home/css/buttons/buttonCleHead',
                    templateUrl: 'client/views/css/buttons/buttonCleHead.ng.html',
                    controller: ''

                })

                .state('buttonBar', {
                    url: '/home/css/buttons/buttonBar',
                    templateUrl: 'client/views/css/buttons/buttonBar.ng.html',
                    controller: ''

                })


        }]
);
