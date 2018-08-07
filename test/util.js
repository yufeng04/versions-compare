define(function (require) {
    var util = require('src/util');
    var a = 20;
    var b = [1, 2, 3];
    var c = '1.0.3';
    var d = '.1.1';
    var e = '1.2.3.';
    var f = '3';
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
        it('should detect correct version', function () {
            expect(util.isCorrectVersion(a)).to.equal(true);
            expect(util.isCorrectVersion(b)).to.equal(false);
            expect(util.isCorrectVersion(c)).to.equal(true);
            expect(util.isCorrectVersion(d)).to.equal(false);
            expect(util.isCorrectVersion(e)).to.equal(false);
            expect(util.isCorrectVersion(f)).to.equal(true);
        });
        it('should detect array return', function () {
            expect(util.toArray(a)).to.deep.equal([20]);
            expect(util.toArray(b)).to.deep.equal([1, 2, 3]);
            expect(util.toArray(c)).to.deep.equal([1, 0, 3]);
        });
    });
});
