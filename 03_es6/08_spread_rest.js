// Rest parameters

function functionWithRest(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
functionWithRest(1, 2, 3, 4); // a = 1, b = 2, c = [3, 4]


/**
 *
 * SPREAD OPERATOR (sprer iterables utover)
 * Forenkler hverdagen en hel del og lesbarheten øker
 *
 */

function spread(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
spread(...[1, 2, 3]); // a = 1, b = 2, c = [3, 4]

/**
 *
 * DECONSTRUCTION => Mye brukt for å øke lesbarheten og forenkle kodeskrivingen
 *
 */

 // Basis => deconstructing array (beholder rekkefølgen)

 const data = [1,2,3];
 const [value1, value2, value3] = data;
 const oldValue1 = data[0];
 const oldValue2 = data[1];
 console.log(value1, value2, value3); // 1,2,3

 // Basis med default verdier

 const data2 = [2];
 const [first=1, second, third=3] = data2;
 console.log(first, second, third) // 1,2,3

 // Med SPREAD

 const data3 = [1,2,3,4,5];
 const [id, ...data3spread] = data3;
 console.log(id, data3spread); // 1, [2,3,4,5]

// Ignorere verdier

const data4 = [1,2,3,4];
const [first3, , ...data4spread] = data4;
console.log(first3, data4spread) // 1, [3,4]


// Nesting

const data5 = [1, [2, 3]];
const [first4, [second2, third2]] = data5;
console.log(first4, second2, third2) // 1,2,3

// Object deconstruction

const obj1 = {
  a1: 1,
  b1: 2,
  c1: 3
}

const {c1, b1, a1} = obj1; // må matche verdiene i et objekt og rekkefølgen har ikke noe å si
const oldA1 = obj1['a1'];
console.log(c1, b1, a1) // 3,2,1


// Object deconstructing => default verdier

const obj2 = {
  a2: 1,
  b2: 2
}

const {a2, b2 = 22, c2 = 3} = obj2;
console.log(a2, b2, c2) // 1, 2, 3


// Object deconstruction => spread

const obj3 = {
  a3: 1,
  b3: 2,
  c3: 3
}

const {a3, ...spread} = obj3;
console.log(a3, spread); // 1, {b3: 2, c3: 3}


// Object deconstruction => Rename

const obj4 = {
  a4: 1,
  b4: 2,
  c4: 3
}

const {a4, b4: bNew, c4: cNew} = obj4;
// Opprinnelig b4 vil ikke være tilgjengelig lengre
// console.log(a4, bNew, cNew, b4, c4) // 1,2,3,?,?

// Object deconstruction => Nesting

const obj5 = {
  a5: 1,
  b5: 2,
  c5: {
    v1: 'c5-one',
    v2: 'c5-two'
  }
}

const { a5, b5, c5: { v1 }} = obj5;
console.log(a5, b5, v1) // 1,2,'c5-one'

// const { a5, b5, ...c5 } = obj5;
//console.log(a5, b5, c5) // 1,2,{v1: 'c5-one', v2: 'c5-two'}

// Deconstruct params => function

function deconstructParams([school, {name, age = 99}]) {
  console.log(school); // 1
  console.log(name); // Marius Wallin
  console.log(age); // 35
}

deconstructParams(['Hiof', {name: 'Marius Wallin', age: 35}]);

/**
 *
 * Shallow Copy
 *
 */

const originalObj = {a: 1, b:2}

// Ta originale, legg til en verdi og lag en kopi
let oldCopy = Object.assign({}, originalObj, {c:3})

// Bruker spread til å "utvide" originalen og legger til ny verdi
let newCopy = {...originalObj, c:3}