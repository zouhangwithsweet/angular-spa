/**
 * Created by zou hang on 2017/6/10 0010.
 */

export default () => {
    'ngInject';
    return {
        restrict: 'EA',
        template: require('./pagination.html'),
        link: function (scope) {
            scope.getPaginationFn = (a, b) => Math.ceil(a / b);
        }
    };
};