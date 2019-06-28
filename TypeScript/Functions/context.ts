//THIS

//Since TS is a superset of JS, devs need to learn to use this correctly.
//In JS, "this" is a variable that's set when function is called.

/* let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker(); 

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
*/

//notice that "createCardPicker" is a function that returns a function.
//This will give an error. This is because "this" being used in the function created by "createCardPicker" will be set to "window" instead of our "deck" object.
//That's because we call cardPicker on it's own, and top-level non-method syntax will use "window" to do that.

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        //NOTE: the line below is now an arrow function, allowing us to capture "this" right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

//If you use --noImplicitThis flag when compiling, it will point out that "this" in "this.suits[pickedSuit]" is of type any.