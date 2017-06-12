
import chart from './chart';
import sxPagination from './pagination';
export default angular.module('main.directive.module', [])
    .directive('shixunChart', chart)
    .directive('sxPagination', sxPagination);