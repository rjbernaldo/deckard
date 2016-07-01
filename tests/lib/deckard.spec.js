'use strict';

var expect = require('chai').expect;

describe('Deckard', () => {
  it('should exist', () => {
    expect(require('../../lib/deckard.js')).to.be.defined;
  });

  let Deckard = require('../../lib/deckard.js');
});
