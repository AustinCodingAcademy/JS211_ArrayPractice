// 1. `.length` - Create an array called cars which consists of 4 different types of cars as String type. The first car type should be Ford and includes Honda.
let cars = ['Ford', 'Honda', 'Toyota', 'Tesla']

//    * Console.log the length of the array.

// console.log(cars.length)
//    * Use node main.js to run the program.


// 2. `.concat()` - Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.

let moreCars = ['BMW','Volkswagen', 'KIA', 'Honda']
//    * Use the concat method to combine the cars and moreCars arrays into another array called totalCars.

let totalCars = cars.concat(moreCars)
// console.log(totalCars)
//    * Run the program.
// 3. `.indexOf() and .lastIndexOf()` - Use the indexOf method to console.log the index of Honda.

let hondaIndex = totalCars.indexOf('Honda')
let fordIndex = totalCars.lastIndexOf('Ford')

//     * Use the lastIndexOf method to console.log the index of Ford.

let fordIndex = totalCars.lastIndexOf('Ford')
//    * Run the program.
// 4. `.join()` - Use the join method to covert the array totalCars into a string called stringOfCars.

let stringOfCars = totalCars.join()
// console.log(stringOfCars)
//    * Run the program.
// 5. `.split()` - Use the split method to convert stringOfCars back intro an array called totalCars.

let splitCars = stringOfCars.split()
// console.log(splitCars)
//     * Run the program.
// 6. `.reverse()` - Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.

let carsInReverse = totalCars.reverse()
console.log (carsInReverse)

//    * Run the program.
// 7. `.sort()` - Use the sort method to put the array carsInReverse into alphabetical order.
// let sortedCars = carsInReverse.sort()
// console.log(sortedCars)

//     * Based on the types of cars you used, predict which item in the array should be at index 0.

//     * Use the following code to confirm or reject your prediction: `alert(carsInReverse.indexOf('yourPrediction'));`
console.log(carsInReverse.indexOf('BMW'));

// 8. `.slice()` - Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
let removeCars = carsInReverse.slice(2, 5)
// console.log(removeCars)

// 9. `.splice()` - Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
let splicedCars = carsInReverse.splice(1, 2, "Ford", "Honda")
console.log(splicedCars)

// 10. `.push()` - Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.

let pushCars = carsInReverse.push(splicedCars)
console.log(pushCars)
// 11. `.pop()` - Use the pop method to remove and console.log the last item in the array carsInReverse.

let popCars = carsInReverse.pop()
console.log (popCars)
// 12. `.shift()` - Use the shift method to remove and console.log the first item in the array carsInReverse.
let shiftedCars = carsInReverse.shift()
console.log (shiftedCars)
// 13. `.unshift()` - Use the unshift method to add a new type of car to the array carsInReverse.
let unShiftedCars = carsInReverse.unshift('KIA')
console.log(unShiftedCars)
// 14 `.forEach()` - Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
let numbers = [23, 45, 0, 2];
numbers.forEach(myFunction)

function myFunction (item, index, arr) {
    arr[index] = item + 2;
}

console.log(numbers)

//    * `.forEach()` requires a function to be passed into it as its first argument. Build a function that will add 2 and then use `.forEach()` to pass each number into your freshly built function. `const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]`


