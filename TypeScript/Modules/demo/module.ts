//Module in TS is anything that has export or import statement

//You can export basic variable
let someString: string = "string";

//this is going to be default export from this module. If you don't specify what you're trying to export from the module, it'll give this.
export {someString};

//You can export functions
let someMethod = () => {

}
export {someMethod};

export function someFunction () {

}
export class someClass {
    anotherString: string = "string as class property"
}

interface someInterface {

}
export {someInterface};

//In TS every module has one to one file to module ratio,
//meaning you can't have more than one module in one file
//even though you can have multiple exports from one module

//Most often you'll see that people have one class as their default export from each module
class defaultClass {

}
export default new defaultClass();
//note the instanciation of class ON EXPORT