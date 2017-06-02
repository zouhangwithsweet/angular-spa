/**
 * Created by zou hang on 2017/3/25.
 */

import ngEnter from './ng.enter';
import shixunPagination from './shixun.pagination';
import chart from './chart';

export default angular.module('main.directive.module', [])
    .directive('shixunPagination', shixunPagination)
    .directive('shixunChart', chart)
    .directive('ngEnter', ngEnter);