// 1. Write a JavaScript program to list the properties of a JavaScript object.
var student = {
    name: "DAvid Rayy", 
    sclass: "V1", 
    rollno: 12
}

console.log(Object.keys(student))

//output
//[ 'name', 'sclass', 'rollno' ]

//2.Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

//printing the property before deleting them
var student = {
    name: "DAvid Rayy", 
    sclass: "V1", 
    rollno: 12
}

console.log(student)
// { name: 'DAvid Rayy', sclass: 'V1', rollno: 12 }

//printing the student after deleting the rollno
var student = {
    name: "DAvid Rayy", 
    sclass: "V1", 
    rollno: 12
}
delete student.rollno

console.log(student)

// { name: 'DAvid Rayy', sclass: 'V1' }

// 3.Write a JavaScript program to get the length of a JavaScript object.

var student = {
    name: "DAvid Rayy", 
    sclass: "V1", 
    rollno: 12
}
var length  = Object.keys(student).length

console.log(length)

//output = 3

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.


var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    library.forEach(function(book) {
        console.log(book.title, book.author, book.readingStatus);
    });
 
    //output
    // he Road Ahead Bill Gates true
    // Walter Isaacson Steve Jobs true
    // Mockingjay: The Final Book of The Hunger Games Suzanne Collins false

//7. Write a JavaScript program that returns a subset of a string.

function getSubsets(str) {
    var subsets = [];
    for (var i = 0; i < str.length; i++) {
        var subset = '';
        for (var j = i; j < str.length; j++) {
            subset += str[j];
            subsets.push(subset);
        }
    }
    return subsets;
}

var Data = "dog";
var result = getSubsets(Data);
console.log(result);

//output
//[ 'd', 'do', 'dog', 'o', 'og', 'g' ]

//10. Write a JavaScript program to sort an array of JavaScript objects.

var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

   console.log(library)

// [
//   { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
//   { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
//   {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     libraryID: 3245
//   }
// ]

function allProperties(obj) {
    var methods = [];
    for (var prop in obj) {
        if (typeof obj[prop] === 'function') {
            methods.push(prop);
        }
    }
    return methods;
}

console.log(allProperties(Array));


//11.Write a JavaScript function to print all the methods in a JavaScript object.

function allProperties(obj) {
    var methods = [];
    for (var prop in obj) {
        if (typeof obj[prop] === 'function') {
            methods.push(prop);
        }
    }
    return methods;
}

console.log(allProperties(Array));
//output
// []
// []

//12.Write a JavaScript function to parse an URL.
function parseURL(url) {
    var parsedURL = new URL(url);
    var parsedData = {
        host: parsedURL.host,
        username: parsedURL.username,
        dbname: 'school',
    };
    return parsedData;
}
var url = "https://root:somepassword@localhost:8080";
console.log(parseURL(url));

//output
// { host: 'localhost:8080', username: 'root', dbname: 'school' }


//13.Write a JavaScript function to retrieve all the names of an object's own and inherited properties.\\

function getAllPropertyNames(obj) {
    var propertyNames = [];
    
    for (var prop in obj) {
        propertyNames.push(prop);
    }

    return propertyNames;
}
var obj = {
    x: 1,
    y: 2
};

var inheritedObj = Object.create(obj);
inheritedObj.z = 3;

console.log(getAllPropertyNames(inheritedObj));
//output
//[ 'z', 'x', 'y' ]


//14. Write a JavaScript function to retrieve all the values of an object's properties.
function getAllPropertyValues(obj) {
    var propertyValues = [];
    
    for (var prop in obj) {
        propertyValues.push(obj[prop]);
    }

    return propertyValues;
}
var obj = {
    a: 9,
    b: 10
};

console.log(getAllPropertyValues(obj));
//output
//[ 9, 10 ]


//15.Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
function objectToList(obj) {
    return Object.entries(obj);
}
var obj = {
    a: 1,
    b: 2
};

console.log(objectToList(obj));

//output
//[ [ 'a', 1 ], [ 'b', 2 ] ]

//16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
function swapKeysAndValues(obj) {
    var swappedObj = {};
    for (var key in obj) {
        swappedObj[obj[key]] = key;
    }
    return swappedObj;
}
var obj = {
    a: 1,
    b: 2
};

console.log(swapKeysAndValues(obj));
//output 
//{ '1': 'a', '2': 'b' }

//17.Write a JavaScript function to check whether an object contains a given property.
function checkProperty(obj, propertyName) {
    return propertyName in obj;
}
var obj = {
    d: 1,
    e: 2
};
console.log(checkProperty(obj, 'a')); 
console.log(checkProperty(obj, 'd')); 

//output
//false
//true






