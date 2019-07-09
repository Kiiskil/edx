"use strict";
exports.__esModule = true;
var module_1 = require("./module");
var instanceOfClass = new module_1.someClass();
var copyOfString = instanceOfClass.anotherString;
var module_2 = require("./module");
//let copyOfDefaultClass = new defaultClass(); //This gives an error, because class has been instanciated already on export
var copyOfDefaultClass = module_2["default"];
//Upon compiling, you don't have to compile every file, just the one that has only imports to it.
//tsc module2.ts in this case
