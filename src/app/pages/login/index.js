/**
 * Created by zou hang on 2017/3/18.
 */
import app from './app';
import modal from './modal';

export default angular.module('login.moudle', [])
	.component('loginModal',modal)
    .component('loginApp', app);