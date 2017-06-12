/**
 * Created by Rayr Lee on 2017/3/18.
 */

import views from './app';

export default ($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/login');

    $stateProvider.state(...require('./root'));
    $stateProvider.state(...require('./login/router'));
    $stateProvider.state(...require('./app'));
    $stateProvider
        .state(...require('./index'))
        .state(...require('./cart/router'))
        .state(...require('./hello/router'))
        .state(...require('./car/router'))
        .state(...require('./app_manage/role/router'));
};