/**
 * Created by zou hang on 2017/3/11.
 */

export class MainHeaderCtrl {
    constructor($scope) {
        'ngInject';
        let that = this;

        that.handle = {
            alertFn(){
                alert('ok');
            }
        }
    }
}