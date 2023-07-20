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

//turn a string into an array        !!!!this is a SERATOR!!!! Instead of returning the string as one element in an array, dependant on how I specify seperator location, it will return an array that contains multiple elements.  
const carsFromString = stringOfCars.split(',');
console.log(carsFromString)
console.log(carsFromString.length)
//BONUS
// stringOfCars.split(); returns 1
//stringOfCars.split(',');returns 8
//----


// `.reverse()` ----
//    * Use the `reverse` method to create an array `carsInReverse` which is the array `totalCars` in reverse.
//    * Console.log `carsInReverse`.
//    * Run the program.

//this new array is the previous array backwards
const carsInReverse = totalCars.reverse();
console.log(carsInReverse)
//----

// `.sort()`----
// * Use the `sort` method to put the array `carsInReverse` into alphabetical order.
// * Based on the types of cars you used, predict which item in the array should be at index 0.
// * Use the following code to confirm or reject your prediction: `console.log(carsInReverse.indexOf('yourPrediction'));`

//a new array with the cars in alphabetical order 
//my prediction is that chevy will be at index zero. 
const carsInAlph = carsInReverse.sort();

console.log(carsInAlph.indexOf('Chevy'))
console.log(carsInAlph)
//----


// 1. `.slice()`----
//    * Use the `slice` method to create a `reptiles` array with `snake` and `lizard` from the `pets` array.
//    * Console.log the `reptiles` array and run the program.
//    * Now console.log the `pets` array and run the program. Why do you think `snake` and `lizard` are still in the original array?
// //an array for pets 
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];

//a new array called reptiles. Reptiles are snake and lizard. Softwear engineer or zoologist? i am a man of many forms. 
const reptiles = pets.slice(4, 6);

console.log(reptiles)
console.log(pets)
//snake and lizard are still in the pets array, because splice() goes in to the referenced array, and retrieves the information from the specified index's. It then takes that information and turns it into a new array. Which i stored in a new object.
//----



//. `.splice()`
//    * Create a new array called `removedReptiles`, using the `splice` method to remove `snake` and `lizard` from the `pets` array.
//    * Console.log `removedReptiles` and `pets` and run the program.
// Go back and add the string `'hamster'` in as a third parameter to your `splice` method, then run the program again and notice how the `pets` array has changed. Do you see how that works?


//take snake and lizard out of pets. store them as a new array in a new object
                              
const removedReptiles = pets.splice(4, 5,);
const removedReptilanBird = pets.splice(4, 5, 'Hamster');

console.log(removedReptiles)   //From what i can tell, by adding the string "Hamster" as the third perameter, the computer heard me tell it to use the fifth index as the reference, the replace the index that follow with hamtser, and add the replaced element to the remove reptiles array.
console.log(pets)
//----



//  `.pop()`
//    * Use the `pop` method to remove the last item from the `pets` array, saving it to a variable called `removedPet`.
//    * Console.log `removedPet` and `pets` and run the program.

// take the last item out an array and turn it into a string.
const removedPet = pets.pop(); 

   console.log(pets)
console.log(removedPet)
//----



// `.push()`
// - Use the `push` method to add `removedPet` back to the end of the `pets` array.
// - Console.log `pets` and run the program.

//take an item out of a string and move it back to the end of thte arrray.
pets.push(removedPet);

console.log(pets)
   



   




//ARRAY METHODS

