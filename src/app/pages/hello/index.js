/**
 * Created by zou hang on 2017/3/18.
 */

import app from './app';
import data from './data';
import demo from './demo';

export default angular.module('app.hello.moudle', [])
    .component('helloApp', app)
    .component('helloDemo', demo)
    .component('helloData', data);