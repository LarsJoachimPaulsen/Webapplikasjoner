/**
 *
 * Map => iterere over verdier og returnere et nytt Array
 *
 */

const baseArray = Array.from("mariuswallin");
//console.log(baseArray);
/* [
  'm', 'a', 'r', 'i',
  'u', 's', 'w', 'a',
  'l', 'l', 'i', 'n'
] */

function arrayFrom() {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return results;
}
var valuesAsArr = arrayFrom('value1', 'value2', 'valu3');
console.log(valuesAsArr);

https://www.javascripttutorial.net/es6/array-from/


const plates = [
    {
      name: "Frokost",
      foods: [
        {
          name: "Brødskiver",
          calories: "45",
        },
        {
          name: "Melk",
          calories: "45",
        },
        {
          name: "Pålegg",
          calories: "45",
        },
      ],
    },
    {
      name: "Middag",
      foods: [
        {
          name: "Fisk",
          calories: "145",
        },
        {
          name: "Poteter",
          calories: "245",
        },
        {
          name: "Grønnsaker",
          calories: "45",
        },
      ],
    },
  ];

// Map

const cart = [100,10,25,200];
function calcMva() {
  return cart.map(price => price*1.25)
}

function cartNormal() {
  let cartWithMva = [];
  for(let i = 0; i < cart.length; i++) {
    cartWithMva.push(cart[i]*1.25)
  }
  return cartWithMva;
}

function calories(plate) {
  let caloriesTotal = 0;
  plate.foods.forEach((food) => {
    caloriesTotal = caloriesTotal + parseInt(food.calories);
  });
  let foodTypes = plate.foods
    .map((food) => food.name)
    .join(", ");
  return {
    name: `${plate.name} (${foodTypes}) - ${caloriesTotal}kcal`,
  };
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

let upperCased = baseArray.map((letter) => letter.toUpperCase()).join(''); // MARIUSWALLIN
let capitalized = ["marius", "trude"].map(capitalize); // ['Marius', 'Trude']
let todaysEating = plates.map(calories);
//console.log(upperCased);
//console.log(capitalized);
//console.log(todaysEating);

// Reduce

/**
 * total => verdien som aggregeres (du har med deg hele tiden)
 * current => verdien du jobber med nå
 * index => optional. Viser indexen
 *
 * Viktig å tenke på er startverdien. Hvis ingen startverdi settes så blir det ingen index 0
 *
 */

function showMeTheNumbers(total, current, index) {
    console.log(`\n------------- RUNDE ${index} -------------\n`)
    if(index === 0) {
        console.log(`Startverdien for total er: ${total}`)
    }
    console.log(`Verdien du jobber med nå er: ${current}`)
    console.log(`Totalen du jobber med nå er: ${total}`)
    return total + current;
}

let total = [2,4,8].reduce(showMeTheNumbers, 0);
// console.log(total); // 14

const obj2 = [1,2,1,1,4,5,6,6,1];

const countDuplicates = ((objectHoldingDuplicates, current) => {
    // Ser om verdien finnes i objektet og bumper med 1 om den finnes
    objectHoldingDuplicates[current] = objectHoldingDuplicates[current] + 1 || 1
    // if(objectHoldingDuplicates[current]) {
    //     objectHoldingDuplicates[current] += 1;
    // } else {
    //     objectHoldingDuplicates[current] = 1;
    // }
    // returnerer oppdatert objekt
    return objectHoldingDuplicates;
})

const duplicatesOnly = entry => entry[1] > 1

const duplicatesOnlyLong = (entry) => {
    let [, value] = entry;
    // let key = entry[0]
    // let value = entry[1]
    if(value > 1) {
        return entry;
    }
}

let countedValues = Object.entries(obj2.reduce(countDuplicates, {}));
let duplicates = countedValues.filter(duplicatesOnly);
duplicates.forEach(duplicate => console.log(`Verdien ${duplicate[0]} ble duplisert ${duplicate[1]} ganger`))


// Filter

const arr = [1,2,3,4];
const newArr = arr.filter(value => value > 2);

// Intersection

const arr1 = [1,2,3,4];
const arr2 = [2,4,5,6];

let intersection = arr1.filter(arr1value => arr2.includes(arr1value));

// Difference (what is in left array and not i both or in the right)

let difference = arr1.filter(arr1value => !arr2.includes(arr1value));

// Unique values (not shared once)

let notSharedValues = arr1
                 .filter(arr1value => !arr2.includes(arr1value))
                 .concat(arr2.filter(arr2value => !arr1.includes(arrvalue)));


// Union

let union = [...arr1, ...arr2];
let uniqueUnion = [...new Set([...arr1, ...arr2)];

