/**
 * Created by zou hang on 2017/3/25.
 */

export default  {
    template: require('./app.html'),
    controllerAs: 'vm',
    controller: Ctrl
}

function Ctrl($_ajax, $_conf) {
    'ngInject';
    this.rolelist = [];
    $_conf.get();
    $_ajax.get($_conf.url).then((res) => {
        this.rolelist = res.rolelist;
    }, () => {
    });
}