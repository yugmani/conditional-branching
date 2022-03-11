// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let year = 2015;
if (year === 2015) console.log('You are right.');

// Alternative: Ternary Operator
year === 2015 ? console.log('You are right.') : console.log('You are wrong.');

year = '';
year = 0;
year = null;
year = undefined;
if (!year) {
  console.log(`${year} is falsy.`);
} else {
  console.log('This is truthy.');
}

// Alternative: Ternary Operator
!year ? console.log(`${year} is falsy.`) : console.log('This is truthy.');

// example
let age = 18;
age = 12;
age = 34;
let minorOrAdult = age >= 18 ? 'Adult' : 'Minor';
console.log(minorOrAdult);

// example
let time = 7;
time = 12;
// time = 15;
// time = 23;
// time = 24;
let message =
  time < 12
    ? 'Good Morning'
    : time === 12
    ? 'Good Noon'
    : time <= 18
    ? 'Good Evening'
    : time < 24
    ? 'Good Night'
    : 'I am sleeping at the moment!';

console.log(message);

// Conditional branching: if, '?'
// Tasks

// Show the sign

// Using if..else, write the code which gets a number via prompt and then shows in alert:

// uncomment userValue;
// const userValue = prompt('Enter a number...');

// if (userValue > 0) {
//   console.log(1);
// } else if (userValue < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

//using ternary Operator
// userValue > 0
//   ? console.log(1)
//   : userValue < 0
//   ? console.log(-1)
//   : console.log(0);

  // Rewrite 'if' into '?'

// Rewrite this if using the conditional operator '?':
let result;
let a = 3, b = 1;
result = (a + b < 4) 
  ? "Below"
  : "Over";

console.log(result);

// Rewrite 'if..else' into '?'

// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

let msg;
let login;
// login = "Employee";
// login = 'Director';
// login = "";

msg = (login == 'Employee')
  ? "Hello"
  : login == 'Director'
  ? "Greetings"
  : login == "Guest"
  ? "How are you?"
  : "Invalid"

console.log("User: "+msg);