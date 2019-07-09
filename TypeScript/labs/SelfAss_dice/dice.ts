enum Sides {
    One,
    Two,
    Three,
    Four,
    Five,
    Six
}

class Die {
    div: Element;
    constructor(div: Element){
        this.div = div;
    }
}

class DieRoller extends Die {
    constructor(div: Element){
        super(div);
        (this.div as HTMLElement).style.width = squareSize;
        (this.div as HTMLElement).style.height = squareSize;
        (this.div as HTMLElement).style.border = squareBorder;
        (this.div as HTMLElement).style.textAlign = "center";
        (this.div as HTMLElement).style.verticalAlign = "middle";
    }
    rollDie(num: number): boolean{
        (this.div as HTMLElement).textContent = Sides[num];
        return true;
    }
}

interface DieTypes{
    'div': Element;
}

let getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

let dice: Array<DieTypes> = [];
let squareSizeNum: number = 100; //preferred styling of default values
let squareBorderNum: number = 3;

//we can't assign number directly to the width and heigth of element, so let's use a string representing the whole style declaration
let squareSize: string = `${ squareSizeNum }px`;
let squareBorder: string = `${ squareBorderNum }px solid black`;
//Template strings (strings with backtick keys) can reference Number type variables from within String type variables to interpolate them with ${}.

//push four objects made according to interface to array
for (let index: number = 0; index < 4; index++){
    dice.push({
        'div': document.createElement('div'),
    })
}

dice.map((elem) => {
    let newDie = new DieRoller(elem.div);
    let rndValue: number = getRandomIntInclusive(0,5);
    newDie.rollDie(rndValue);
    document.body.appendChild(elem.div);
})
let rollButton = document.createElement('button');
rollButton.textContent = "Roll dices";
(rollButton as HTMLElement).onclick = (event) => {
    window.location.reload();
}
document.body.appendChild(rollButton);

//First we make an array (dice) of DieTypes (interface aka forced to certain type), then we create divs and assign them to DieType-object's properties (in for-loop)
//then we iterate over each element in dice and send array-element's div-property to DieRoller-constructor (aka create new instances of DieRoller which is a subclass of Die-class)
//then we use instanciated classes rollDie-method to get a random value (which is taken from Sides-enum)
//And then we append that array's div-element (which is also classes property) to HTML-document
//LAstly we make a new button, which jsut reloads the page