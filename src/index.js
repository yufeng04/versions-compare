/**
 * @file index.js 工具文件
 *
 * @author  pearl
 * @date 2018-08-07
 */
define(function (require) {

    /**
     * [compare 比较两个整数的大小]
     *
     * @param  {integer} a 整数
     * @param  {integer} b 整数
     *
     * @return {integer} 1: a > b; 0: a === b; -1: a < b
     */
    function compare(a, b) {
        if (a > b) {
            return 1;
        }
        else if (a < b) {
            return -1;
        }
        return 0;
    }


    /**
     * [arrayCompare 数组形式的比较]
     *
     * @param  {Array}   a  版本1
     * @param  {Array}   b  版本2
     * @param  {boolean} isReverse [是否反转数组]
     *
     * @return {integer} 1: a > b; 0: a === b; -1: a < b
     */
    function arrayCompare(a, b, isReverse) {

        // 有些函数返回的版本号是逆序的，此时 isReverse 传 true 即可
        if (isReverse) {
            a = a.reverse();
            b = b.reverse();
        }

        var lenA = a.length;
        var lenB = b.length;

        for (var i = 0; i < Math.min(lenA, lenB); i++) {
            var t = compare(a[i], b[i]);

            // 相同位置的数字不一致，则有大小结论
            if (!!t) {
                return t;
            }
        }

        if (lenA === lenB) {
            return 0;
        }

        var tmp = lenA > lenB ? a : b;
        for (var j = i; j < Math.max(lenA, lenB); j++) {
            if (tmp[j] === 0) {
                return 0;
            }
            return compare(lenA, lenB);
        }
    }


    /**
     * [dataPreprocess 数据预处理函数，判断参数格式是否符合预期]
     *
     * @param  {Number/Array/String} version 版本号
     * @return {Array}               转换为数组后的版本号
     */
    function dataPreprocess(version) {

        var util = require('./util');

        if (util.isNumber(version)) {
            version = version.toString();
        }
        if (util.isArray(version)) {
            version = version.join('.');
        }

        if (util.isCorrectVersion(version)) {

            return util.toArray(version);
        }

        return 'Wrong Params.';
    }

    /**
     * [main 入口函数]
     *
     * @param  {Array}   a  版本1
     * @param  {Array}   b  版本2
     * @param  {boolean} isReverse [是否反转数组]
     *
     * @return {integer} 1: a > b; 0: a === b; -1: a < b
     */
    return function main(a, b, isReverse) {

        a = dataPreprocess(a);
        b = dataPreprocess(b);

        if (a !== 'Wrong Params.' && b !== 'Wrong Params.') {
            return arrayCompare(a, b, isReverse);
        }

        return 'Wrong Params.';
    };
});
