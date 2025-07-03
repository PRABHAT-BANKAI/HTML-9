// inheritance in constructor function 
// call // apply // bind 
function Animal(petName, color, breed) {
  this.petName = petName;
  this.color = color;
  this.breed = breed;
}
Animal.prototype.category = function (categoryInput) {
  console.log(`${this.petName} ${categoryInput}`);
};

function Dog(petName, color, breed) {
  Animal.call(this, petName, color, breed);
  this.sound = function (voice) {
    console.log(`Dog ${this.petName} ${voice}`);
  };
}
Dog.prototype = Object.create(Animal.prototype);
Cat.prototype = Object.create(Animal.prototype);
function Cat(petName, color, breed) {
  Animal.call(this, petName, color, breed);
  this.sound = function (voice) {
    console.log(`Cat ${this.petName} ${voice}`);
  };
}

let jorden = new Dog("jorden", "black", "husky");
let tom = new Cat("tom", "black", "persian");
console.log(tom);

console.log(jorden);

jorden.sound("bark");

jorden.category("omnivorous")
