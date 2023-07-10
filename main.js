// 1) .length
// Create an array called cars which consists of 4 different types of cars as String type. The first car type should be Ford.
// Console.log the length of the array.

const cars = ['Ford', 'BMW', 'GMC', 'Tesla']
console.log('The number of cars: ',cars.length);  



//*****
// 2) .concat()
// Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
// Console.log the new array.

const moreCars=['Kia','Volvo','Nissan','Honda']
let totalCars = cars.concat(moreCars)
console.log(`Total Cars: ${totalCars.length}`)



//*****
// 3).indexOf() and .lastIndexOf()
// Use the indexOf method to console.log the index of Honda in totalCars.
// Use the lastIndexOf method to console.log the index of Ford in totalCars.
// Run the program.
console.log('Index position of Honda in totalCars: ', totalCars.indexOf('Honda'))
console.log('The index position of Ford in totalCars: ', totalCars.lastIndexOf('Ford'))



//*****
// 4).join()
// Use the join method to convert the array totalCars into a string called stringOfCars.
// Console.log stringOfCars.
// Run the program.
let stringOfCars = totalCars.join(', ')
    console.log('String of Cars: ', stringOfCars)



//*****
// 5) .split()
// Use the split method to convert stringOfCars into an array called carsFromString.
// Console.log the array you just created.
// Run the program.
// BONUS: Go back and pass a comma (',') in as an argument to .split() to separate the cars into individual items in the array. This is called a separator and it can be any character you wish to separate strings by.
let carsFromStrings = stringOfCars.split(",")
    console.log('Split the String of Cars: ', totalCars)



//*****
// 6) .reverse()
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
// Console.log carsInReverse.
// Run the program.

carsInReverse = totalCars.reverse()
console.log('Cars in Reverse: ', carsInReverse)



//*****
// 7) .sort()
// Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction: console.log(carsInReverse.indexOf('yourPrediction'));
carsInReverse.sort();
console.log('Alpha Order, Predicted position of BMW: ', carsInReverse.indexOf('BMW'));


//*****
// 8).slice()
// Create a pets array by copy/pasting the following: const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
// Use the slice method to create a reptiles array with snake and lizard from the pets array.
// Console.log the reptiles array and run the program.
// Now console.log the pets array and run the program. Why do you think snake and lizard are still in the original array?
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4, 6)
console.log('List of reptiles: ',reptiles)
console.log('List of pets: ', pets)


//*****
// 9) .splice()
// Create a new array called removedReptiles, using the splice method to remove snake and lizard from the pets array.
// Console.log removedReptiles and pets and run the program.
// Go back and add the string 'hamster' in as a third parameter to your splice method, then run the program again and notice how the pets array has changed. Do you see how that works?
let removedReptiles = pets.splice(4, 2)
console.log('.splice to remove reptiles: ',removedReptiles)

pets.splice(3, 0, "hamster");
console.log('Added hamster: ',pets)



//*****
// 10) .pop()
// Use the pop method to remove the last item from the pets array, saving it to a variable called removedPet.
// Console.log removedPet and pets and run the program.
let removedPets = console.log('Last item: ',pets.pop());
console.log('.pop method to remove last item from list: ',pets)



//*****
// 11) .push()
// Use the push method to add removedPet back to the end of the pets array.
// Console.log pets and run the program.
pets.push('bird')
console.log('.push method to replace the removed iten: ',pets)



//*****
// 12) .shift()
// Use the shift method to remove and console.log the first item in the pets array.
let firstElement = pets.shift();
console.log('.shift method to remove first item: ',firstElement)



//*****
// 13) .unshift()
// Use the unshift method to add the string 'turtle' as the first item in the pets array.
// Console.log the pets array and run the program. If all went according to plan, you should see ['turtle', 'cat', 'fish', 'rabbit', 'hamster', 'bird'].
pets.unshift('turtle')
console.log('.unshift method, to add turtle: ',pets)

//*****
// 14) .forEach()
// Create a numbers array by copy/pasting the following: const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
// Write code that will add 2 to each item in the array numbers.
// forEach requires a function to be passed into it as its first argument.
// Build a function called addTwo that can take in num, index, and arr as parameters—(num, index, arr)—and returns num + 2 at each index of the arr.
const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34]
console.log('Numbers in the array: ',numbers)
function addTwo(num, index, arr) {
    arr[index] = num + 2;

}

// Use .forEach() on the numbers array, passing in your freshly built function addTwo as an argument, in order to add 2 to each number in the array.
// Console.log numbers and run the program.
numbers.forEach(addTwo)
console.log('.forEach method to add 2 to each# in the array: ', numbers)