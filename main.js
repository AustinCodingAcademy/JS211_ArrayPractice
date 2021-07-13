const cars = ['Ford', 'Acura', 'Hyundai', 'Tesla', 'Ford']; 
console.log(cars.length); 

const moreCars = ['Toyota', 'Fiat', 'BMW', 'Honda']; 
const totalCars = cars.concat(moreCars);
console.log(totalCars); 
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford')); 

const stringOfCars = totalCars.join(); 
console.log(stringOfCars); 

const carsFromString = stringOfCars.split(','); 
console.log(carsFromString); 

const carsInReverse = totalCars.reverse(); 
console.log(carsInReverse); 

carsInReverse.sort();
console.log(carsInReverse); 
console.log(carsInReverse.indexOf('Acura')); 

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']; 
const reptiles = pets.slice(4,6)
console.log(reptiles); 
console.log(pets); 


let removedReptiles = pets.splice(4, 2, 'hamster');
console.log(removedReptiles); 
console.log(pets); 

const removedPet = pets.pop(); 
console.log(removedPet); 
console.log(pets); 

pets.push(removedPet); 
console.log(pets); 

const firstPet = pets.shift(); 
console.log(firstPet);

pets.unshift('turtle');
console.log(pets); 



const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

numbers.forEach(addTwo); 
console.log(numbers); 

function addTwo(num, index, arr){

 arr[index] = num + 2; 
  
}




