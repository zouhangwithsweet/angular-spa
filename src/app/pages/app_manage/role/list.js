/**
 * Created by zou hang on 2017/3/25.
 */

export default {
    template: require('./list.html'),
    controllerAs: 'vm',
    controller: Ctrl
};

function Ctrl($_ajax) {
    'ngInject';
    let that = this;
    that.$_ajax = $_ajax;
    that.rolelist = [];
    that.param = {
        page: 1,
        size: 5,
        role_name: ''
    };

    that.selected = '10';

    that.option = [
        {
            name: '男人',
            id: 10
        },
        {
            name: '女人',
            id: 12
        }
    ];

    that.config = {
        '10': [
            {
                name: '选择10',
                id: 10
            },
            {
                name: '选择12',
                id: 12
            },
            {
                name: '选择14',
                id: 14
            },
            {
                name: '选择15',
                id: 15
            }
        ],
        '12': [
            {
                name: '选择10',
                id: 10
            },
            {
                name: '选择12',
                id: 12
            }
        ]
    }

    that.currentPage = 1;

    that.handle = {
        query(){
            that.initData();
        },
        selectPage(){
            that.param.page = that.currentPage;
            that.initData();
        },
        select(model){
            console.log(model);
        },
        radio(item){
            console.log(item);
        },
        check(item){
            if (that.checkModel.includes(item.id)) {
                let _i = that.checkModel.indexOf(item.id);
                that.checkModel.splice(_i, 1);
            } else {
                that.checkModel.push(item.id);
            }
        }
    };

    that.checkModel = [{
        name: 'aaa',
        id: 1
    }];

    that.checkConf = [
        {
            name: 'aaa',
            id: 1
        },
        {
            name: 'bbb',
            id: 2
        },
        {
            name: 'ccc',
            id: 3
        }
    ];

    that.initData();
}

Ctrl.prototype = {
    constructor: Ctrl,
    initData () {
        this.$_ajax.get('app/role/lists', this.param).then((res) => {
            this.rolelist = res.rolelist;
            this.totalItems = res.count;
        }, () => {

        });
    }
};