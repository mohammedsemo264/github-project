interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    console.log(`Hello, ${person.name}! You are ${person.age}.`);
}

greet({ name: "Alice", age: 30 }); // Outputs: Hello, Alice! You are 30.
