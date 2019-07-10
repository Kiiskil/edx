/* ///<reference path="stylingProp.ts" /> 
!!! See stylinProp.ts for explanation */
namespace stylingProp{
    //styling properties of dice
    let squareSizeNum: number = 100; //preferred styling of default values
    let squareBorderNum: number = 3;
    
    //Template strings (strings with backtick keys) can reference Number type variables from within String type variables to interpolate them with ${}.
    //we can't assign number directly to the width and heigth of element, so let's use a string representing the whole style declaration
    export let squareSize: string = `${ squareSizeNum }px`;
    export let squareBorder: string = `${ squareBorderNum }px solid black`;

    export enum Sides {
        One,
        Two,
        Three,
        Four,
        Five,
        Six
    }
}
interface DieTypes{
    'div': Element;
}
export {DieTypes};
class Die {
    div: Element;
    
    constructor(div: Element){
        this.div = div;
    }
}

class DieRoller extends Die {
    constructor(div: Element){
        super(div);
        (this.div as HTMLElement).style.width = stylingProp.squareSize;
        (this.div as HTMLElement).style.height = stylingProp.squareSize;
        (this.div as HTMLElement).style.border = stylingProp.squareBorder;
        (this.div as HTMLElement).style.textAlign = "center";
        (this.div as HTMLElement).style.verticalAlign = "middle";
    }
    rollDie(num: number): boolean{
        (this.div as HTMLElement).textContent = stylingProp.Sides[num];
        return true;
    }
}

export default DieRoller;
