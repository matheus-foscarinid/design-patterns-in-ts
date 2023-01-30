interface Observer {
  update: (data: any) => void;
}

class ConcreteObserverA implements Observer {
  update(data: any) {
    console.log(`ConcreteObserverA received data: ${data}`);
  }
}

class ConcreteObserverB implements Observer {
  update(data: any) {
    console.log(`ConcreteObserverB received data: ${data}`);
  }
}

class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const observerIndex = this.observers.indexOf(observer);
    this.observers.splice(observerIndex, 1);
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

const subject = new Subject();

const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();

subject.subscribe(observerA);
subject.subscribe(observerB);

subject.notify("Hello, World!");
