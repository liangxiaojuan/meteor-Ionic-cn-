/**
 * Created by dxs on 2015-08-28.
 */

angular.module("index").controller("actionSheetCtrl", ['$scope','$ionicActionSheet','$timeout',
    function ($scope , $ionicActionSheet, $timeout) {
        $scope.show = function() {

            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '<b>分享</b> 她' },
                    { text: '更多' }
                ],
                destructiveText: '删除',
                titleText: '修改您的内容',
                cancelText: '取消',
                cancel: function() {
                    // add cancel code..
                },
                buttonClicked: function(index) {
                    return true;
                }
            });

            // For example's sake, hide the sheet after two seconds
            $timeout(function() {
                hideSheet();
            }, 2000);

        };

    }
]);
