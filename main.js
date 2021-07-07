let cars = ['Ford', 'Mustang', 'Chevy', 'Honda']
let moreCars = ['Buggy', 'Jaguar', 'Nascar', 'Honda']
let totalCars = cars.concat(moreCars)
let stringOfCars = totalCars.join(' ')
let carsInReverse = totalCars.reverse().sort()
let removedCars = carsInReverse.slice(2, 5)

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]




console.log("1***************************")
console.log(cars.length)
console.log("2***************************")
console.log(totalCars.length)
console.log("3***************************")
console.log(totalCars.indexOf('Honda'))
console.log("4***************************")
console.log(totalCars.lastIndexOf('Ford'))
console.log("5***************************")
console.log(stringOfCars)
console.log("6***************************")
console.log(stringOfCars.split())
console.log("7***************************")
console.log(carsInReverse)
console.log("8***************************")
console.log(carsInReverse.indexOf('Buggy'))
console.log("9***************************")
console.log(removedCars)
console.log("10***************************")
console.log(carsInReverse.splice(1, 2, 'Ford', 'Honda'))
console.log("11***************************")
console.log(carsInReverse)
console.log("12***************************")
console.log(carsInReverse.push('Chevy', 'Ford'))
console.log("13***************************")
console.log(carsInReverse)
console.log("14***************************")
console.log(carsInReverse.pop())
console.log("15***************************")
console.log(carsInReverse.shift())
console.log("16***************************")
console.log(carsInReverse.unshift('Buick'))
console.log("17***************************")
console.log(carsInReverse)
console.log("18***************************")
console.log(numbers)
console.log("19***************************")

numbers.forEach(num => {
  console.log(num + 2)
})






































// console.log("20***************************")
// console.log(newNumbers)
// console.log(sum.forEach(element => console.log(element)))