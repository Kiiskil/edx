var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}
//var user = "Jane User"; //plain JS
//let user = {firstName: "Jane", lastName: "User"}; //only interface
var user = new Student("Jane", "M.", "User"); //class in use too, but
document.body.innerHTML = greeter(user);
