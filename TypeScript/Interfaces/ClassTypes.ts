interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m:number){ 

    };
}


//method describing
interface ClockInterfaceM {
    currentTime: Date;
    setTime(d:Date);
}

class ClockM implements ClockInterfaceM {
    currentTime: Date;
    setTime(d: Date){
        this.currentTime = d;
    }
    constructor(h: number, m: number){

    }
}

//Difference between the static and instance sides of classes
//this gives an error 
//"Class 'ClockS' incorrectly implements interface 'ClockConstructor'.Type 'ClockS' provides no match for the signature 'new (hour: number, minute: number): any'"

/* interface ClockConstructor {
    new(hour: number, minute: number);
}
class ClockS implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number){

    };
} */
//class has two sides: static and instance
//instead, it should be done like so, working directly with static side of class:
interface ClockConstructor {
    new(hour:number, minute: number):ClockInterfaceI
}
interface ClockInterfaceI{
    tick();
}

function CreateClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterfaceI {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterfaceI {
    constructor(h: number, m:number){

    }
    tick(){
        console.log("Beep Beep");
    }
}
class AnalogClock implements ClockInterfaceI {
    constructor(h: number, m:number){

    }
    tick(){
        console.log("Tick Tock");
    }
}

let digital = CreateClock(DigitalClock, 12,17);
let analog = CreateClock(AnalogClock, 7,32);

//createClocks firs parameter is of type ClockConstructor so it checks that classa has correct consctuctor signature
//clockConstrucors new-signature is of type ClockInterface, so classes has to have tick()-method
