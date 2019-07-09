/// <reference path="extendedNamespacesLab_part2.ts" />

//In oreder to get both files, --outfile flag has to be used
//Declare your namespace by using the namespace keyword followed by the label you intend to use
namespace ArrayUtilities{
    //export means this function can be imported by other code
    export function firstItemOfArray(array: Array<number>){
        return array.slice(0).shift();
    }

    export function concatenateArray(array1: Array<number>, array2: Array<number>){
        return array1.concat(array2);
    }
}

