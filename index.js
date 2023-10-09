// Create a car class
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case 'civic':
        return new Car(4, 'v6', 'grey');
      case 'honda':
        return new Car(2, 'v8', 'red');
    }
  }
}

class SUV {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SuvFactory {
  createCar(type) {
    switch (type) {
      case 'cx5':
        return new Car(4, 'v6', 'grey');
      case 'sante fe':
        return new Car(2, 'v8', 'red');
    }
  }
}

let carMixin = {
  revEngine() {
    console.log(`The ${this.engine} engine is doing Vrom Vrom!`);
  },
};

// Create
const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

// abstract factory
const autoManufactuter = (type, model) => {
  switch (type) {
    case 'car':
      return carFactory.createCar(model);
    case 'suv':
      return suvFactory.createCar(model);
  }
};

//const cx5 = autoManufactuter('suv', 'cx5');
//console.log(cx5);
Object.assign(Car.prototype, carMixin);
const honda = autoManufactuter('car', 'honda');
honda.revEngine();
