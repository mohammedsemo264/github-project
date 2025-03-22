class Example {
  constructor(name: string) {
    this.name = name;
  }

  describe(): string {
    return `This is an example ${this.name} description.`;
  }
}

const example = new Example("World");
console.log(example.describe());
