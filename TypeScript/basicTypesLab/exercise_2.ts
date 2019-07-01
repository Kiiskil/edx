//Declare an interface to hold div and button created earlier. Doing this so we can reference this interface as a type in next section.
interface ElementSet {
    'div': Element,
    'button': Element
}

enum Colors {
    Green,
    Red,
    Blue,
    Orange
    //Why not array? Enums are handy because they can be referenced by both their numeric key and their value to obtain it's counterpart.
}

class colorChange {
    div: Element; //This variable is getting scoped to this.div and it will be an element
    constructor(div: Element){
        this.div = div;
    }
    //Declaring a function in variable and defining a default value to it. In this case, it will be the function itself.
    changeColor(color:string): boolean {
        (<HTMLElement>this.div).style.backgroundColor = color;
        //(elem as HTMLElement).style.backgroundColor = color; //Same as above
        return true;
    }
}

let elementSets : Array<ElementSet> = [];
let squareSizeNum: number = 100; //preferred styling of default values

//we can't assign number directly to the width and heigth of element, so let's use a string representing the whole style declaration
let squareSize: string = `${ squareSizeNum }px`;
//Template strings (strings with backtick keys) can reference Number type variables from within String type variables to interpolate them with ${}.

//push four objects made according to interface to array
for (let index: number = 0; index < 4; index++){
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    })
}

//Iterate over each object in array and 
elementSets.map( (elem, index) =>{
    //Bind div to new anonym class
    let colorChangeClass = new colorChange(elem.div);
    elem.button.textContent = "Change color";

    //Give classes div a size
    (elem.div as HTMLElement).style.width = squareSize;
    (elem.div as HTMLElement).style.height = squareSize;

    //Give classes button a function which changes classes property
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(Colors[index]);
    }
    //Create the elements and append them to document
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})
