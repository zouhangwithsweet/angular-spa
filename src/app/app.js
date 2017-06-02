/**
 * Created by zou hang on 2017/3/6.
 */
//样式文件
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'static/css/AdminLTE.min.css';
import 'static/css/skin-black.css';
import 'static/css/reset-bootstrap.css';
import 'static/css/app.css';
//js基础库
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uibs from 'angular-ui-bootstrap';
import 'oclazyload';  //懒加载

//业务逻辑
import mainRouter from './pages/router';
import MainModuleCtrl from './main/controller';
import MainModuleService from './main/service';
import MainModuleDirective from './main/directive';
import MainModuleComponent from './main/component';

import MainInterceptors from './main/interceptors';

let mainApp = angular.module('shixun-app', [
    uiRouter,
    uibs,
    'oc.lazyLoad',
    MainModuleCtrl.name,
    MainModuleService.name,
    MainModuleDirective.name,
    MainModuleComponent.name
]);

mainApp.config(($locationProvider) => {
    'ngInject';
    $locationProvider.hashPrefix('');
});

mainApp.config(mainRouter);

mainApp.config(MainInterceptors);

angular.bootstrap(document, ['shixun-app']);