define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    //Declare your namespace by using the namespace keyword followed by the label you intend to use
    //classes are the preferred containers for modules
    var ArrayUtilities = /** @class */ (function () {
        function ArrayUtilities() {
        }
        //export means this function can be imported by other code
        ArrayUtilities.prototype.reverseArray = function (array) {
            //Function takes Array named array containing numbers as param
            return array.slice(0).reverse();
        };
        ArrayUtilities.prototype.lastItemOfArray = function (array) {
            return array.slice(0).pop();
        };
        ArrayUtilities.prototype.firstItemOfArray = function (array) {
            return array.slice(0).shift();
        };
        ArrayUtilities.prototype.concatenateArray = function (array1, array2) {
            return array1.concat(array2);
        };
        return ArrayUtilities;
    }());
    exports["default"] = new ArrayUtilities;
});
/* Note the use of the default keyword here. When you only have one
export in a module, you use the default keyword to specify that
when the module is imported without any parameters, it will return
that content by default. You can have a module export more than
one value, in which case you would omit the default keyword,
 and you would need to specify which portion of the module you
 are importing when you import it */ 
/* 
 Open up your command prompt or terminal, navigate to your
  modulesLabRequire folder, and type tsc --module amd main.ts. 
  The --module flag tells the compiler to change the compile target.
   In this case we are telling TypeScript to produce AMD compiled 
   files suitable for use in Require.js.
 */