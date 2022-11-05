import {Board} from 'board.js'

export class Player {
    hand = []
    constructor(deck, score, boardSlots) {
        this.hand = deck
        this.score = score
        this.board = Board(boardSlots)
    }

    DrawCard(deck) {
        //Draws a card from the specified deck
        this.hand.AddCard(deck.DrawTop())
    }

    PlayCard(index) {
        // Retrieves a card from hand
        card = this.hand.DrawIndex(index)
        this.board.PlaceCard(card)
    }

    Discard(card, deck) {
        // Adds Card to Discard Pile
        deck.AddCardTop(card)
    }
    
}