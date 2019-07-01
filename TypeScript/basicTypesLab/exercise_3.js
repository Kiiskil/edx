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
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Orange"] = 3] = "Orange";
    //Why not array? Enums are handy because they can be referenced by both their numeric key and their value to obtain it's counterpart.
})(Colors || (Colors = {}));
var colorChange = /** @class */ (function () {
    function colorChange(div) {
        this.div = div;
    }
    //Declaring a function in variable and defining a default value to it. In this case, it will be the function itself.
    colorChange.prototype.changeColor = function (color) {
        if (typeof (color) === "number") {
            return true;
        }
        this.div.style.backgroundColor = color;
        //(elem as HTMLElement).style.backgroundColor = color; //Same as above
        return true;
    };
    return colorChange;
}());
var numericColor = /** @class */ (function (_super) {
    __extends(numericColor, _super);
    function numericColor(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = squareSize;
        _this.div.style.height = squareSize;
        return _this;
    }
    numericColor.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = Colors[color];
        return true;
    };
    numericColor.Colors = Colors;
    return numericColor;
}(colorChange));
var elementSets = [];
var squareSizeNum = 100; //preferred styling of default values
//we can't assign number directly to the width and heigth of element, so let's use a string representing the whole style declaration
var squareSize = squareSizeNum + "px";
//Template strings (strings with backtick keys) can reference Number type variables from within String type variables to interpolate them with ${}.
//push four objects made according to interface to array
for (var index = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//Iterate over each object in array and 
elementSets.map(function (elem, index) {
    //Bind div to new anonym class
    var colorChangeClass = new numericColor(elem.div);
    elem.button.textContent = "Change color";
    //Give classes div a size
    elem.div.style.width = squareSize;
    elem.div.style.height = squareSize;
    //Give classes button a function which changes classes property (color) by random
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(getRandomIntInclusive(0, 3));
    };
    //Create the elements and append them to document
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
