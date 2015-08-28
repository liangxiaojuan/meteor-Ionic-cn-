
/**
 * 模块声名文件
 */

//全局模块


angular.module('index', ['angular-meteor', 'ui.router','ionic']);
angular.module('myGlobal', ['index']);

function onReady() {
    angular.bootstrap(document, ['myGlobal']);
}

if (Meteor.isCordova)
    angular.element(document).on("deviceready", onReady);
else
    angular.element(document).ready(onReady);