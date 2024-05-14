
let obj = {}; // this code shows how an object is initialized
obj[1] = 'One'; // here the object is initilized to one with a property of one which will be automatically converted in javascript to a string. 
obj['1'] = 'String One'; // in this line the obj is initialized to a strong one with a property that has a string value.

console.log(obj[1]); //this prints the value of obj
console.log(obj['1']);
console.log(obj[1] === obj['1']);

// here is the output of this code 
// strong one
//strong one 
//true