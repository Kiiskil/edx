//Declaration files are saved in .d.ts-files. 
//Declarations are used to describe code that exists elsewhere using the *declare* keyword. 
//The goal of this is to be able to use this code in TS applications without having to rewrite the code in TS

//IF a file has d.ts extension then each root level definition must have *declare* keyword prefixed to it. 
//This tells the dev that there will be no code omitted by TS. DEv need to make sure that the code exists at runtime.

//example; we have this JS-function somewhere (message.js)

//if you want to call this function in TS-code, TS will not recognize it by default: it does not know its name or params.
export declare function showMessage(message: string);
//now you wont get any compile errors

//Anything allowed in .d.ts-files may appear in a .ts-file, BUT not the other way around.
//.d.ts-files can contain ONLY code that does not generate JS-output in output
//interfaces are allowed, because they disappear completely after compile
//Const enums are also allowed, unlike ordinary enums

//Common practise is to see a top-level *declare* and then all definitions inside it as they are therefore declarations too.

declare module Something {
    var x;
}

//we can use the compiler to generate declaration files quickly ( see exampleClass.ts)