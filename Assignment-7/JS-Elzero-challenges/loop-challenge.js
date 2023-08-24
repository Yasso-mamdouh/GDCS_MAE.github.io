let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera", "Ameer"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samira",
];
let counter = 1;

document.write(`<h2>We have ${myAdmins.length} admins</h2>`);
document.write("<hr>");
for (let a = 0; a < myAdmins.length; a++) {
  if (myAdmins[a] === "Stop") {
    break;
  }
  document.write(`<div>`);
  document.write(`The Admin for Team ${a + 1} is ${myAdmins[a]}`);
  document.write(`<h3>Team members: </h3>`);
  for (let t = 0; t < myEmployees.length; t++) {
    if (myEmployees[t].charAt(0) == myAdmins[a].charAt(0)) {
      document.write(`<p>- ${counter} ${myEmployees[t]}</p>`);
      counter++;
    }
  }

  counter = 1;
  document.write(``);
  document.write(`</div>`);
  document.write("<hr>");
}
