/**
 * Created by zou hang on 2017/3/25.
 */


import {d_helloFn} from 'decorator';

@d_helloFn('ok')
export class MainConfService {
    constructor() {
        'ngInject';
        let that = this;
        that.url = 'app/role/lists';
    }
}