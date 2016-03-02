interface MyInterface {
  (x: number): number
}

var square: MyInterface = (num) => num * num;

console.log(square(2));
