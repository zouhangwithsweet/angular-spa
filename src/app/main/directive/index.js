
import chart from './chart';
import hchart from './hchart';
import sxPagination from './pagination';
export default angular.module('main.directive.module', [])
    .directive('shixunChart', chart)
    .directive('sxPagination', sxPagination)
    .directive('shixunHchart',hchart);