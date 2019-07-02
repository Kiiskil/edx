namespace Zoo {
    export interface Animal { //Note that we do ???NOT??? (BS) need the *export* here since this interface will only be accessible by entities from within the Zoo namespace
        skinType: string;
        isMammal(): boolean;
    }
}

//We can use concatenated ouput using the --outFile flag to compile all of the input into a single JS-file
