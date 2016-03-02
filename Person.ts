interface Person {
  name: string;
  surname: string;
  age: number;
  kids: number;
  calcPets: () => number;
  makeYounger: (years: number) => void;
  greet: (msg: string) => string;
}

var p: Person = {
  name: 'John',
  surname: 'Smith',
  age: 19,
  kids: 1,
  calcPets: function () {
    return this.kids * 2;
  },
  makeYounger: function (years: number) {
    this.age -= years;
  },
  greet: function (msg: string) {
    return msg + ', ' + this.name
  }

}

console.log(p.age);
p.makeYounger(1);
console.log(p.age);
console.log(`${p.name} has ${p.calcPets()} pets.`);
