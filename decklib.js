class Deck {
    constructor() {
        this.deck = [];
        thisresult_cards = [];

    }

    generate_deck() {
        let card = (suit, value) => {
            this.name = `${value} of ${suit}`;
            this.suit = suit;
            this.value = value;

            return { name: this.name, suit: this.suit, value: this.value };
        };

        let values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];

        for (let s = 0; s < suits.length; s++) {
            for (let v = 0; v < values.length; v++) {
                this.deck.push(card(suits[s], values[v]));
            }
        }
    }
}