"use strict";
exports.__esModule = true;
var dice_js_1 = require("./dice.js"); //default
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var dice = [];
//push four objects made according to interface to array
for (var index = 0; index < 4; index++) {
    dice.push({
        'div': document.createElement('div')
    });
}
dice.map(function (elem) {
    var newDie = new dice_js_1["default"](elem.div);
    console.log(newDie);
    var rndValue = getRandomIntInclusive(0, 5);
    newDie.rollDie(rndValue);
    document.body.appendChild(elem.div);
});
var rollButton = document.createElement('button');
rollButton.textContent = "Roll dices";
rollButton.onclick = function (event) {
    window.location.reload();
};
document.body.appendChild(rollButton);
//First we make an array (dice) of DieTypes (interface aka forced to certain type), then we create divs and assign them to DieType-object's properties (in for-loop)
//then we iterate over each element in dice and send array-element's div-property to DieRoller-constructor (aka create new instances of DieRoller which is a subclass of Die-class)
//then we use instanciated classes rollDie-method to get a random value (which is taken from Sides-enum)
//And then we append that array's div-element (which is also classes property) to HTML-document
//LAstly we make a new button, which jsut reloads the page
