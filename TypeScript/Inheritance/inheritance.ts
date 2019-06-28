class Animal {
    name: string;
    constructor(theName: string) {this.name = theName;}
    move(distanceInMeters: number = 0){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
//Derived classes that contain constructor must call super() which will execute the constructor function on the base class
//Also derived classes override the move-method on the base class
class Snake extends Animal {
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters = 5){
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters = 45){
        console.log("Galloping....");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palonimo");

sam.move();
tom.move(34);

class Control {
    //since state is private, only descendants of Control can implement SelectableControl. 
    //This is because only descendants of Control will have a state private member that originates in the same declaration,
    //which is a requirement for private members to be compatible
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select(){}
}

class TextBox extends Control{
    select(){}
}
class Image1 {
    select(){}
}
class Location1{
    select(){}
}