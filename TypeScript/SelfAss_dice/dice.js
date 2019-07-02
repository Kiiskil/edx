var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sides;
(function (Sides) {
    Sides[Sides["One"] = 0] = "One";
    Sides[Sides["Two"] = 1] = "Two";
    Sides[Sides["Three"] = 2] = "Three";
    Sides[Sides["Four"] = 3] = "Four";
    Sides[Sides["Five"] = 4] = "Five";
    Sides[Sides["Six"] = 5] = "Six";
})(Sides || (Sides = {}));
var Die = /** @class */ (function () {
    function Die(div) {
        this.div = div;
    }
    return Die;
}());
var DieRoller = /** @class */ (function (_super) {
    __extends(DieRoller, _super);
    function DieRoller(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = squareSize;
        _this.div.style.height = squareSize;
        _this.div.style.border = squareBorder;
        _this.div.style.textAlign = "center";
        _this.div.style.verticalAlign = "middle";
        return _this;
    }
    DieRoller.prototype.rollDie = function (num) {
        this.div.textContent = Sides[num];
        return true;
    };
    return DieRoller;
}(Die));
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var dice = [];
var squareSizeNum = 100; //preferred styling of default values
var squareBorderNum = 3;
//we can't assign number directly to the width and heigth of element, so let's use a string representing the whole style declaration
var squareSize = squareSizeNum + "px";
var squareBorder = squareBorderNum + "px solid black";
//Template strings (strings with backtick keys) can reference Number type variables from within String type variables to interpolate them with ${}.
//push four objects made according to interface to array
for (var index = 0; index < 4; index++) {
    dice.push({
        'div': document.createElement('div')
    });
}
dice.map(function (elem) {
    var newDie = new DieRoller(elem.div);
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
