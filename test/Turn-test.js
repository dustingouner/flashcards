const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let testNum = 0
  beforeEach(function() {
    testNum ++;
    console.log(`Test ${testNum}`)
    // const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    // const correctTurn = new Turn(card, "array")
    // const incorrectTurn = new Turn(card, "wrong answer")
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn({}, "")
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a card', function() {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn(card, "array");
    expect(turn.card).to.deep.equal(card);
  });

  it('should store users guess', function() {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const turn = new Turn(card, "array")
    expect(turn.guess).to.equal("array")
  });

  it('should return a guess', function() {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn(card, "array");
    expect(turn.returnGuess()).to.equal("array");
  });

  it('should return a card', function() {
    const card = new Card(2, "What is a c;omma-separated list of related values?", ["array", "object", "function"], "array")
    const turn = new Turn(card, "array");
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should be able to evaluate a correct guess', function() {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn(card, "array");
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to evaluate an incorrect guess', function() {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn(card, "wrong");
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback when a user makes a correct guess', function() {
      const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const turn = new Turn(card, "array");
      expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should give feedback when a user makes an incorrect guess', function() {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn(card, "wrong");
    expect(turn.giveFeedback()).to.equal('incorrect!');
});

})