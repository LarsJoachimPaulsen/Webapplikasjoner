import myDefault, {add, myVal, obj} from './01_export.js'
// overstyrer navnet fra named export med 'as' keyword
//import myDefault, {add, myVal as anotherVal, obj} from './01_export.js'

console.log(add(1,myVal))
//console.log(add(1,anotherVal))
console.log(myVal = 1); // error siden myVal blir eksponert som en const
console.log(obj);
obj.id = 2;
console.log(obj); // overstyrer den importerte verdien