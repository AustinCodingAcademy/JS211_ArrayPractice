//  ***********console.log()**********************

const cars = ["Ford", "Range Rover", "Mclaren", "Mercedes"];
console.log(cars.length);

const moreCars =["lambo", "tesla", "chevy", "honda"];
console.log(moreCars.length);

//  ***********Concat()**********************

console.log(cars.concat(moreCars));

const totalCars = cars.concat(moreCars);

console.log(totalCars.length);

//  ***********indexOf()**********************

console.log(totalCars.indexOf("honda"));

//  ***********lastIndexOf()**********************

console.log(totalCars.lastIndexOf("Ford"));

//  ***********join()**********************

const stringOfCars = totalCars.join()

console.log(stringOfCars);

//  ***********Split()**********************

const carsFromString = stringOfCars.split()

console.log(carsFromString);

//  ***********reverse**********************

const carsInReverse = totalCars.reverse();

console.log(carsInReverse);

//  ***********Slice()**********************


const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

const reptiles = pets.slice(4,6);

 console.log(reptiles);

 console.log(pets);

//  ***********Splice()**********************

const removedReptiles = pets.splice(4, 2, 'hamster');

removedReptiles

console.log(pets)


//***********pop()**********************

const removedPet = pets.pop()

console.log(removedPet)

console.log(pets)

//***********push()**********************

pets.push(removedPet) 

console.log(pets)


//***********Shift()**********************

console.log(pets.shift([0]));


//***********unshift()**********************

pets.unshift('turtle',);

console.log(pets)

//***********forEach()**********************

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

numbers.forEach(num => {
  console.log(num + 2)
})

console.log(numbers)