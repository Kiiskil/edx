import DieRoller from './dice.js' //default
import { DieTypes } from './dice.js' //declared

import * as _ from "lodash"; //External library named lodash
import * as Chance from "chance";



let getRandomIntInclusive: Function = (min, max) => {
    return Chance().integer({min,max});
}

let dice: Array<DieTypes> = [];

//push four objects made according to interface to array
for (let index: number = 0; index < 4; index++){
    dice.push({
        'div': document.createElement('div'),
    })
}

//Using lodash to iterate over dice-array
let rollDice: Function = () => {
    _.map(dice, elem => {
        let newDie = new DieRoller(elem.div);
        console.log(newDie);
        let rndValue: number = getRandomIntInclusive(0,5);
        newDie.rollDie(rndValue);
        document.body.appendChild(elem.div);
    })
}
let rollButton = document.createElement('button');
rollButton.textContent = "Roll dices";
(rollButton as HTMLElement).onclick = (event) => {
    rollDice();
}
document.body.appendChild(rollButton);
rollDice();

//First we make an array (dice) of DieTypes (interface aka forced to certain type), then we create divs and assign them to DieType-object's properties (in for-loop)
//then we iterate over each element in dice and send array-element's div-property to DieRoller-constructor (aka create new instances of DieRoller which is a subclass of Die-class)
//then we use instanciated classes rollDie-method to get a random value (which is taken from Sides-enum)
//And then we append that array's div-element (which is also classes property) to HTML-document
//LAstly we make a new button, which jsut reloads the page