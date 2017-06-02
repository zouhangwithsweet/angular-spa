/**
 * Created by zou hang on 2017/3/25.
 */

export default () => {
    'ngInject';
    return {
        restrict: 'EA',
        template: '<ul uib-pagination previous-text="上一页" total-items="vm.totalItems" items-per-page="{{vm.param.size}}" ng-model="vm.currentPage" ng-change="vm.handle.selectPage()"></ul>'
    };
}