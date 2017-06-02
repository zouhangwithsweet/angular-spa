/**
 * Created by zou hang on 2017/3/18.
 */

export default ['root.app.role', {
    url: '/role',
    views: {
        main: {
            template: '<app-manage-role></app-manage-role>',
            resolve: {
                loadModule: function ($ocLazyLoad) {
                    return new Promise((resolve) => {
                        require.ensure(['./'], function () {
                            require(['./'], function () {
                                $ocLazyLoad.load(Array.from(arguments));
                                resolve();
                            });
                        }, 'app.role');
                    });
                }
            }
        }
    },
    data: {
        title: '角色管理'
    }
}];