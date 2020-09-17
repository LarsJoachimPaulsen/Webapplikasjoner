/**
 *
 * ARROW FUNCTIONS
 *
 */

const implisittReturn = () => 'EcmaScript'; // => { return 'EcmaScript'}
const simpleOperation = (x) => x * x; // Trenger ikke { ... } eller return når det ikke gjøres noe annet enn å returnere en verdi
const simpleOperation2 = x => x * x; // Kan også fjerne () rundt param
const multipleOperations = x => { const y = x * x; return y; }; // Må bruke { ... }
const multipleParams = (x, y) => x * y; // Flere params krever ()
const defaultParam = (x = 10) => x * x; // Kan bruke default som ved vanlig funksjoner
const arrowRest = (a, b, ...rest) => [a, b, rest]; // arrowRest(1,2,3,4,5,6) // [ 1, 2, [3, 4,5,6] ]
const objectLiteral = x => ({value: x}); // Må bruke () rundt retur verdien. objectLitera(1337) gir {value: 1337}
