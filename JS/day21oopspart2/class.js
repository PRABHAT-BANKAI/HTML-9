class Employee {
  constructor(userName, age, amount) {
    this.userName = userName;
    this.age = age;
    this.amount = amount;
  }

  money(){// protytpe methods
    console.log(this.amount)
  }
}

let henil = new Employee("henil", 12, 2000);
let ved = new Employee("ved", 12, 3000);

console.log(henil);
henil.money()

console.log(ved.money == henil.money)
