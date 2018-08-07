/**
 * @file util.js 工具文件
 *
 * @author  pearl
 * @date 2018-07-05
 */
define(function (require) {
    return {
        isArray: function (param) {
            return (typeof param === 'object') && param.constructor === Array;
        },
        isString: function (param) {
            return (typeof param === 'string') && param.constructor === String;
        },
        isNumber: function (param) {
            return (typeof param === 'number') && param.constructor === Number;
        },
        // 版本号只有数字和小数点组成
        isCorrectVersion: function (version) {
            return /^(\d+\.)*(\d)+$/.test(version);
        },
        toArray: function (param) {
            // 数组直接返回
            if (this.isArray(param)) {
                return param;
            }

            // 数字转换为数组
            if (this.isNumber(param)) {
                return [param];
            }

            // 字符串转换为数组，这里针对版本号字符串
            if (this.isString(param)) {
                return param.split('.').map(parseFloat);
            }

        }
    };

});
