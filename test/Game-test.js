const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game')
const data = require('../src/data')


describe('Game', function() {
  let testNum = 0
  beforeEach(function() {
    testNum ++;
    console.log(`Test ${testNum}`)
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be a new instance of Game', function() {
    expect(Game).to.be.a('function')
  })

})