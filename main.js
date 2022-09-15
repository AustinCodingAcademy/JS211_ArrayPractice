let cars = ["Ford", "Mini Cooper", "BMW", "Audi"]
let moreCars = ["Toyota", "Nissan", "Chevy", "Honda"]
// console.log(cars.length)

let totalCars = cars.concat(moreCars)
// console.log(totalCars)
// console.log(totalCars.indexOf('Toyota'))

let stringOfCars = totalCars.join()
// console.log(stringOfCars)

let carsFromString = stringOfCars.split(',')
// console.log(carsFromString)

let carsInReverse = totalCars.reverse()
// console.log(carsInReverse)

// console.log(carsInReverse.sort())
// console.log(carsInReverse.indexOf('Mini Cooper'))

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
// console.log(pets.slice(4,6))

const removedReptiles = pets.splice(4,2, 'hamster')
// console.log(pets)

const removedPet = pets.pop()
// console.log(pets)
// console.log(removedPet)

pets.push(removedPet)
// console.log(pets)

// console.log(pets.shift())

pets.unshift('turtle')
// console.log(pets)

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const addTwo = (num, index, arr) => {
    arr[index] = num + 2
}

numbers.forEach(addTwo)
console.log(numbers)