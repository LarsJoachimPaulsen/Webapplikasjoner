import * as calc from './03_exportAll.js' // importerer alle og gir dem en 'prefix'
import { add } from './03_exportAll.js' // importerer kun en named export

console.log(calc.add(1,2)) // 3
console.log(add(1,2)) // 3
console.log(divide(1,2)) // Error => finner den ikke
