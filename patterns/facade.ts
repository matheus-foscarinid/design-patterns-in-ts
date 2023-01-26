class SampleSystem {
  subsystem1: Subsystem1;
  subsystem2: Subsystem2;

  constructor() {
    this.subsystem1 = new Subsystem1();
    this.subsystem2 = new Subsystem2();
  }

  operation1() {
    console.log('Operation 1');
    this.subsystem1.operation1();
    this.subsystem2.operation1();
  }

  operation2() {
    console.log('Operation 2');
    this.subsystem1.operation2();
    this.subsystem2.operation2();
  }
}

class Subsystem1 {
  operation1() {
    console.log('Subsystem1: Operation 1');
  }

  operation2() {
    console.log('Subsystem1: Operation 2');
  }
}

class Subsystem2 {
  operation1() {
    console.log('Subsystem2: Operation 1');
  }

  operation2() {
    console.log('Subsystem2: Operation 2');
  }
}

class Facade {
  private complex: SampleSystem;

  constructor() {
    this.complex = new SampleSystem();
  }

  operation() {
    console.log('Facade: Starting operation');
    this.complex.operation1();
    console.log('');
    this.complex.operation2();
  }
}

const facade = new Facade();
facade.operation();
