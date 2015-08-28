/**
 * Created by dxs on 2015-08-28.
 */
/**
 * Created by dxs on 2015-08-27.
 */
angular.module("index").controller("cameraCtrl", ['$scope',
    function ($scope) {

        $scope.addimg = function () {
            if (Meteor.isCordova) {
                console.log("Printed only in mobile cordova apps");
            }
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,
                targetWidth: 500,
                targetHeight: 500,
                destinationType: Camera.DestinationType.DATA_URL
            });

            function onSuccess(imageData) {
                //var image = document.getElementById('myImage');
                var image = "data:image/jpeg;base64," + imageData;

                $scope.img = image;
            }

            function onFail(message) {

            }

        }


    }
]);
