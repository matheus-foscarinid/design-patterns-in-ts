interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

class ConcreteBuilder implements Builder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  public reset(): void {
    this.product = new Product();
  }

  public producePartA(): void {
    this.product.parts.push('PartA1');
  }

  public producePartB(): void {
    this.product.parts.push('PartB1');
  }

  public producePartC(): void {
    this.product.parts.push('PartC1');
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();

    return result;
  }
}

class Product {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}`);
  }
}

const testBuilder = () => {
  const builder = new ConcreteBuilder();

  console.log('\n - Complete product:');
  builder.producePartA();
  builder.producePartB();
  builder.producePartC();
  builder.getProduct().listParts();

  console.log('\n - Default product:');
  builder.producePartA();
  builder.getProduct().listParts();

  console.log('\n - Custom product:');
  builder.producePartA();
  builder.producePartB();
  builder.getProduct().listParts();
}

testBuilder();
