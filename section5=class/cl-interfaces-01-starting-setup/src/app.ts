// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

//type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name?: string;

  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n1?: string) {
    if (n1) {
      this.name = n1;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

// let user1: Greetable;

// user1 = {
//   name: "Max",
//   //   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Hi there - I am");

let user1: Greetable;
//user1 = new Person("Max");
user1 = new Person();
// user1.name = "Mina";

user1.greet("Hi there - I am");
console.log(user1);
