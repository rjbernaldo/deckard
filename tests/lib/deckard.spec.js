var expect = require('chai').expect;

describe('Deckard', function () {
  it('should exist', function () {
    expect(require('../../lib/deckard.js')).to.be.defined;
  });

  var Deckard = require('../../lib/deckard.js');
});
