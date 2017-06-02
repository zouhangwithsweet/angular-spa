/**
 * Created by zou hang on 2017/4/8.
 */

export default {
    bindings: {
        boxTitle: '@',
        boxClass: '@'
    },
    transclude: true,
    template: require('./box.html'),
    controllerAs: 'vm',
    controller: Ctrl
}

function Ctrl($_ajax) {
    'ngInject';
    let that = this;

    that.set = function (i) {
        that.demo = i.name;
    }
}