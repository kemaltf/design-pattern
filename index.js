// Create a car class
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class carFactory {
  createCar(type) {
    switch (type) {
      case 'civic':
        return new Car(4, 'v6', 'grey');
      case 'honda':
        return new Car(2, 'v8', 'red');
    }
  }
}

// Create
const factory = new carFactory();
const myHonda = factory.createCar('honda');

console.log(myHonda);
