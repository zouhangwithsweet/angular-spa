/**
 * Created by Rayr Lee on 2017/3/6.
 */


//引入css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'static/css/AdminLTE.min.css';
import 'static/css/skin-black.css';
import 'static/css/reset-bootstrap.css';
import 'static/css/app.css';
import './sass/index.scss';

//引入依赖
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uibs from 'angular-ui-bootstrap';

import mainRouter from './pages/router';
import MainModuleCtrl from './main/controller';
import oclazyload from 'oclazyload';
import MainModuleComponent from './main/component';
import MainModuleDirective from './main/directive';
/*import mainctrl from './main/mian.controller.module.js';*/

//主要逻辑
import MainModuleService from './main/service';
let mainApp =angular.module('shixun-app', [
    uiRouter,
    uibs,
    'oc.lazyLoad',
    MainModuleCtrl.name,
    /*mainctrl.name,*/
    MainModuleService.name,
    MainModuleDirective.name,
    MainModuleComponent.name,
]);


mainApp.config(mainRouter);

mainApp.config(($httpProvider) => {
    'ngInject';
    $httpProvider.interceptors.push(['$q', '$window', function ($q, $window) {
        return {
            responseError: function (response) {
                var deferred = $q.defer();

                switch (response.status) {
                    case 401:
                        deferred.reject(response);
                        break;
                    case 451:
                        deferred.reject(response);
                        break;
                    default:
                        deferred.resolve(response);
                }

                return deferred.promise;
            }
        };
    }]);
});
//angular手动加载
angular.bootstrap(document, ['shixun-app']);