export class SomeClass {
    constructor(message: string){
        console.log(message);
    }
    interval: number = 1000;
    title: string = "Title";
    method1: Function = () => {

    }
    method2: Function = () => {
        
    }
}

//CLI-command
//tsc exampleClass.ts --declaration