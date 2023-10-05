let instance = null;

// Create a car class
class Car {
  constructor(doors, engine, color) {
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      return instance;
    }
  }
}

// Create
const civic = new Car(4, 'v6', 'grey');
const cx5 = new Car(6, 'v8', 'red');

console.log(civic);
console.log(cx5);
