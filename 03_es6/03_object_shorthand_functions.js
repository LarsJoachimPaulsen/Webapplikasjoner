/**
 *
 * Object Shorthand og funksjoner
 *
 */

const myValue = 'value';
const anotherValue = 'anotherValue';

const objShorthand = {
  myValue,
  anotherValue,
  x: 2
}

const objNormal = {
  myValue: myValue,
  anotherValue: anotherValue,
  x: 2
}


/**
 *
 * Funksjoner i objekter
 *
 */

 const obj6 = {
   oldMethod: function (value) { return value },
   newMethod(value) { return value},
   arrow: (value) => { return value}
 }
