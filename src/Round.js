class Round {
  constructor(deckObj) {
    this.deck = deckObj
    this.currentCard = deckObj.cards[0]

  }
  returnCurrentCard() {
    // console.log(this.currentCard)
    return this.currentCard
  }
}

module.exports = Round