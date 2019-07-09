import * as _ from "lodash";
/* The import * as _ syntax tells the compiler to pull all 
avaialble functions from lodash and place them under the 
_ namespace of your module.

npm install lodash*/


//Declare your namespace by using the namespace keyword followed by the label you intend to use
//classes are the preferred containers for modules
class ArrayUtilities{
    //export means this function can be imported by other code
    reverseArray(array: Array<any>){
        //Function takes Array named array containing numbers as param
        return _.reverse(array.slice(0));
    }

    lastItemOfArray(array: Array<any>){
        return _.last(array.slice(0));
    }

    firstItemOfArray(array: Array<any>){
        return _.head(array.slice(0));
    }

    concatenateArray(array1: Array<any>, array2: Array<any>){
        return _.concat(array1,array2);
    }
}
export default new ArrayUtilities;

/* Note the use of the default keyword here. When you only have one 
export in a module, you use the default keyword to specify that 
when the module is imported without any parameters, it will return 
that content by default. You can have a module export more than 
one value, in which case you would omit the default keyword,
 and you would need to specify which portion of the module you 
 are importing when you import it */