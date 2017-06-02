/**
 * Created by zou hang on 2017/3/25.
 */

export class MainLocalStorageService {
    constructor() {
        'ngInject';
        let that = this;
        that.set = (k, v) => {
            window.localStorage.setItem('shixun_' + k, v);
        };

        that.set = (k) => {
            window.localStorage.getItem('shixun_' + k);
        };
    }
}