/**
 * Created by dxs on 2015-08-27.
 */
angular.module("index").controller("jsIndexCtrl", ['$scope', '$stateParams', '$meteor', '$rootScope', '$state',
    function ($scope, $stateParams, $meteor, $rootScope,  $state) {
        $scope.jss=[
            {id:'actionSheet',name:'ActionSheet(操作表)'},
            {id:'backdrop',name:'Backdrop(背景)'},
            {id:'contents',name:'Content(内容下拉刷新)'},
            {id:'Lists',name:'Lists(列表)'},
            {id:'loading',name:'Loading(加载)'},
            {id:'modal',name:'Modal(模态框)'},
            {id:'popover',name:'Popover(弹出)'},
            {id:'popup',name:'Popup(弹出窗口)'},
            {id:'scroll',name:'Scroll(滚动)'},
            {id:'sideMenus',name:'Side Menus(侧栏导航)'},
            {id:'slideBox',name:'SlideBox(滑动框)'},
            {id:'Tabs',name:'Tabs(列表切换)'},
        ];


    }
]);
