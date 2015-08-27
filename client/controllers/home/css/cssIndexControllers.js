/**
 * Created by dxs on 2015-08-27.
 */
angular.module("index").controller("cssIndexCtrl", ['$scope', '$stateParams', '$meteor', '$rootScope', '$state',
    function ($scope, $stateParams, $meteor, $rootScope,  $state) {
        $scope.csss=[
            {id:'header',name:'Header(头部)'},
            {id:'content',name:'Content(内容)'},
            {id:'footer',name:'Footer(底部)'},
            {id:'buttons',name:'Buttons(按钮)'},
            {id:'lists',name:'Lists(列表)'},
            {id:'cards',name:'Cards(卡片)'},
            {id:'forms',name:'Forms(表单)'},
            {id:'toggle',name:'Toggle(切换)'},
            {id:'checkbox',name:'Checkbox(多选)'},
            {id:'radio',name:'Radio(单选)'},
            {id:'range',name:'Range(范围)'},
            {id:'select',name:'Select(选择)'},
            {id:'tabs',name:'Tabs(列表切换)'},
        ];


        $scope.data = {
            showDelete: false
        };

        $scope.edit = function(item) {
            alert('Edit Item: ' + item.id);
        };
        $scope.share = function(item) {
            alert('Share Item: ' + item.id);
        };

        $scope.moveItem = function(item, fromIndex, toIndex) {
            $scope.items.splice(fromIndex, 1);
            $scope.items.splice(toIndex, 0, item);
        };

        $scope.onItemDelete = function(item) {
            $scope.items.splice($scope.items.indexOf(item), 1);
        };


    }
]);
