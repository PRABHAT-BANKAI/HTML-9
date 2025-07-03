// OOPS //Object-Oriented Programming System
// Abstraction // cheezo ko private rakhne mae help krta hai
// Inheritance // ek parent object  sae child object have accesss from parent object
// polymorphism // we can override objects methods
// encapsulation  // we have hide data in object

// factory function
// create object inside a function
// then update the object
// return object

// "this" keyword  always refers his object

// let example = { name: "henil", age: 12, organization: "bopal" };
// let example2 = { name: 'henil', age: 12, organization: 'bopal' }

// function Employee(userName, age, organization) {
//   let obj = {};

//   obj.name = userName;
//   obj.age = age;
//   obj.organization = organization;
//   obj.hello = function () {
//     console.log("Hello", this.name);
//   };
//   return obj;
// }

// let henil = Employee("henil", 12, "bopal");
// let ved = Employee("ved", 12, "amli");
// let mokshil = Employee("mokshil", 12, "paldi");

// console.log(henil);
// console.log(ved);
// console.log(mokshil);

// henil.hello();
// ved.hello();
// mokshil.hello();

// constructor Function
// "new" keyword helps to create object and return , and "this" keyword

function Employee(userName, age, organization) {
  this.name = userName;
  this.age = age;
  this.organization = organization;

  this.money = function (amount) {
    console.log(amount);
  };
}
Employee.prototype.show = function(){// show same space for every user 
   console.log(this.name);
}

let henil = new Employee("henil", 12, "bopal");
let ved = new Employee("ved", 12, "amli");
let mokshil = new Employee("mokshil", 12, "paldi");

console.log(henil);
console.log(ved);
console.log(mokshil);
henil.show()
henil.show();
ved.show();
mokshil.show();
mokshil.money(2000);



let array1 = [1,2]
let array2 = [2,3]

console.log(array1.map == array2.map)

console.log(henil.show == mokshil.show)
