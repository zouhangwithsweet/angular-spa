export default {
    template: require('./login.html'),
    controllerAs: 'vm',
    controller($_ajax,$uibModal,$interval){
        'ngInject';
        let that = this;
        let timer = null;
        that.phone = '13051248978';
        that.pState = true;
        that.text = "获取验证码";

        that.count = 60;
        that.isDisabled = false;
        that.testPhone = () =>{
            if(/^1[34578]\d{9}$/.test(that.phone)){
                that.pState = false;
            }
            else{
                that.pState = true;
            }
        }
       /* that.code = '';
        that.verify_code = '';
        that.timer = new Date();
        that.changetimer = () => {
            that.timer = new Date();
        };*/
        that.getCode = () => {
            if( that.pState ){
                return;
            };
            $uibModal.open({
                component: 'loginModal',
                resolve:{
                    data () {
                        return {
                            phone: that.phone
                        };
                    }
                }
            }).result.then(()=>{
                timer = $interval(()=>{
                    that.count--;
                    that.isDisabled = true;
                    that.text = `${that.count}秒后获取`;
                    if (that.count == 0){
                        $interval.cancel(timer);
                        that.isDisabled = false;
                        that.count = 60;
                        that.text = "获取验证码";
                        timer = null;
                    }
                },1000)
            })
        }
        that.loginIn = () => {
            $_ajax.get('app/login/login', {phone: that.phone, verify_code: that.verify_code}).then(() => {
                alert('登录成功！');
                location.href = '/#/app/index';
            }, () => {
                console.log('错误');
            });
        }

    }
}