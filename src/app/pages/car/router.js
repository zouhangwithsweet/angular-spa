/**
 * Created by Rayr Lee on 2017/3/18.
 */

export default ['root.app.car', {
    url: '/car',
    views: {
        main: {
            template: '<car-app></car-app>',
            resolve: {
                loadModule: function ($ocLazyLoad) {
                    return new Promise((resolve) => {
                        require.ensure(['./'], function () {
                            require(['./'], function () {
                                $ocLazyLoad.load(Array.from(arguments));
                                resolve();
                            });
                        }, 'app.car');
                    });
                }
            }
        }
    },
    data: {
        title: '车辆管理'
    }
}]