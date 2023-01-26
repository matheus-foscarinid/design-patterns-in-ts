interface Car {
  drive(): void;
}

class Ferrari implements Car {
  drive() {
    console.log('Driving a Ferrari!');
  }
}

class BMW implements Car {
  drive() {
    console.log("Driving a BMW!");
  }
}

class CarFactory {
  static createCar(type: string): Car {
    switch (type) {
      case 'Ferrari':
        return new Ferrari();
      case 'BMW':
        return new BMW();
      default:
        throw new Error('Invalid car type!');
    }
  }
}

const myFerrari = CarFactory.createCar('Ferrari');
myFerrari.drive();

const myBMW = CarFactory.createCar('BMW');
myBMW.drive();
