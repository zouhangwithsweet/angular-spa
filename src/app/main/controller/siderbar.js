/**
 * Created by zou hang on 2017/3/25.
 */

export class MainSiderBarCtrl {
    constructor($_ajax) {
        'ngInject';
        let that = this;
        that.$_ajax = $_ajax;
        that.siderMenus = [];
        that.initData();
    }

    initData() {
        this.$_ajax.get('app/user/sidebar').then((res) => {
            this.siderMenus = res.menus;
        }, () => {

        });
    }
}