//to describe the shape of libraries not written is TS we need to declare the API that the library exposes
//We call these declarations that don't define an implementation "ambient". Typically these are defined in d.ts-files.

//In node.js, most tasks are accomplished by loading one or more modules. We could define each module its own .d.ts-file with top-level export
//declarations, but it's more convenient to write the as one large .d.ts-file. To do so, we construct similar to ambient namespaces
//but we use the *module* keyword and the quoted name of the module which will be available to later import.
//see node.d.ts

///<reference path="node.d.ts" />
import * as URL from "url";
let myUrl = URL.parse("http://www.typescriptlang.org")

//Working with other external JS libraries
//You'll need to install that package
//"npm install lodash" for example

//and then tell the ( ? ) TS how to use that package typesafely (without it, TS doesnt know what TYPES functions are).
//AKA go to TypeSearch ( a DefinitelyTyped project maintained by community and MS), find your package (lodash in this example)
//and then find command which is going to give you a npm package that you're going to be able install
//to load up automatically all the types expsoed by the object that is generated by this package

//https://microsoft.github.io/TypeSearch/
//--> lodash
//https://www.npmjs.com/package/@types/lodash
//--> npm install --save @types/lodash
//After that, we can just import from lodash

import _ from "lodash";

//It'll find automatically all the modules within your node module folders based on just the keyword of the package itself

_.remove //lodash function

//When there is no predone packages, you'll have to use declare
//For example, library that deals with cookies

declare namespace cookie {
    interface Base {
        get: Function;
        set: Function;
    }
}

declare let Cookie: cookie.Base;
Cookie.set();