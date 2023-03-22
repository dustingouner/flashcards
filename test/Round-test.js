const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let testNum = 0
  beforeEach(function() {
    testNum ++;
    console.log(`Test ${testNum}`)
  });

  it.skip('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it.skip('should return the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  });

  it.skip('should be able to keep track of the number of turns', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turns).to.equal(0)
  });

  it.skip('should increase the number of turns by one each time a turn occurs', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    let turn = new Turn('pug', card1)
    let turn2 = new Turn('capybara', card2)
    round.takeTurn(turn.guess)
    expect(round.turns).to.equal(1)
    round.takeTurn(turn2.guess)
    expect(round.turns).to.equal(2)
  });

  it('should go to the next card after a turn is taken', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    let turn = new Turn('pug', card1)
    let turn2 = new Turn('gallbladder', card2)
    let turn3 = new Turn('William', card3)
    round.takeTurn(turn.guess)
    expect(round.returnCurrentCard()).to.equal(card1)
    round.takeTurn(turn2.guess)
    expect(round.returnCurrentCard()).to.equal(card2)
    round.takeTurn(turn3.guess)
    expect(round.returnCurrentCard()).to.equal(card3)
  })


})