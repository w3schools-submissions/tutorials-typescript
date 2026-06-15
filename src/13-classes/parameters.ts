// Properties
class Person3 {
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person3 = new Person3("Jane");
console.log(person3.getName());

// Readonly
class Person4 {
  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person4 = new Person4("Jane");
console.log(person4.getName());
