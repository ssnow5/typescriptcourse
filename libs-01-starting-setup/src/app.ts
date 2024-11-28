// Code goes here!

//declare var GLOBAL: any;

//import _ from "lodash";

// console.log(_.shuffle([1, 2, 3]));
// console.log("testing");

//console.log(GLOBAL);

import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./prodct.model";

const products = [
  { title: "A Carpert", price: 29.99 },
  { title: " A Book", price: 19.99 },
];

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProd);
  }
});

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// const p1 = new Product("A Book", 12.99);
// console.log(p1.getInformation());
