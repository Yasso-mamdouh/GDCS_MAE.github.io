let a = "Elzero Web School";
// use only chain of methods in your solutions

// include [slice, charAt] methods to get 'zero'
console.log(a.slice(2, 6));

// return H 8-Times
console.log(a.charAt(13).repeat(8).toUpperCase());

// return array with 'Elzero'
console.log(a.split(" ", 1));

// use substr and template literals to get 'Elzero School'
console.log(`${a.substr(0, 6)} ${a.substr(11, 6)}`);

// first and last characters are lowerCase, unlike the rest of inner characters 'upperCase'
console.log(
  `${a.charAt(0).toLowerCase()}${a.substr(1, a.length - 2).toUpperCase()}${a
    .charAt(a.length - 1)
    .toLowerCase()}`
);

//console.log(a.charAt(a.length-1));
//console.log(a.substr(1, a.length -2));
