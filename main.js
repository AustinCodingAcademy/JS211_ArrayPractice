const cars = ['ford','honda','toyota','hyundai'];
console.log(cars.length)
const morecars = [  'chevy','subaru','mercedes','honda'];
const totalcars = cars.concat(morecars);
console.log (totalcars);
var a = totalcars.indexOf("honda");
console.log (a);
var b = totalcars.lastIndexOf('ford');
console.log(b);
var stringOfCars = totalcars.join();
console.log(stringOfCars)
var  d = totalcars 
d = stringOfCars.split()
console.log(totalcars)
const carsInReverse = totalcars.reverse()
console.log(carsInReverse)
const sortedarr = carsInReverse.sort()
console.log(sortedarr)

const removedcars = carsInReverse.slice(1,3)
console.log(removedcars)
const splicedarr = carsInReverse.splice(2,3,'ford','honda');
console.log(splicedarr);
const othercars = carsInReverse.push('ford','honda');
console.log(othercars);
console.log(carsInReverse.pop() );
console.log(carsInReverse.shift());
const newcararray = carsInReverse.unshift('bmw' ,'kia'); 
console.log(newcararray)

const numbers =['23', '45', '0', '2' ]

numbers.forEach(numbers=> console.log(numbers +2));
    
    




// Run the program.

// .slice()
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
// .splice()
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
// .push()
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
// .pop()
// Use the pop method to remove and console.log the last item in the array carsInReverse.
// .shift()
// Use the shift method to remove and console.log the first item in the array carsInReverse.
// .unshift()
// Use the unshift method to add a new type of car to the array carsInReverse.
// .forEach()

// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
// .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

