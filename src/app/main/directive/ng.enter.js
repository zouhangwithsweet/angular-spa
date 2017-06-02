/**
 * Created by zou hang on 2017/3/25.
 */

export default () => {
    'ngInject';
    return {
        restrict: 'EA',
        link: function (scope, ele, attr) {
            ele.bind('keydown keypress', function (e) {
                if (e.which === 13) {
                    scope.$apply(attr.ngEnter);
                    e.preventDefault();
                }
            });
        }
    };
}