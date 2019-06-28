//named function
function add(x,y){
    return x + y;
}

//Anonymous function
let myAdd = function(x,y) {
    return x +y;
}

//capturing variables aka using variables outside function
let z = 100;

function addToZ(x,y){
    return x + y +z;
}

//previous written again with declared types

function add2(x: number, y: number){
    return x + y;
}
let myAdd2 = function(x: number, y: number): number {
    return x+ y;
}

//Writing the function type

let myAdd3: (x: number, y: number) => number =
    function(x:number, y:number): number {
        return x + y;
    };

//Function's type has two parts: the type of the arguments and the return type. We write out the parameter types just like parameter list,
//giving each parameter a name and type. The same could be written:

let myAdd4: (baseValue: number, increment: number) => number = //basically the description of function
    function(x: number, y: number):number { return x + y; } //basically the function itself

//return value is after the fat arrow between parameters and return type.

//OPTIONAL AND DEFAULT PARAMETERS

function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("bob"); //Error, too few parameters
let result2 = buildName("Bob","Adams","sr."); //Error, too many parameters
let result3 = buildName("Bob", "Adams"); //Bingo

//in javascript, every parameter is optional. Same done in TS:

function buildName1(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + " " + lastName; 
    }
    else {
        return firstName;
    }
}

let result11 = buildName1("bob"); //works now
let result21 = buildName1("Bob","Adams","sr."); //Error, too many parameters
let result31 = buildName1("Bob", "Adams"); //Bingo


//Default values
function buildName2(firstName: string, lastName: "Builder") {
    if (lastName) {
        return firstName + " " + lastName; 
    }
    else {
        return firstName;
    }
}

let result12 = buildName1("bob"); //works now, "Bob Builder"
let result22 = buildName1("Bob","Adams","sr."); //Error, too many parameters
let result32 = buildName1("Bob", "Adams"); //Bingo, "Bob Adams"

//Rest parameters

function buildName3(firstName: string, ...restOfName: string[]){
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName3("Joseph", "Samuel", "Lucas", "McKenzie");

//The ellipsis(...) is used in typed function too:

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
