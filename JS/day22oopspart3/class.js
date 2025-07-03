class Animal {
  #petName;
  constructor(petName, color, breed) {
    let dogFood = "padeegiri";
    this.#petName = petName;
    this.color = color;
    this.breed = breed;
    this.food = function () {
      console.log(dogFood);
    };
  }

  category(categoryInput) {
    console.log(`${this.#petName} ${categoryInput} `);
  }
}

class Dog extends Animal {
  constructor(petName, color, breed) {
    super(petName, color, breed);
  }
  category() {
    console.log("prank");
  }
}

let jorden = new Dog("jorden", "black", "husky");

jorden.petName = "boji";
console.log(jorden);
jorden.food();

jorden.category("harbivorous");
