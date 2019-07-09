"use strict";
exports.__esModule = true;
var arrayUtils_js_1 = require("./arrayUtils.js");
/* Both import and export statements turn your code into a Module.
At this point variables created within this file can no longer
be referenced from the global scope - this is a good thing.
Also, this statement will likely cause Visual Studio Code to
throw an error on that line - don't worry, it is because you are
referencing the file as a .js. It will go away when you compile
the main.ts and get a main.js as the compiler output. Note that
you need to reference the file as a .js for the module loader
to be able to load the module, this is covered in the next exercise */
var array1 = [
    1,
    2,
    3,
    4,
    5
];
var array2 = [
    6,
    7,
    8,
    9,
    10
];
function callArrayUtil(util, array, array2) {
    if (array2 === void 0) { array2 = null; }
    document.getElementById("output").innerHTML = arrayUtils_js_1["default"][util](array, array2).toString();
}
var _loop_1 = function (property) {
    document.getElementById(property).onclick = function () {
        callArrayUtil(property, array1, array2);
    };
};
for (var property in arrayUtils_js_1["default"]) {
    _loop_1(property);
}
/* You can see that our property variable lines up to the ID of the
button, and to the function within ArrayUtilities that we are going
to call. This will give us the same result as we had when we were
applying the functions directly with the onclick html attribute,
except that the code is now completely isolated, and no longer
depends on global variables. */
document.getElementById("output").innerHTML = array1.toString();
/* As you can see, the main.ts module pulls the ArrayUtilities class
from your arrayUtils.ts file. */ 
