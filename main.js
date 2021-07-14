let cars = [
"Ford",
"Chevy",
"Dodge",
"Toyota"    
];
console.log(cars.length)

let morecars = [
"Nissan",
"Hyundai",
"Kia",
"Honda"    
]

const array1 = ['Ford', 'Dodge', 'Chevy','Toyota'];
const array2 = ['Honda', 'Kia', 'Nissan','Hyundai'];
const array3 = cars.concat(morecars);

const carsmorecars = ['Ford', 'Honda', 'Dodge', 'Kia', 'Toyota','Hyundai','Chevy','Nissan'];

console.log(carsmorecars.indexOf('Dodge'));
// expected output: 4

// start from index 2
console.log(carsmorecars.indexOf('Honda', 2));
// expected output: -1

console.log(carsmorecars.indexOf('Ford'));
// expected output: 0

const carcompanys = ['Ford', 'Honda', 'Dodge', 'Kia', 'Toyota','Hyundai','Chevy','Nissan'];

const Ford = 'Ford';

console.log(`The index of the first "${Ford}" from the end is ${carcompanys.lastIndexOf(Ford)}`);

const stringofcars = [cars][morecars];

console.log(carcompanys.join(stringofcars));

let carsFromString = 'Ford! Chevy? Dodge. Toyota! Nissan? Hyundai. Kia Honda! '
let str = carsFromString.split(/[!,?,.]/);
console.log(str);

const forward = ['Ford', 'Chevy', 'Dodge', 'Toyota','Nissan','Hyundai','Kia','Honda'];
console.log('forward:', forward);
const carsInReverse = forward.reverse();
console.log('reversed:', forward);

const brands = ['Ford', 'Chevy', 'Dodge', 'Toyota','Nissan','Hyuundai','Kia','Honda'];
brands.sort();
console.log(brands);



const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake','lizard','bird'];

console.log(pets.slice(4, 6));

const removedPet = ['Dog', 'cat', 'fish', 'rabbit', 'snake','lizard','bird'];

console.log(removedPet.pop());

const animals = ['Dog', 'cat', 'fish','rabbit','snake','lizard'];
const animalName = animals.push('bird');

console.log(animalName);

console.log(animals);

animals.push('bird');

console.log(animals);

const pets2 = ['Dog','cat','fish','rabbit','snake','lizard','bird'];

const firstElement = pets2.shift();

console.log(firstElement);
// expected output: Array [2, 3]

const array4 = ['Dog','cat','fish','rabbit','snake','lizard','bird'];

console.log(array4.unshift('turtle'));


console.log(array4);

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
const copyItems = []
numbers.forEach(function(numbers){
    copyItems.push(numbers * 10)
  })
  







