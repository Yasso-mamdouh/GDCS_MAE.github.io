let a = 10;
/* 
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");
 */
let st = "Elzero Web School";

let st2 = String(st.length*2);
//console.log(st2);
if(st2 === "34"){
    console.log("Good");
}

let st3 = ()=>{
  for(let i = 0; i < st.length; i++){
    if(st[i].toLowerCase() === "w"){
      let char = "w";
      return char;
    }
  }
};
//console.log(st3()); 
if (st3() === "w") {
  console.log("Good");
}


let st4 = typeof(!st)
//console.log(st4);
if( st4 !== "string"){
  console.log("Good");
}

let st5 = `${typeof st.length}`.charAt(0).toUpperCase()+`${typeof st.length}`.slice(1);
//console.log(st5);
if( st5 === "Number"){
  console.log("Good");
};

let st6 = st.slice(0,6).repeat(2);
//console.log(st6);
if( st6 === "ElzeroElzero"){
  console.log("Good");
}
