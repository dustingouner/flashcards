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
    this.turns += 1
    // console.log(userGuess)
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    } 
      this.currentCard = this.deck.cards[this.turns]
      return turn.giveFeedback()
    }
  
  calculatePercentCorrect() {
    let correctPercent = (this.turns - this.incorrectGuesses.length)/this.turns
    return Math.round(100 * correctPercent)
  }
  endRound() {
    let message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    console.log(message)
    console.timeLog("Game Timer")
    return message
  }
}


module.exports = Round