//Using namespaces in multiple files requires usage of --outfile
//which requires usage of AMD- or SYSTEM-moduleloader (can't use CommonJS)
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