 /**
 *
 * CONDITIONALS
 *
 */

 // condition ? exprIfTrue : exprIfFalse

const age = 22;

if (age > 22) {
  console.log('above 22');
} else {
  console.log('less than 22');
}

// Inline if-else
age > 22 ? console.log('above 22') : console.log('less than 22');

age > 20 && console.log(age); // 22
age > 22 || console.log("Less than 22"); // Less than 22

// Nested

let isStudent = false;
let isSenior = true;
let price = isStudent ? 8 : isSenior ? 6 : 10
console.log(price); // 6
