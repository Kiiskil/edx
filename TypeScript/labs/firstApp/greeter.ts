class Student implements Person {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName){
        this.fullName = firstName+ " " + middleInitial+" "+lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Student){
    return "Hello, " + person.firstName+ " "+ person.middleInitial+ " "+ person.lastName;
}
//var user = "Jane User"; //plain JS
//let user = {firstName: "Jane", lastName: "User"}; //only interface
let user = new Student("Jane", "M.", "User"); //class in use too, but
document.body.innerHTML = greeter(user);