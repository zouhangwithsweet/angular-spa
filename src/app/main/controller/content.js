/**
 * Created by zou hang on 2017/3/18.
 */

export class MainContentCtrl {
    constructor($scope, $state, $ocLazyLoad) {
        'ngInject';
        let that = this;
        that.nowPage = $state.current.data;

        $scope.$on('$stateChangeSuccess', (e) => {
            that.nowPage = $state.current.data;
        });
    }
}