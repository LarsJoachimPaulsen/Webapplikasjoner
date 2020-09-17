/**
 * 
 * Minner om objekter men enklere å finne igjen verdien, iterere, få størrelsen og legge til verdi
 * 
 */

const map = new Map();
const personList = [
  {
    id:1, 
    name: "Stian",
    age: 12
  },
  {
    id: 2,
    name: "Marius",
    age: 23
  },
  {
    id: 3,
    name: "Frode",
    age: 56
  }
]
console.log(map); // Map(0) {}

function addPerson(person) {
  const {id, name} = person;
  map.set(id, name); // map.set(key, value) => for å sette en verdi
}

personList.map(addPerson)

console.log(map); // Map(3) { 1 => 'Stian', 2 => 'Marius', 3 => 'Frode' }

/**
 * 
 * Kan sette en inital map basert på en array med arrays
 * 
 */

const initialList = [['1', 'string'],[true, 'boolean'], [1, 'number']];
const initialMap = new Map(initialList);
console.log(initialMap); // Map(3) { '1' => 'string', true => 'boolean', 1 => 'number' }

/**
 * 
 * Kan også bruke Object.entries for å generere en map
 * 
 */

 const marius = {
  name: 'Marius Wallin',
  age: 35,
  gender: 'Male',
}

console.log(Object.entries(marius)); // [ [ 'name', 'Marius Wallin' ], [ 'age', 35 ], [ 'gender', 'Male' ] ]

const mapFromEntries = new Map(Object.entries(marius));
console.log(mapFromEntries); // Map(3) { 'name' => 'Marius Wallin', 'age' => 35, 'gender' => 'Male' }

const revertMapToObject = Object.fromEntries(mapFromEntries) // { name: 'Marius Wallin', age: 35, gender: 'Male' }
console.log(revertMapToObject);

const mapToArray = Array.from(mapFromEntries);
console.log(mapToArray); // [ [ 'name', 'Marius Wallin' ], [ 'age', 35 ], [ 'gender', 'Male' ] ]


/**
 * 
 * Sette verdier med map.set(key, value) => key kan være number, string, boolean
 * 
 */

const anotherList = [['1', 'string'],[true, 'boolean'], [1, 'number']];

const anotherMap = new Map(anotherList);
console.log(anotherMap); // Map(3) { '1' => 'string', true => 'boolean', 1 => 'number' }
anotherMap.set(1, 'anotherNumber');
console.log(anotherMap); // Map(3) { '1' => 'string', true => 'boolean', 1 => 'anotherNumber' }

/**
 * 
 * Hente verdier i map
 * 
 */

 // has
 let hasValue = anotherMap.has(1);
 console.log(hasValue); // true

 // get
 let getValue = anotherMap.get('1');
 console.log(getValue); // string

 // size and delete
 console.log(anotherMap.size); // 3
 anotherMap.delete(1); // .delete(key)
 console.log(anotherMap.size); // 2

 // clear
 //anotherMap.clear()
 console.log(anotherMap.size); // 0

 // keys
 console.log(anotherMap.keys()); // [Map Iterator] { '1', true }

 // values
 console.log(anotherMap.values()) // [Map Iterator] { 'string', 'boolean' }

 /**
  * 
  * Iterere over verdier
  * 
  */

  anotherMap.forEach((value, key) => {
    console.log(`${key}: ${value}`) // 1: string true: boolean
  })

  // deconstruct key og value fra map
  for (const [key, value] of anotherMap) {
    console.log(`${key}: ${value}`)
  }
  

  // Objekter som key

  const person1 = { name: "user1" };
  const person2 = { name: "user2" };
  const identifier1 = "lorem";
  const identifier2 = "lorem2";

  const personIdentifier = new Map([
    [person1, identifier1],
    [person2, identifier2],
  ]);
  console.log(personIdentifier); // Map(2) { { name: 'user1' } => 'lorem', { name: 'user2' } => 'lorem2' }
  console.log(personIdentifier.get(person1)) // lorem

  /**
   * 
   * Sets => skiller seg fra Map ved at den ikke har "key" verdien. Er dermed mer lik Array
   * 
   */

   const set = new Set() // Set(0) {}

   set.add("value1");
   set.add("value2");
   set.add("value1");
   set.add("value3");

   console.log(set); // Set(3) { 'value1', 'value2', 'value3' }
   console.log(set.size); // 3
   console.log(set.has("value1")) // true
   console.log(set.delete("value3")) // true
   console.log(set.delete("value5")) // false
   console.log(set.clear())
   console.log(set.size) // 0

   const setFromArray = new Set([1,2,3,4,3]);
   console.log(setFromArray); // Set(4) { 1, 2, 3, 4 }
   const setToArray = [...setFromArray]; 
   console.log(setToArray); // [ 1, 2, 3, 4 ]

    for (const value of setFromArray) {
      console.log(value); // 1 2 3 4
    }