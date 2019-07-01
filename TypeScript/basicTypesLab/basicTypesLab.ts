let color1: string;
color1 = "green";
let squareSize1Num1: number = 100; //preferred styling of default values

//we can't assign number directly to the width and heigth of element, so let's use a string representing the whole style declaration
let squareSize1: string = `${ squareSize1Num1 }px`;
//Template strings (strings with backtick keys) can reference Number type variables from within String type variables to interpolate them with ${}.

let button1: Element = document.createElement('button1');
let div1: Element = document.createElement('div1');

button1.textContent = "Change color1";

//Declaring a function in variable and defining a default value to it. In this case, it will be the function itself.
let color1Change1: Function = (elem: Element, color1:string): boolean => {
    (<HTMLElement>elem).style.backgroundColor = color1;
    //(elem as HTMLElement).style.backgroundcolor1 = color1; //Same as above
    return true;
}

(div1 as HTMLElement).style.width = squareSize1;
(div1 as HTMLElement).style.height = squareSize1;

(button1 as HTMLElement).onclick = (event) => {
    color1Change1(div1, color1);
}

document.body.appendChild(button1);
document.body.appendChild(div1);
