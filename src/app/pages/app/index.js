/**
 * Created by zou hang on 2017/3/18.
 */

export default ['root.app', {
    url: '/app',
    abstract: true,
    views: {
        mainHeader: {
            template: require('./header.html'),
            controller: 'MainHeaderCtrl as vm'
        },
        mainFooter: {
            template: require('./footer.html')
        },
        mainSidebar: {
            template: require('./sidebar.html'),
            controller: 'MainSiderBarCtrl as vm'
        },
        mainContent: {
            template: require('./content.html'),
            controller: 'MainContentCtrl as vm'
        }
    }
}]