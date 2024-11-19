// let age: number;
// age = 30;
// const userName = "Max1";
// // userName = 3;

// console.log(userName);

let appId = "abc";

const button = document.querySelector("button")!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) return n1 + n2;
  return;
}

function clickHandler(message: string) {
  //   let userName = "max";

  console.log("Clicked! " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You are welcome"));
}
