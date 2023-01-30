import { Subject } from 'rxjs';

class ConcreteObserverA {
  update(data: any) {
    console.log(`ConcreteObserverA received data: ${data}`);
  }
}

class ConcreteObserverB {
  update(data: any) {
    console.log(`ConcreteObserverB received data: ${data}`);
  }
}

const subject = new Subject<any>();

const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();

subject.subscribe(observerA.update);
subject.subscribe(observerB.update);

subject.next("Hello, World!");