/**
 * Created by zou hang on 2017/3/18.
 */

export default ['root.app.index', {
    url: '/index',
    views: {
        main: {
            template: require('./index.html'),
        }
    },
    data: {
        title: '首页',
        sub: '欢迎使用本平台'
    }
}]