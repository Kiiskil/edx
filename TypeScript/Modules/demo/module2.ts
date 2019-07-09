import someString from "./module"
import someMethod from "./module"
import someInterface from "./module"

import {someClass, someFunction} from "./module"

let instanceOfClass = new someClass();
let copyOfString = instanceOfClass.anotherString;

import defaultClass from "./module"
//let copyOfDefaultClass = new defaultClass(); //This gives an error, because class has been instanciated already on export
let copyOfDefaultClass = defaultClass;

//Upon compiling, you don't have to compile every file, just the one that has only imports to it.
//tsc module2.ts in this case
//compiler will create files from each file

//DO NOT USE NAMESPACES IN MODULES
//BEST IS TO USE ONLY MODULES
