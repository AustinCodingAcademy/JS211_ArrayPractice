//CHALENGES----------------------------------


/** `.length`----
   * Create an array called `cars` which consists of 4 different types of cars as String type. The first car type should be Ford.
   * Console.log the length of the array.
   * Use`node main.js` to run the program.
   */

// create array we will call cars. cars = array
const cars = ['Ford', 'Toyota', 'Jeep', 'Subaru'];
console.log(cars.length)


//----


/** `.concat()`------
   * Create another array called `moreCars` with 4 more different types of cars. The last car type should be Honda.
   * Use the `concat()` method to combine the `cars` and `moreCars` arrays into another array called `totalCars`.
   * Console.log the new array.
   * Run the program.
    */

//create an array called more cars. more cars = array
const moreCars = ['Chrystler', 'Chevy', 'Tesla', 'Honda'];
//total cars = cars + moreCars
const totalCars = cars.concat(moreCars);
console.log(totalCars)


//----


// `.indexOf()` and `.lastIndexOf()`----
//    * Use the `indexOf` method to console.log the index of `Honda` in `totalCars`.
//    * Use the `lastIndexOf` method to console.log the index of `Ford` in `totalCars`.
//    * Run the program.

//get the index of honda from total cars
console.log(totalCars.indexOf('Honda'));
//returns 7

//get the index of ford fro totalCars
console.log(totalCars.lastIndexOf('Ford'));
// returns 0
//----

// `.join()`----
//    * Use the `join` method to convert the array `totalCars` into a string called `stringOfCars`.
//    * Console.log `stringOfCars`.
//    * Run the program.

//convert an array into a string
const stringOfCars = totalCars.join();
console.log(stringOfCars)
//----



// `.split()`----
//    * Use the `split` method to convert `stringOfCars` into an array called `carsFromString`.
//    * Console.log the array you just created.
//    * Run the program.

//turn a string into an array
const carsFromString = stringOfCars.split();
console.log(carsFromString)
//----


   




//NOTESFORREPL!!!!-------------------------------
//Concat()----

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);
//----

//indexOf()----
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison'));
// // Expected output: 1
// // Start from index 2
// console.log(beasts.indexOf('bison', 2));
// // Expected output: 4
// console.log(beasts.indexOf('giraffe'));
// // Expected output: -1
// //-----

// //const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(animals.lastIndexOf('Dodo'));
// // Expected output: 3
// console.log(animals.lastIndexOf('Tiger'));
// // Expected output: 1
// ----

// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());
// // Expected output: "Fire,Air,Water"
// console.log(elements.join(''));
// // Expected output: "FireAirWater"
// console.log(elements.join('-'));
// // Expected output: "Fire-Air-Water"
// ----

