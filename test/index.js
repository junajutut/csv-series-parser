const chai = require('chai');
const expect = chai.expect;
const lib = require('../index');

describe('parseNumberRanges()', function() {

    it('should return [1, 2, 5] when trying to parse "1,2,5"', function() {
        const output = lib.parseNumberRanges('1,2,5');
        expect(output).to.be.an('array');
        expect(output).to.deep.equal([1,2,5]);
    });

    it('should return [1, 2, 3, 4, 5] when trying to parse "1-5"', function() {
        const output = lib.parseNumberRanges('1-5');
        expect(output).to.be.an('array');
        expect(output).to.deep.equal([1,2,3,4,5]);
    });

    it('should return [1, 2, 3, 5] when trying to parse "1-3,5"', function() {
        const output = lib.parseNumberRanges('1-3,5');
        expect(output).to.be.an('array');
        expect(output).to.deep.equal([1,2,3,5]);
    });

    it('should return empty array when trying to parse "10-5"', function() {
        const output = lib.parseNumberRanges('10-5');
        expect(output).to.be.an('array');
        expect(output).to.be.empty;
    });

    it('should throw error when trying to parse "foobar"', function() {
        expect(() => {
            return lib.parseNumberRanges('foobar');
        }).to.throw();
    });

    it('should throw error when trying to parse "10,test,20-22"', function() {
        expect(() => {
            return lib.parseNumberRanges('10,test,20-22');
        }).to.throw();
    });

});
