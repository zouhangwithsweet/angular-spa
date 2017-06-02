/**
 * Created by zou hang on 2016/7/8.
 */

export default {
    BASEURL: '/v2/app/',
    pikaday: ['pikadayConfigProvider', function (pikaday) {

        let locales = {
            de: {
                previousMonth: '上月',
                nextMonth: '下月',
                months: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
                weekdays: ["日", "一", "二", "三", "四", "五", "六"],
                weekdaysShort: ["日", "一", "二", "三", "四", "五", "六"]
            }
        };

        pikaday.setConfig({
            i18n: locales.de,
            locales: locales
        });

    }],
    WHITELIST: {  //路由白名单
        'app.init': true,
        'app.workspace': true,
        'app.faq_help': true,
        'app.question': true,
        'app.question_manage': true,
        'app.web_notice': true
    }
}
