/**
 * Created by zou hang on 2017/3/18.
 */

import {MainHeaderCtrl} from './header';
import {MainSiderBarCtrl} from './siderbar';
import {MainContentCtrl} from './content';

export default angular.module('mainModuleCtrl', [])
    .controller('MainHeaderCtrl', MainHeaderCtrl)
    .controller('MainSiderBarCtrl', MainSiderBarCtrl)
    .controller('MainContentCtrl', MainContentCtrl);