/**
 * Created by zou hang on 2017/4/8.
 */

import echarts from 'echarts';

export default () => {
    'ngInject';
    return {
        restrict: 'EA',
        scope: {
            option: '='
        },
        template: '<div><div class="chart"></div></div>',
        link: function (scope, ele) {
            let myChart = echarts.init(ele.find('.chart')[0]);
            myChart.setOption(scope.option);
        }
    };
}