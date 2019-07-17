//Instanceof type guards are a way of narrowing down types using their constructor function.

interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
    constructor( private numSpaces: number){}
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor( private value: string){}
    getPaddingString() {
        return this.value;
    }
}
function getRandomPadder() {
    return Math.random() < 0.5 ?
    new SpaceRepeatingPadder(4) :
    new StringPadder("  ");
}

//Type is 'SpaceRepeatingPadder | StringPadder'
let padder: Padder = getRandomPadder();

if(padder instanceof SpaceRepeatingPadder) {
    padder; //type narrowed to 'SpaceRepeatingPadder'
}
if(padder instanceof StringPadder) {
    padder; //type narrowed to 'StringPadder'
}

/**
 * The right side of the instance needs to be a constructor function, and TS will narrow it down to:
 * 1. The type od the function's prototype property if its type is not any
 * 2. The union of types returned by that type's construct signatures
 * 
 * in that order
 */