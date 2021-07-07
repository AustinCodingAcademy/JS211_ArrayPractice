const cars = ["Ford", "Subaru", "Chevy", "Hyundai"]
console.log(cars.length)
const moreCars = ["BMW", "Kia", "Mercedes", "Honda"]
const totalCars = cars.concat(moreCars)
console.log(totalCars)
console.log(totalCars.indexOf("Honda"))
console.log(totalCars.lastIndexOf("Ford"))
const stringOfCars = (totalCars.join())
console.log(stringOfCars)
let carsFromString = stringOfCars.split(",")
console.log(carsFromString)
const carsInReverse = totalCars.reverse()
console.log(carsInReverse)
const sortedCars = carsInReverse.sort()
console.log(carsInReverse.indexOf('Chevy'))
console.log(sortedCars)
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4,6)
console.log(reptiles)
const removedReptiles = pets.splice(4,2, "hamster")
console.log(pets)
console.log(removedReptiles)
const removedPet = pets.pop()
console.log(removedPet, pets)
const putPetBack = pets.push(removedPet)
console.log(pets)
console.log(pets.shift(0))
console.log(pets.unshift("turtle"))
console.log(pets)
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
numbers.forEach(element =>console.log(element +2))
// const addTwo = (num) => {
//     return num 
// }
// console.log(addTwo(5))
// console.log(numbers.forEach(addTwo))


