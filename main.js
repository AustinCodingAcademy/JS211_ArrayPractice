// ect 1 of 3: Arrays of Cars
// Clone ArrayOfCars Repo.
// Inside the file called main.js complete each of the following exercises.
//

const cars = ["ford", "toyota", "honda", "jeep"];
// console.log(Array.isArray(cars));
console.log(cars.length);

// .length()
// Create an array called cars which consists of 4 different types of cars as String type. The first car type should be Ford and includes Honda.
// Console.log the length of the array.
// Use node main.js to run the program.

const moreCars = ["subaru", "kia", "dodge", "honda"];
console.log(typeof moreCars);
totalCars = cars.concat(moreCars);
console.log(totalCars);

// .concat()
// Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
// Run the program.

console.log(totalCars.indexOf("honda"));
console.log(totalCars.lastIndexOf("ford"));

// .indexOf() and .lastIndexOf()
// Use the indexOf method to console.log the index of Honda.
// Use the lastIndexOf method to console.log the index of Ford.
// Run the program.

const stringOfCars = totalCars.join();
console.log("-------", stringOfCars); // "--------" is just marking this console log so I know what
console.log(`stringOfCars is a typeof  ` + typeof stringOfCars);
// .join()
// Use the join method to covert the array totalCars into a string called stringOfCars.
// Run the program.

totalCars = stringOfCars.split(",");
console.log(`totalCars is an array ` + Array.isArray(totalCars));
console.log(totalCars);

// .split()
// Use the split method to convert stringOfCars back intro an array called totalCars.
// Run the program.

const carsInReverse = totalCars.reverse();
console.log(` cars in reverse ${carsInReverse}`);

// .reverse()
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
// Run the program.

carsInReverse.sort();
console.log(carsInReverse);

// .sort()

// Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:

// alert(carsInReverse.indexOf("dodge"));
// Run the program.

removedCars = carsInReverse.slice(0, 2);
console.log(removedCars);

// .slice()
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.

carsInReverse.splice(1, 2, "Ford", "Honda");
console.log(carsInReverse);

// .splice()
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.

carsInReverse.push("Ford", "Honda");
console.log(carsInReverse);
// .push()
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.

// carsInReverse.pop();
console.log(carsInReverse.pop());
// .pop()
// Use the pop method to remove and console.log the last item in the array carsInReverse.

console.log(carsInReverse.shift());

// .shift()
// Use the shift method to remove and console.log the first item in the array carsInReverse.

carsInReverse.unshift("mazda");
console.log(carsInReverse);

// .unshift()
// Use the unshift method to add a new type of car to the array carsInReverse.

let numbers = [23, 45, 0, 2];

numbers.forEach((number) => {
	number += 2;
	console.log(number);
});

// .forEach()
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.

const numbs = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 3];

const addTwo = (number) => {
	number += 2;
	console.log(number);
};

numbs.forEach(addTwo); //this essentially replaces the (let i =0; i < x.length; i++)

// .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 3\\\
