const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  var card1, card2, card3, deck, round, turn
  let testNum = 0
  beforeEach(function() {
    testNum ++;
    console.log(`Test ${testNum}`)
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    turn = new Turn('pug', card1)
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  });

  it('should be able to keep track of the number of turns', function() {
    expect(round.turns).to.equal(0)
  });

  it('should increase the number of turns by one each time a turn occurs', function() {
    round.takeTurn('pug')
    expect(round.turns).to.equal(1)
    round.takeTurn('gallbladder')
    expect(round.turns).to.equal(2)
  });

  it('should go to the next card after a turn is taken', function() {
    round.takeTurn(turn.guess)
    expect(round.returnCurrentCard()).to.equal(card2)
  });

  it('should record incorrect guesses', function() {
    let turn = new Turn('pug', card1)
    let turn2 = new Turn('spleen', card2)
    let turn3 = new Turn('William', card3)
    round.takeTurn(turn.guess)
    expect(round.incorrectGuesses[0]).to.equal(card1.id)
    round.takeTurn(turn.guess)
    expect(round.incorrectGuesses[1]).to.equal(card2.id)
    round.takeTurn('William', card3)
    expect(round.incorrectGuesses[2]).to.equal(card3.id)
  });

  it('should evaluate if the users guess is correct', function() {
    let turn = new Turn('sea otter', card1)
    let turn2 = new Turn('gallbladder', card2)
    let turn3 = new Turn('Fitzgerald', card3)
    round.takeTurn(turn.guess)
    expect(turn.giveFeedback()).to.equal('correct!')
    round.takeTurn(turn2.guess)
    expect(turn.giveFeedback()).to.equal('correct!')
    round.takeTurn(turn3.guess)
    expect(turn.giveFeedback()).to.equal('correct!')
  });

  it('should evaluate if the users guess is incorrect', function() {
    let turn = new Turn('pug', card1)
    let turn2 = new Turn('appendix', card2)
    let turn3 = new Turn('William', card3)
    round.takeTurn(turn.guess)
    expect(turn.giveFeedback()).to.equal('incorrect!')
    round.takeTurn(turn2.guess)
    expect(turn.giveFeedback()).to.equal('incorrect!')
    round.takeTurn(turn3.guess)
    expect(turn.giveFeedback()).to.equal('incorrect!')
  });

  it('should calculate and return the percentage of correct guesses', function() {
    let turn = new Turn('sea otter', card1)
    let turn2 = new Turn('appendix', card2)
    let turn3 = new Turn('Lex', card3)
    round.takeTurn(turn.guess)
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn(turn2.guess)
    expect(round.calculatePercentCorrect()).to.equal(50)
    round.takeTurn(turn3.guess)
    expect(round.calculatePercentCorrect()).to.equal(33)
  })

  it('should return a message once the round is over', function() {
    let turn = new Turn('sea otter', card1)
    let turn2 = new Turn('appendix', card2)
    let turn3 = new Turn('Lex', card3)
    round.takeTurn(turn.guess)
    round.takeTurn(turn2.guess)
    round.takeTurn(turn3.guess)
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  })
})