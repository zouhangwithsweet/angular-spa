/**
 * Created by zou hang on 2017/4/22.
 */

class Ctrl {
    constructor() {
        'ngInject';
    }
}

export default {
    bindings: {
        model: '=?',
        option: '<',
        onChange: '&'
    },
    template: require('./dropdown.select.html'),
    controllerAs: 'vm',
    controller: Ctrl
}