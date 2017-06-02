/**
 * Created by zou hang on 2017/4/22.
 */

class Ctrl {
    constructor($scope) {
        'ngInject';
        let that = this;
        $scope.$watch('vm.option', function () {
            console.log(that.option);
        }, true);
    }
}

export default {
    bindings: {
        model: '=?',
        option: '<',
        onChange: '&'
    },
    template: require('./radio.html'),
    controllerAs: 'vm',
    controller: Ctrl
}