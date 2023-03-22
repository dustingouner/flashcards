const Turn = require('../src/Turn')

class Round {
  constructor(deckObj) {
    this.deck = deckObj
    this.currentCard = deckObj.cards[0]
    this.turns = 0

  }
  returnCurrentCard() {
    // console.log(this.currentCard)
    return this.currentCard
  }
  takeTurn(userGuess) {
    let turn = new Turn(this.currentCard, userGuess)
    this.currentCard = this.deck.cards[`${this.turns}`]
    this.turns += 1
    
    


  }
}

module.exports = Round