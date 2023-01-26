
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public randomMethod() {
    console.log('Im a random method');
  }

  public anotherRandomMethod() {
    console.log('Im another random method');
  }
}


const testSingleton = () => {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  s1.randomMethod();
  s2.anotherRandomMethod();

  if (s1 === s2) {
    console.log('Yeah, its a singleton!');
    return;
  }
  
  console.log('Nop, its not a singleton!');
}

testSingleton();
