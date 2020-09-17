/**
 * 
 * Brukes for å undersøke om en verdi er null eller undefined
 * Fungerer litt likt som || men der || er en logical operator (sjekker truthy eller falsy) på en verdi
 * så ser ?? kun etter undefined eller null
 * 
 * Unngår utfordringer med truthy og falsy ex. 
 * 
 * let text = '';
 * text || 'noe annet'; // "noe annet"
 * 
 * text ?? 'noe annet'; // ''
 * 
 */


console.log('undefined:', undefined ?? 'other');
console.log('null:', null ?? 'other');
console.log('"":', '' ?? 'other');
console.log('0:', 0 ?? 'other');
console.log('false:', false ?? 'other');

// undefined: other
// null: other

// "":
// 0: 0
// false: false
