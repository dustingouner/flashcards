const Turn = require('../src/Turn')

class Round {
  constructor(deckObj) {
    this.deck = deckObj
    this.currentCard = deckObj.cards[0]
    this.turns = 0
    this.incorrectGuesses = []
    this.percent = []


  }
  returnCurrentCard() {
    // console.log(this.currentCard)
    return this.currentCard
  }
  takeTurn(userGuess) {
    let turn = new Turn(this.currentCard, userGuess)
    this.currentCard = this.deck.cards[`${this.turns}`]
    this.turns += 1
    if(userGuess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push(this.currentCard.id)
      turn.giveFeedback()
    } else {
      turn.giveFeedback()
    }
  }
  calculatePercentCorrect() {
    let correctPercent = (this.turns - this.incorrectGuesses.length)/this.turns
    return Math.round(100 * correctPercent)
   
  }
}

module.exports = Round