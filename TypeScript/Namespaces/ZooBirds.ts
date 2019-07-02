///<reference path="ZooAnimal.ts" /> 
//reference is for compiler to know that there are more to this namespace. It's gonna do that when we specify outFile in compiler so you DO NOT NEED to tell to compile all files
namespace Zoo {
    export class Bird implements Animal {
        skinType= "Feather";
        isMammal(){
            return false;
        }
    }
}
let parrot = new Zoo.Bird(); //No need for parenthesis ()?
console.log(parrot.isMammal());

import rep = Zoo.Reptile; //import TYPE of class from certain namespace //ALIAS
let lizard: rep; //lizard is not instantiated here, i guess? Only referenced as type
console.log(lizard.skinType);
 
let samu = new rep();
console.log(samu.skinType);
