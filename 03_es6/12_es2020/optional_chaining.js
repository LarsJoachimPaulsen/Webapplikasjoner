/**
 * 
 * Brukes for å sjekke om en verdi i et objekt er 'null' eller undefined da det ofte
 * skjer når vi henter noe fra API eller jobber med "state" i React. Generelt sett
 * er dette en penere måte så slipper man ex. nedenfor
 * 
 */

// normal
// if(user && user.address && user.address.street) {
//   console.log(user.address.street)
// }

const user = {
  address: null
};

console.log('user:', JSON.stringify(user));
console.log('user.address:', JSON.stringify(user.address));

// Virker ikke uten ?. => Error
console.log('user.address.street:', JSON.stringify(user.address?.street));

// user: {"address": null}
// user.address: null
// user.address.street: undefined
