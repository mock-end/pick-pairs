'use strict';

var expect = require('chai').expect;


describe('pick-pairs: ', function () {

  var pickPairs = require('../../');

  it('common', function () {

    expect(pickPairs()).to.be.eql({});
    expect(pickPairs(null)).to.be.eql({});
    expect(pickPairs(1)).to.be.eql({});
    expect(pickPairs('a')).to.be.eql({});

    expect(pickPairs([])).to.be.eql({});
    expect(pickPairs({})).to.be.eql({});


    expect(pickPairs([1, 2, 3], 2)).to.have.any.keys(['0', '1', '2']);
    expect(pickPairs({
      a: 1,
      b: 2,
      c: 3
    }, 2)).to.have.any.keys(['a', 'b', 'c']);
    expect(Object.keys(pickPairs({ a: 1, b: 2, c: 3 }, 1))).to.have.length(1);
  });
});
