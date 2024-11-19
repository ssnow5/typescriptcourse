// Code goes here!

// const userName = "Max";
// // userName = "Max2";

// let age = 30;

// age = 29;
// let result;

// // function add(a: number, b: number) {
// //   result = a + b;
// //   return result;
// // }

// // console.log(result);
// // age = 40;
// // if (age > 30) {
// //   let isOld = true;
// // }

// // console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;
// console.log(add(5, 2));

// const printOutput: (a: string | number) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", (event) => {
//     console.log(event);
//   });
// }

// // printOutput(add(5, 2));
// printOutput(add(5));

const hobbies = ["Sports", "Cooking", "Reading"];
//console.log(hobbies[0]);

const activeHobbies = ["Hiking", ...hobbies];

// activeHobbies.push(hobbies[0], hobbies[1]);
//activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  firstName: "Max",
  age: 30,
};

const copiedPerson = { ...person };

console.log(copiedPerson);

const add = (...numbers: [number, number, number]) => {
  //   let result = 0;
  //   for (const num of numbers) {
  //     result += num;
  //   }

  return numbers.reduce((curResult, curValue) => curResult + curValue, 0);
};

const addNumbers = add(1, 2, 3);
console.log(addNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, remainingHobbies, hobbies);

const { firstName: userName, age } = person;
console.log(userName, age, person);
