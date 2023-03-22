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
    let turn = new Turn(card1, 'pug')
    let turn2 = new Turn(card2, 'gallbladder')
    round.takeTurn(turn.guess)
    expect(round.turns).to.equal(1)
    round.takeTurn(turn2.guess)
    expect(round.turns).to.equal(2)
  });

  it.skip('should go to the next card after a turn is taken', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    let turn = new Turn(card1, 'pug')
    let turn2 = new Turn(card2, 'gallbladder')
    let turn3 = new Turn(card3, 'William')
    round.takeTurn(turn.guess)
    expect(round.returnCurrentCard()).to.equal(card1)
    round.takeTurn(turn2.guess)
    expect(round.returnCurrentCard()).to.equal(card2)
    round.takeTurn(turn3.guess)
    expect(round.returnCurrentCard()).to.equal(card3)
  });

  it.skip('should record incorrect guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    let turn = new Turn(card1, 'pug')
    let turn2 = new Turn(card2, 'spleen')
    let turn3 = new Turn(card3, 'William')
    round.takeTurn(turn.guess)
    expect(round.incorrectGuesses[0]).to.equal(card1.id)
    round.takeTurn(turn2.guess)
    expect(round.incorrectGuesses[1]).to.equal(card2.id)
    round.takeTurn(turn3.guess)
    expect(round.incorrectGuesses[2]).to.equal(card3.id)
  });

  it.skip('should evaluate if the users guess is correct', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    let turn = new Turn(card1, 'sea otter')
    let turn2 = new Turn(card2, 'gallbladder')
    let turn3 = new Turn(card3, 'Fitzgerald')
    round.takeTurn(turn.guess)
    expect(turn.giveFeedback()).to.equal('correct!')
    round.takeTurn(turn2.guess)
    expect(turn.giveFeedback()).to.equal('correct!')
    round.takeTurn(turn3.guess)
    expect(turn.giveFeedback()).to.equal('correct!')
  });

  it('should evaluate if the users guess is incorrect', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    let turn = new Turn(card1, 'pug')
    let turn2 = new Turn(card2, 'appendix')
    let turn3 = new Turn(card3, 'Lex')
    round.takeTurn(turn.guess)
    expect(turn.giveFeedback()).to.equal('incorrect!')
    round.takeTurn(turn2.guess)
    expect(turn.giveFeedback()).to.equal('incorrect!')
    round.takeTurn(turn3.guess)
    expect(turn.giveFeedback()).to.equal('incorrect!')
  });



})