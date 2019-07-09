//Type inference
//TS assumes the type, if not explicitly told otherwise

let someString = "this is a string";
let someNumber = 1;

let arrayOfNumbers = [0,1,null];

//Type assertion
 let unDeclaredType: any = "This is a string"; // unDeclaredType is of type "any"

 let lenghtOfString: number = (unDeclaredType as string).length;
 //my favorite
 lenghtOfString = (<string>unDeclaredType).length;

 //interfaces

 interface squareDescriptor {
     "name": string,
     "size": number
 }

 //Method accepting interface
 //Object passed into to function is declared as squareDescriptor, so the object will have squareDescriptors properties
let squareFn: Function = (square:squareDescriptor) => {
    return square.name;
}

let square = {
    "name": "a square",
    "size": 20
}

let executedFn = squareFn(square);

//Class using interface
class squareClass implements squareDescriptor {
    name: string = " a name"
    size: number = 20
}

//varaible using interface

let square2 : squareDescriptor;



