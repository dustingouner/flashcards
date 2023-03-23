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
    let turn = new Turn(userGuess, this.currentCard)
    this.currentCard = this.deck.cards[this.turns]
    this.turns += 1
    console.log(userGuess)
    if(userGuess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push(this.currentCard.id)
      return turn.giveFeedback()
    } else {
      return turn.giveFeedback()
    }
  }
  calculatePercentCorrect() {
    let correctPercent = (this.turns - this.incorrectGuesses.length)/this.turns
    return Math.round(100 * correctPercent)
  }
  endRound() {
    const message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    console.log(message)
    return message
  }
}

module.exports = Round