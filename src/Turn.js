class Turn {
  constructor(userGuess, cardObj) {
    this.card = cardObj
    this.guess = userGuess
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.card
  }
  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true
    } else {
      return false 
    }
  }
  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}


module.exports = Turn