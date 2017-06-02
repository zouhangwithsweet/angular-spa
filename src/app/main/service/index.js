/**
 * Created by zou hang on 2017/3/25.
 */

import {MainAjaxService} from './$_ajax';
import {MainConfService} from './$_conf';
import {MainLocalStorageService} from './$_localstorage';

export default angular.module('main.service.module', [])
    .service('$_storage', MainLocalStorageService)
    .service('$_conf', MainConfService)
    .service('$_ajax', MainAjaxService);