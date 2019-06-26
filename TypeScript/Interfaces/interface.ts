function printLabel(labelledObj: {label: string}){
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//OR

interface LabelledValue {
    label: string;
}

function printLabel1(labelledObj: LabelledValue){
    console.log(labelledObj.label);
}

let myObj1 = {size: 10, label: "Size 10 label"};
printLabel(myObj1);

//Optional properties

interface SquareConfig {
    color? : string;
    width?: number;
}
//function name (interface_name:interface):{attributes}
function createSquare(config: SquareConfig):{color:string, area:number}{
    let newSquare = {color:"white", area:100};//these stick if not overwritten by interface
    if (config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color:"Black"});

