/**
 * Created by zou hang on 2017/3/20 0020.
 */

export default  {
    template: require('./app.html'),
    controllerAs: 'vm',
    controller: Ctrl
}

function Ctrl($_ajax) {
    'ngInject';
    let that = this;
    that.dataList = [];
    that.page = {
        totalItems: 0,
        currentPage: 1,
        everyPage: 15
    };

    that.param = {
        size: that.page.everyPage,
        page: 1,
        name: "",
        phone: ""
    };

    that.pageChanged= () => {
        that.param.page = that.page.currentPage;
        that.initList();
    }

    that.handle = {
        query() {
            that.param.name = that.name || "";
            that.phone = that.phone || "";
        },
        rest() {
            that.param.name = "";
            that.phone = "";
        }
    }

    that.initList = () => {
        $_ajax.get('app/openintention/list',that.param).then((res) => {
            that.page.totalItems = res.count;
            that.dataList = res.data;
        }, () => {
        });
    };

    that.initList();
}