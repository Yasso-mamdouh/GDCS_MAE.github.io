console.clear();
let a = 1_00; //100
let b = 2_00.5; //200.5
let c = 1e2; //100
let d = 2.4; //2.4

//get minimum of all numbers
console.log(Math.round(Math.min(a, b, c, d)));

//use a and d to get 10000
console.log(Math.pow(a, Math.round(d)));

//get integer 2 from d with 4 methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(parseInt(d)); //used to extract the integer part of decimal a number
console.log(Math.trunc(d));

//use b, d variables to get values 66.67 => string and 67 => number
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2));
console.log(Math.round(Math.trunc(b) / Math.ceil(d)));
