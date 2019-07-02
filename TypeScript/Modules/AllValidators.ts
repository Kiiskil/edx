export * from "./Validation";
export * from "./ZipCodeValidator";
export * from "./ParseIntBasedZipCodeValidator";

import {ZipCodeValidator} from "./ZipCodeValidator";
let myValidator = new ZipCodeValidator();

//imports can be renamed

import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let yourValidator = new ZCV();

//import the entire module into single variable
import * as validator from "./ZipCodeValidator";
let theirValidator = new validator.ZipCodeValidator();