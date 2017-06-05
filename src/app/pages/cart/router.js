/**
 * Created by zou hang on 2017/6/5.
 */

export default ['root.app.carlist', {
    url: '/carlist',
    views: {
        main: {
            template: '<car-list></car-list>',
            resolve: {
                loadModule: function ($ocLazyLoad) {
                    return new Promise((resolve) => {
                        require.ensure(['./'], function () {
                            require(['./'], function () {
                                $ocLazyLoad.load(Array.from(arguments));
                                resolve();
                            });
                        }, 'app.carlist');
                    });
                }
            }
        }
    },
    data: {
        title: '订单管理'
    }
}];