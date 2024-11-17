function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// let someValue: undefined;

let combinedValues: (x: number, y: number) => number;

combinedValues = add;
// combinedValues = printResult;
// combinedValues = 5;

console.log(combinedValues(8, 8));
