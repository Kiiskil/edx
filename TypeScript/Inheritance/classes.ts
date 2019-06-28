class Greeter {
    greeting:string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(){
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);

class someClass {
    someNumber: number;
    someElement: Element;
    constructor(param1: Element){
        this.someElement = param1;
    }
    someMethod = () => {
        this.someNumber= 5;
    }

    get GetMethod() {
        //Only retur info from class
        return this.someNumber;
    }

    set SetMethod(param){
        this.someNumber = param;
    }
}

class ExtendedClass extends someClass {
    constructor(param1: Element) {
        //Super asks subclass to get the attributes and methods of base class
        super(param1);
    }
    someOtherMethod = () => {
        this.someNumber;
    }
}