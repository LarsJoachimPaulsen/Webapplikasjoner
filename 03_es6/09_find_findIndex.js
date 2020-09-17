/**
 * 
 * FindIndex og Find brukes til blant annet å finne ut om en array inneholder en gitt verdi
 * eller ex. for å plukke ut et objekt fra en liste hvis det vi ser etter finnes
 * 
 * 
 */

const people = [
  {
    id:1, 
    name: "Stian"
  },
  {
    id: 2,
    name: "Marius"
  },
  {
    id: 3,
    name: "Stian"
  }
]

const stianIndex = people.findIndex(person => person.name === 'Stian');
const secondStianIndex = people.findIndex(
    (person, index) => person.name === "Stian" && index > 1
);
console.log(stianIndex,secondStianIndex); // 0, 2

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.find(e => e % 2 !== 0)); // første oddetall 1
console.log(numbers.reverse().find(e => e % 2 !== 0)); // siste oddetall 5
console.log(people.find(person => person.name === "Stian")); // {id: 1, name: 'Stian'}
console.log(people.find((person, index) => person.name === "Stian" && index > 1)); // {id: 3, name: 'Stian'}