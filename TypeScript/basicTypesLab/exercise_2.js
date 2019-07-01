var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Orange"] = 3] = "Orange";
    //Why not array? Enums are handy because they can be referenced by both their numeric key and their value to obtain it's counterpart.
})(Colors || (Colors = {}));
var colorChange = /** @class */ (function () {
    function colorChange(elem) {
        this.elem = elem;
    }
    //Declaring a function in variable and defining a default value to it. In this case, it will be the function itself.
    colorChange.prototype.colorChange = function (color) {
        this.elem.style.backgroundColor = color;
        //(elem as HTMLElement).style.backgroundColor = color; //Same as above
        return true;
    };
    return colorChange;
}());
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
//Iterate over each object in array and 
elementSets.map(function (elem, index) {
    var colorChangeClass = new colorChange(elem.div);
    elem.button.textContent = "Change color";
    elem.div.style.width = squareSize;
    elem.div.style.height = squareSize;
    elem.button.onclick = function (event) {
        colorChangeClass.colorChange(Colors[index]);
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
