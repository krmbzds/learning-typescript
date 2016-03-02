class Car {
  engine: string;
  year: number;
  constructor (engine: string, year: number) {
    this.engine = engine;
  }

  start() {
    alert('Engine starter: ' + this.engine);
  }

  stop() {
    alert('Engine stopped: ' + this.engine);
  }
}

window.onload = function () {
  var car = new Car('V8', 2005);
  car.start();
  car.stop();
}
