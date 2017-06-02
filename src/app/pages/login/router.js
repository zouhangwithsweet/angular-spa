/**
 * Created by zou hang on 2017/3/18.
 */

export default ['login', {
    url: '/login',
    views: {
        container: {
            template: '<login-app></login-app>',
            resolve: {
                loadModule: function ($ocLazyLoad) {
                    return new Promise((resolve) => {
                        require.ensure(['./'], function () {
                            require(['./'], function () {
                                $ocLazyLoad.load(Array.from(arguments));
                                resolve();
                            });
                        }, 'login');
                    });
                }
            }
        }
    }
}]