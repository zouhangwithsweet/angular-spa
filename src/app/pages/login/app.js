/**
 * Created by zou hang on 2017/5/6.
 */

export default {
    template: require('./app.html'),
    controllerAs: 'vm',
    controller($_ajax,$interval) {
        'ngInject';
        this.phone = '';
         this.pState = true;
        this.testPhone = () =>{
            if(/^1[34578]\d{9}$/.test(this.phone)){
                this.pState = false;
            }
            else{
                this.pState = true;
            }
        }
        
        this.code = '';

        this.timestamp = new Date();

        this.changeImg = () => {
            this.timestamp = new Date();
        }

        this.getCode = () => {
            $_ajax.get('app/login/verifycode', {phone: this.phone, code: this.code}).then(() => {
            }, () => {
                alert('错误');
                this.timestamp = new Date();
            });
        }

        this.loginFn = () => {
            $_ajax.get('app/login/login', {phone: this.phone, verify_code: this.verify_code}).then(() => {
            }, () => {
                alert('错误');
            });
        }
        this.text = "获取验证码";
        this.state = false;

        this.sendMessage = () =>{
            this.state = true;
            var second = 60,
            timePromise = $interval(()=>{
                this.state = true;
                if(second <= 0){
                    $interval.cancel(timePromise);
                    second = 60;
                }else{
                    second--;
                   this.text = second + "秒后可重发";
                    if(second == 0){
                        this.text = "重发验证码";
                        this.state = false;
                    }
                }
            },1000,60);
        }
    }
}