let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// 1
console.log(my.slice(zero, ++counter).reverse());
//console.log(`zero: ${zero}, counter: ${counter}`);
// 2
console.log(my.slice(++zero, --counter).reverse());
//console.log(`zero: ${zero}, counter: ${counter}`);
// 3 "Elzero"
console.log(
  `${my[--counter].slice(--zero, counter)}${my[++zero].slice(counter)}`
);
//console.log(`zero: ${zero}, counter: ${counter}`);
// ro
console.log(
  `${my[zero].slice(-counter, -zero)}${my[zero].slice(-zero).toUpperCase()}`
);
//console.log(`zero: ${zero}, counter: ${counter}`);
