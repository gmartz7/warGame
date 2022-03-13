const gsuits = ["♠", "♣", "♥", "♦"]
const gvalues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const Card_Value_Key = {
   "2": 2,
   "3": 3,
   "4": 4,
   "5": 5,
   "6": 6,
   "7": 7,
   "8": 8,
   "9": 9,
   "10": 10,
   "J": 11,
   "Q": 12,
   "K": 13,
   "A": 14,
}

class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards
    }

    get numberOfCards() { 
        return this.cards.length
    }
    
    pop() {
        return this.cards.shift()
    }
    push(card) {
        this.cards.push(card)
    }
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random () * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards [i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
      
    }
  
    
    
}

function newDeck() {
    return gsuits.flatMap(suit => {
        return gvalues.map(value => {
            return new Card(suit, value)
        })
    })
}



let playerOneDeck, playerTwoDeck

startGame()
function startGame () {
const deck = new Deck
deck.shuffle() 


const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
playerOneDeck = new Deck(deck.cards.slice(0, deckMidpoint))
playerTwoDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

var currentPlayerOneCard = playerOneDeck.cards[0]
var currentPlayerTwoCard = playerTwoDeck.cards[0]

console.log(playerOneDeck)
console.log(playerTwoDeck)

flipCards() 
function flipCards() {
    const playerOneCard = playerOneDeck.pop()
    const playerTwoCard = playerTwoDeck.pop()
    console.log(currentPlayerOneCard)
    console.log(currentPlayerTwoCard)
    if (isRoundWinner(playerOneCard, playerTwoCard)) {
        console.log("Player 1 Win")
        playerOneDeck.push(playerOneCard)
        playerOneDeck.push(playerTwoCard)
    }else if (isRoundWinner(playerTwoCard, playerOneCard)) {
        console.log("Player 2 Win")
        playerTwoDeck.push(playerOneCard)
        playerTwoDeck.push(playerTwoCard)
    }else {
        console.log("Draw")
        playerOneDeck.push(playerOneCard)
        playerTwoDeck.push(playerTwoCard)
    }

}
function isRoundWinner(cardOne, CardTwo) {
    return Card_Value_Key[cardOne.value] > Card_Value_Key[CardTwo.value]
}

function isGameOver(deck) {
    return deck.numberOfCards === 0
}
}
