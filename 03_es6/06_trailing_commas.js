/**
 *
 * TRAILING COMMAS
 *
 */

 // Kan ha trailing commas uten at koden feiler eller at det endrer lengden på f.eks en array

 const trailingCommaArr = [1,2,];
 const trailingCommaArr2 = [1,2]
 console.log(trailingCommaArr.length === trailingCommaArr2.length) // true
 const trailingCommaObj = {value1: 1, value2: 2,}
 const trailingCommaFunc = (value1, value2,) => {} // trailingCommaFunc(1,2,)
