class Human {
  name: string;
  surname: string;
  age: number;
  constructor (name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  fullname() {
    alert(this.name + ' ' + this.surname);
  }

  _age() {
    alert(this.name + ' is ' + this.age + ' years old.');
  }
}

window.onload = function () {
  var human = new Human('Kerem', 'Bozdas', 24);
  var human2 = new Human('Doğukan', "Kotan", 20)
  human.fullname();
  human._age();
}
