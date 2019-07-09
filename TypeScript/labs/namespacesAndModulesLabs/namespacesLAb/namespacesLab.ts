//Declare your namespace by using the namespace keyword followed by the label you intend to use
namespace ArrayUtilities{
    //export means this function can be imported by other code
    export function reverseArray(array: Array<number>){
        //Function takes Array named array containing numbers as param
        return array.slice(0).reverse();
    }

    export function lastItemOfArray(array: Array<number>){
        return array.slice(0).pop();
    }

    export function firstItemOfArray(array: Array<number>){
        return array.slice(0).shift();
    }

    export function concatenateArray(array1: Array<number>, array2: Array<number>){
        return array1.concat(array2);
    }
}

