class Mediator {
  private colleagues: Colleague[] = [];

  register(colleague: Colleague): void {
    this.colleagues.push(colleague);
  }

  send(message: string, sender: Colleague): void {
    this.colleagues
      .filter((colleague) => colleague !== sender)
      .forEach((colleague) => colleague.receive(message));
  }
}

class Colleague {
  private mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
    this.mediator.register(this);
  }

  send(message: string): void {
    this.mediator.send(message, this);
  }

  receive(message: string): void {
    console.log(message);
  }
}

const testMediator = () => {
  const mediator = new Mediator();

  const colleague1 = new Colleague(mediator);
  const colleague2 = new Colleague(mediator);
  const colleague3 = new Colleague(mediator);

  colleague1.send("Hello World!");
  colleague2.send("Hi, colleagues!");
}

testMediator();