define(['src/index'], function (compare) {

    describe('index', function () {
        it('should detect 1', function () {
            expect(compare(2, 1)).to.equal(1);
            expect(compare('1.2.3', '1.2.0')).to.equal(1);
            expect(compare([1,2,3], [1,2])).to.equal(1);
            expect(compare(2, '1')).to.equal(1);
            expect(compare([2], '1')).to.equal(1);
            expect(compare([2, 3], 2)).to.equal(1);
        });
        it('should detect 0', function () {
            expect(compare(1, 1)).to.equal(0);
            expect(compare('1.2.0', '1.2.0')).to.equal(0);
            expect(compare([1,2], [1,2])).to.equal(0);
            expect(compare([1,2], '1.2')).to.equal(0);
            expect(compare([2], 2)).to.equal(0);
        });
        it('should detect -1', function () {
            expect(compare(1,2)).to.equal(-1);
            expect(compare('1.2.0','1.2.3')).to.equal(-1);
            expect(compare([1,2], [1,4])).to.equal(-1);
            expect(compare([1,2], '1.4')).to.equal(-1);
            expect(compare('1.2', 2)).to.equal(-1);
            expect(compare('1.2', [1,4])).to.equal(-1);
        });
        it('should detect Wrong Params.', function () {
            expect(compare(1, '1.2.')).to.equal('Wrong Params.');
            expect(compare('.1.2.0', [2,3])).to.equal('Wrong Params.');
            expect(compare('a1.2.0', [2,3])).to.equal('Wrong Params.');
        });
    });

    describe('index reverse', function () {
        it('should detect 1', function () {
            expect(compare([3, 2], [5, 1], true)).to.equal(1);
        });
        it('should detect -1', function () {
            expect(compare([5, 1], [3, 2], true)).to.equal(-1);
        });
    });
});
