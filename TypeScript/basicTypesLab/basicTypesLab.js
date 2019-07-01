var color;
color = "green";
var squareSizeNum = 100; //preferred styling of default values
//we can't assign number directly to the width and heigth of element, so let's use a string representing the whole style declaration
var squareSize = squareSizeNum + "px";
//Template strings (strings with backtick keys) can reference Number type variables from within String type variables to interpolate them with ${}.
var button = document.createElement('button');
var div = document.createElement('div');
button.textContent = "Change color";
//Declaring a function in variable and defining a default value to it. In this case, it will be the function itself.
var colorChange = function (elem, color) {
    elem.style.backgroundColor = color;
    //(elem as HTMLElement).style.backgroundColor = color; //Same as above
    return true;
};
div.style.width = squareSize;
div.style.height = squareSize;
button.onclick = function (event) {
    colorChange(div, color);
};
document.body.appendChild(button);
document.body.appendChild(div);
