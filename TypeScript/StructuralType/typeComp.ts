//Comparing ATTRIBUTES
interface Named {
    name: string;
}

let x: Named;
//y's inferred type is {name:string; location: string;}
let y = { name: "Alice", location: "Seattle"};
x = y;
//To check whether y can be assigned to x, the compiler checks each property of x to find a cooresponding compatible property in y.
//In this case, y must have member called "Name" that is a string. ONly members of the TARGET type (x, in this case) are considered when cheking compatibility

//The same rule for assignment is used when checking function call arguments:

function greet(n: Named) {
    alert("HEllo, " +n.name);
}
greet(y); //This is ok

//Comparing FUNCTIONS

let a = (a:number) => 0;
let b = (b:number, s:string) => 0;

b = a; //OK
//a = b; //Not OK

//first thing to check is the parameter-list. Each member of a must have corresponding parameter in b with a compatible type in the b = a assignment.

let items = [1,2,3];

//Don't force these extra parameters as they are not used
items.forEach((item, index, array) => console.log(item));

//This is ok
items.forEach(item => console.log(item));


//RETURN TYPE TREATMENT
let m = () => ({name: "Alice"});
let n = () => ({name: "Alice", location: "Seattle"});

m = n; //OK
//n = m; //NOT ok because x() lacks a location property;

//ENUMS
enum Status {Ready, Waiting};
enum Color {Red, Green, Blue};

let statuss = Status.Ready;

//statuss = Color.Green; //Error

//CLASSES
//Classes have both static and instance type. When comparing classes, only members of the instance are compared
class Animal {
    feet: number;
    constructor(name: string, numFeet:number){}
}
class Size {
    feet:number;
    constructor(numFeet: number){}
}

let h: Animal;
let j: Size;

h = j; //OK
j = h; //OK

//TYPE INFERENCE
//When type inference is made of several different types, TS picks "best common type", aka that type which satisfies all types

let esim = [0,1, null]; //TS picks number

//Because the best common type has to be picekd from PROVIDED candidates, there are some cases where types share a common structure, but no 
//one type is the super type of all candidates.

let zoo = [new Rhino(), new Elephant(), new Snake()];

//Ideally we want the zzoo to infer type Animal, but there is no Animal on candidates. Way to do this is:

let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];

//Contextual typing

//inference might work "in other direction" too in some cases, aka contextual typing. It happens when the type of an expression is implied by its location.

window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button); //ERROR
}
//TS checker used the type of the window.onmousedown to infer the type of the right hand side of the function expression
//when it did so, it was able to infer the type of the mouseEvent parameter.
//If this function expression were not in a contextually typed position, mouseEvent would have type any

window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.button);//no error
}