/**
 * Created by zou hang 2017/3/18.
 */

export default ($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/app/index');
    //根路由app
    $stateProvider.state(...require('./root')) //根;
    $stateProvider.state(...require('./login/router'));
    $stateProvider.state(...require('./app'));
    //根路由app应用
    $stateProvider
        .state(...require('./index'))
        .state(...require('./hello/router'))
        .state(...require('./app_manage/role/router'))
};