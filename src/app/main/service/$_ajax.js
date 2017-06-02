/**
 * Created by zou hang on 2016/8/10.
 */

export class MainAjaxService {
    constructor($http, $q) {
        'ngInject';
        let that = this;
        that.get = (url, param) => {
            let deferred = $q.defer();
            $http({
                method: 'GET',
                url: `/v2/${url}`,
                params: param
            }).then((res) => {
                if (res.data.errno == 0) {
                    deferred.resolve(res.data.data);
                } else {
                    console.log(res.data.error || '后端错误');
                    //deferred.reject(res.data.error || '后端错误');
                }
            }, (res) => {
                deferred.reject(res);
            });
            return deferred.promise;
        };
    }
}
