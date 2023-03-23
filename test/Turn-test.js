const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let testNum = 0
  var card, turn, card3, turn2
  beforeEach(function() {
    testNum ++;
    console.log(`Test ${testNum}`)
    card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    turn = new Turn("array", card)
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    turn2 = new Turn("Lex", card3);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a card', function() {
    expect(turn.card).to.deep.equal(card);
  });

  it('should store users guess', function() {
    expect(turn.guess).to.equal("array")
  });

  it('should return a guess', function() {
    expect(turn.returnGuess()).to.equal("array");
  });

  it('should return a card', function() {
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should be able to evaluate a correct guess', function() {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to evaluate an incorrect guess', function() {
    const turn = new Turn("object", card)
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback when a user makes a correct guess', function() {
      expect(turn.giveFeedback()).to.equal('correct!');
      expect(turn2.giveFeedback()).to.equal('incorrect!');
  });

  it('should give feedback when a user makes an incorrect guess', function() {
    const turn = new Turn("object", card)
    expect(turn.giveFeedback()).to.equal('incorrect!');
});

})