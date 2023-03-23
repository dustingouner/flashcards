const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  var card1, card2, card3, deck, cardsArray
  let testNum = 0
  beforeEach(function() {
    testNum ++;
    console.log(`Test ${testNum}`);
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    cardsArray = [card1, card2, card3];
  });
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.instanceOf(Deck);
  });
  
  it('should store an array of cards', function() {
    expect(deck.cards).to.deep.equal(cardsArray)
  });

  it('it should be able to count how many cards are in the deck', function() {
    expect(deck.countCards()).to.deep.equal(cardsArray.length)
  });
})