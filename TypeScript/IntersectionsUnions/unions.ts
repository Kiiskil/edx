//Intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.
//Typically you'll see intersections used for mixins.

//unions

/**
 * Takes a string and adds "padding" to the left.
 * If "padding" is a string, then "padding" is appended to the left side.
 * If "padding" is a number, the that number of spaces is added to the left side
 */

function padLeft(value:string, padding: any){
    if(typeof padding === "number"){
        return Array(padding + 1).join(" ") + value;
    }
    if(typeof padding === "string"){
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); //returns "    Hello world"

let intentedString = padLeft("Hello world", true); //Passes at compile, fails at runtime
//Because padding is type of "any", TS is fin with boolean "true"

/** In traditional OOP, we might abstract over the two types by creating a hierarchy of types. While 
 * this is much more explicit, it's also a bit of a overkill. One of the nice things about original padLeft was that
 * we were able to pass in primitives. That meant usage is much simpler and more concise.
 * 
 * Instead of any, we can use *union* type for the padding parameter  */

//function padLeft(value: string, padding: string | number){...};
//??? AKA union is just fancy name for "OR"

interface Bird {
    fly();
    layEggs();
}
interface Fish {
    swim();
    layEggs();
}

/* function getSmallPet(): Fish | Bird {
    //....
}

let pet = getSmallPet();
pet.layEggs(); //Okay
//pet.swim(); //Errors */

/**Type Guards and assertions types
 * Union types are useful for modeling situations when values can overlap in types they can take on.
 * What happens when we need to know specifically whether we have a Fish? A common idiom in JS to differentiate between two possible values is to 
 * check for the presence of a member. As we mentioned, you can only access members that are guaranteed to be in all the
 * constituents of a union type.
 */
function getSmallPet(): Fish | Bird {
    //....
}
let pet = getSmallPet();

/* //Each of these property accesses will cause an error
if(pet.swim){
    pet.swim();
}
else if(pet.fly){
    pet.fly();
} */

//To get working code, we'll need to use type assertion
if((<Fish>pet).swim){
    (<Fish>pet).swim();
}
else if((<Bird>pet).fly){
    (<Bird>pet).fly();
}
/**Notice how we had to use type assertion multiple times. It would be much better if once we performed the check, we could know the type of pet within each branch.
 * TS has what is called a *Type Guard*. A *Type Guard* is some expression that performs a runtime check that guarantees the type in some scope. 
 * To define a type guard, we simply need to define a function whose return type is a /TYPE PREDICATE:/
 * */
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
 /**
  * /pet is Fish/ is our type predicate in this example. A predicate takes the form *parameterName is Type*, where *parametereName* 
  * must be the name of a parameter from the current function signature.
  * 
  * Anytime isFish() is called with some variable, TS will narrow that variable to that specific type if the original type is compatible.
  */

  //Bot call to "swim" and "fly" are now okay
  //NOtice htah TS not only knows that *pet* is a *Fish* in the if-branch; it also knows that in the else-branch, you don't have a*Fish*,
  //so it must have a *Bird*

if (isFish(pet)){
    pet.swim();
}
else {
    pet.fly();
}

//padLeft that uses union types with predicates

function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}

function padLeft_1(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding +1).join(" ") + value;
    }
    if(isString(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${ padding }'.`);
}

//However, having to define a function to figure out if a type is a primitive is kind of pain. Luckily, you don't need to abstract "typeof x === "number"" into 
//its own function because TS will recognize it as a type guard in its own. That means we could just write these checks inline.

function padLeft_2(value: string, padding: string | number) {
    if( typeof padding === "number" ) {
        return Array(padding +1).join(" ") + value;
    }
    if( typeof padding === "string" ) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${ padding }'.`);
}

/**
 * these *typeof type guards* are recognized in two different forms: 'typeof v === "typename" ' and 'typeof v !== "typename" ', 
 * where "typename" must be "number", "string", "boolean", or "symbol". While TS won't stop you from comparing to other strings, 
 * the language won't recognize those expressions as type guards.
 */


