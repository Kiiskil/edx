"use strict";
//Module in TS is anything that has export or import statement
exports.__esModule = true;
//You can export basic variable
var someString = "string";
exports.someString = someString;
//You can export functions
var someMethod = function () {
};
exports.someMethod = someMethod;
function someFunction() {
}
exports.someFunction = someFunction;
var someClass = /** @class */ (function () {
    function someClass() {
        this.anotherString = "string as class property";
    }
    return someClass;
}());
exports.someClass = someClass;
//In TS every module has one to one file to module ratio,
//meaning you can't have more than one module in one file
//even though you can have multiple exports from one module
//Most often you'll see that people have one class as their default export from each module
var defaultClass = /** @class */ (function () {
    function defaultClass() {
    }
    return defaultClass;
}());
exports["default"] = new defaultClass();
//note the instanciation of class ON EXPORT
