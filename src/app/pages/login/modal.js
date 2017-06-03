/**
 * Created by zou hang on 2017/6/3 0003.
 */

class Ctrl {
    constructor($_ajax) {
        'ngInject';
        let that = this;
        that.timer = new Date();
        that.changeTimer = () => {
            that.timer = new Date();
        };

        that.sendCode = () => {
            that.close({$value: 'ok'});
            console.log('ok');
            $_ajax.get('app/login/verifycode',{phone:that.phone,code: that.code})
            .then((res)=>{
                that.close({$value: 'ok'});
            },
                (error) =>{
                console.log(error);
                that.timestamp = new Date();
            });
        }
    }
}

export default {
    template: require('./modal.html'),
    controllerAs: 'vm',
    controller: Ctrl,
    bindings:{
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
}