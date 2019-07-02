///<reference path="ZooAnimal.ts" />
namespace Zoo {
    export class Reptile implements Animal { //Note that we need the *export* here to be able to access this class and instantiate objects of the Reptile type
        skinType = "Scales";
        isMammal(){
            return false;
        }

    }
}
