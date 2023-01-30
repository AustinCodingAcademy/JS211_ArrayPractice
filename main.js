//length
const car = ["Ford", "GM", "Subaru", "Jeep"];
var car_length = car.length;
console.log(car_length);

//concat two arrays 
const moreCars = ["Tesla", "Toyota", "RAM", "Honda"];
totalCars = car.concat(moreCars);
console.log(totalCars);

//.indexOf()

console.log(totalCars.indexOf("Honda"));

console.log(totalCars.lastIndexOf("Ford"));

//.join()

const stringOfCars = totalCars.join('_'); //joining delimiter (_)
console.log(stringOfCars);
//const stringOfCars_delim = totalCars.join('_');
//console.log(stringOfCars_delim);


//.split()

var carsFromString = stringOfCars.split('_'); //split the string by the delimiter(,)
console.log(carsFromString);

//.reverse()

const carsInReverse = totalCars.reverse(); //reverse of totalcars array
console.log(carsInReverse);
carsInReverse[0] = 'Tesla';
console.log(totalCars[0]);

//.sort()

carsInReverse.sort();
console.log(carsInReverse); //sorts arrays in alphabetical order
console.log(carsInReverse.indexOf('Ford')); //to find the index of predicted array at index 0

//.slice()

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];
const reptiles = pets.slice(4, 6);
console.log(reptiles);
console.log(pets);
//.slice() method runs a shadow copy of a portion of an array inro a new array object selected frin start to end. The original array will not be modified.(source: mdn docs)

//.splice()
const removedRepltiles = pets.splice(3, 2, 'hamster', 'rat');
console.log(removedRepltiles);
console.log(pets);

//removed 2 elements starting from index 4
//console.log(removedRepltiles, pets);
//This method can used to remove/replace elements in an array. The original will be modified.

//.pop()

var removedPet = pets.pop('bird');
console.log(pets);
console.log(removedPet);

//.push()

var removedPet = pets.push('bird');
console.log(pets);

//.shiift()

const firstElement = pets.shift();
console.log(firstElement, pets);

//unshift()

const firstElement1 = pets.unshift('turtle');
console.log(pets);

//.forEach()
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

numbers.forEach(addTwo); // requires callbackfn and has three parameter values: num, index, arr

function addTwo(num, index, arr) { 
    console.log('a[' + index + ' ] = ' + (num+2)); // adding two to each indexes of array
}
console.log(numbers);








