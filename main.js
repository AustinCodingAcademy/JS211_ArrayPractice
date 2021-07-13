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

const words = [stringofcars];

const carcarsFromString =.split('Ford');
console.log(carsfromstring);



