// Types

class Person {
  name: string;
}

const person = new Person();
person.name = "Jane";

// Visibility
class Person2 {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person2 = new Person2("Jane");
console.log(person2.getName());
