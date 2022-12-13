function Person(first, last,age, eye){

    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;




}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

var person = new Person("Alba", "Lara", 45, "Red");
// console.log("🚀 ~ file: objectes.js ~ line 17 ~ person", person.firstName)
console.log( person.firstName);




