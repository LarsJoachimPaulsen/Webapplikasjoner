/**
 *
 * OVERLOADS, NAMED, DEFAULTS
 *
 */


// Overloads

function overloads(a, b) {
  console.log(a);
  console.log(b);
}

overloads(1); // a = 1, b = undefined
overloads(1, 2, 3, 4); // a = 1, b = 2, 3 & 4 = ignored


// Default params

function def(a = 11, b = '22') {
  console.log(a);
  console.log(b);
}
def(); // a = 11, b = '22'
def(undefined, 2); // a = 11, b = 2
def(1, 2, 3, 4); // a = 1, b = 2, 3 & 4 = ignored
def(,2) // syntax error


// Named

function named({x, z}) {
  console.log(x);
  console.log(z);
}

//named(); // error
named(2,3); // undefined
named(x=2,z=3); // undefined
//named({2,3}); // error
named({x:2,z:3}); // 2 3