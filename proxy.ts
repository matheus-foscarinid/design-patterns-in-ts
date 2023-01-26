interface Subject {
  request(): void;
}

class RealSubject implements Subject {
  public request(): void {
    console.log('RealSubject: Handling request.');
  }
}

class ProxySample implements Subject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    console.log('Proxy: Checking access prior to firing a real request.');

    return true;
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}

const testProxy = () => {
  console.log('Client: Executing the client code with a real subject:');
  const realSubject = new RealSubject();
  realSubject.request();

  console.log('');

  console.log('Client: Executing the same client code with a proxy:');
  const proxy = new ProxySample(realSubject);
  proxy.request();
}

testProxy();
