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
        }
    };

});
