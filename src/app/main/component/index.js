/**
 * Created by zou hang on 2017/3/25.
 */

import box from './box';
import radio from './radio';
import dropdownSelect from './dropdown.select';

export default angular.module('main.component.module', [])
    .component('shixunDropdownSelect', dropdownSelect)
    .component('shixunRadio', radio)
    .component('shixunBox', box);