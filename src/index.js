define(function (require) {

    /**
     * [compare 比较两个整数的大小]
     *
     * @param  {integer} a 整数
     * @param  {integer} b 整数
     *
     * @return {integer} 1: a > b; 0: a === b; -1: a < b
     */
    function compare (a, b) {
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
     * @param  {Array}   a
     * @param  {Array}   b
     * @param  {Boolean} isReverse [是否反转数组]
     *
     * @return {integer} 1: a > b; 0: a === b; -1: a < b
     */
    function arrayCompare (a, b, isReverse) {

        // 有些函数返回的版本号是逆序的，此时 isReverse 传 true 即可
        if (isReverse) {
            a = a.reverse();
            b = b.reverse();
        }

        var lenA = a.length;
        var lenB = b.length;

        for (var i = 0; i < Math.min(lenA, lenB); i++) {
            var t = compare(a[i], b[i])

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
     * [stringCompare 字符串形式的版本号对比函数]
     *
     * @param  {string}  a
     * @param  {string}  b
     * @param  {Boolean} isReverse 是否反转数组
     *
     * @return {integer} 1: a > b; 0: a === b; -1: a < b
     */
    function stringCompare (a, b) {
        return arrayCompare(a.split('.'), b.split('.'));
    }

    /**
     * [exec 入口函数]
     *
     * @param  {不确定} a
     * @param  {不确定} b
     * @param  {Boolean} isReverse [是否反转数组]
     *
     * @return {integer} 1: a > b; 0: a === b; -1: a < b
     */
    return function exec (a, b, isReverse) {

        var util = require('./util');

        if (util.isArray(a) && util.isArray(b)) {
            return arrayCompare(a, b, isReverse)
        }

        if (util.isNumber(a) && util.isNumber(b)) {
            return compare(a, b);
        }

        if (util.isString(a) && util.isString(b)) {
            return stringCompare(a, b);
        }

        return 'Wrong Params.';
    }
});
