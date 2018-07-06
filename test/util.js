define(function (require) {

    var util = require('src/util');
    var a = 20;
    var b = [1, 2, 3];
    var c = '1.0.3';

    describe('test', function () {
        it('should detect Number', function () {
            expect(util.isNumber(a)).to.equal(true);
            expect(util.isNumber(b)).to.equal(false);
            expect(util.isNumber(c)).to.equal(false);
        });
        it('should detect Array', function () {
            expect(util.isArray(a)).to.equal(false);
            expect(util.isArray(b)).to.equal(true);
            expect(util.isArray(c)).to.equal(false);
        });
        it('should detect String', function () {
            expect(util.isString(a)).to.equal(false);
            expect(util.isString(b)).to.equal(false);
            expect(util.isString(c)).to.equal(true);
        });
    });
});
