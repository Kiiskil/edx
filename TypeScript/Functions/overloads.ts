let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x): any {
    //Check to see if param is an object or array
    //If so, they gave us deck and we'll pick a card
    if (typeof x == "object"){
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
    }
    //otherwise let them pick card
    else if(typeof x == "number"){
        let pickedSuit = Math.floor(x / 13);
        return {suit: suits[pickedSuit], card: x % 13};
    }
}

let myDeck = [{suit: "diamonds", card: 2},{suit: "spades", card: 10}, {suit:"hearts", card: 4}];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

//pickCard function will return two different things based on parameter passed in.
//To tell this to system, we're going to supply multiple function types for the same function as a lsit of overloads.

function pickCard_y(x: {suit: string, card: number;}[]):number;
function pickCard_y(x: number): {suit: string, card: number;};
function pickCard_y(x): any {
    //Check to see if param is an object or array
    //If so, they gave us deck and we'll pick a card
    if (typeof x == "object"){
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
    }
    //otherwise let them pick card
    else if(typeof x == "number"){
        let pickedSuit = Math.floor(x / 13);
        return {suit: suits[pickedSuit], card: x % 13};
    }
}

let myDeck_y = [{suit: "diamonds", card: 2},{suit: "spades", card: 10}, {suit:"hearts", card: 4}];
let pickedCard1_y = myDeck[pickCard_y(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2_y = pickCard_y(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
