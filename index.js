const path = require('path');
const Person = require('./person'); // Import the Person module

// Create three different Person objects
const person1 = new Person('Daniel', 'Umetor', 'danielumetor@example.com');
const person2 = new Person('Awodwa', 'Hendrick', 'awodwahendrik@example.com');
const person3 = new Person('Chelsea', 'Julie', 'chelseajulie@example.com');

// Log the Person objects to the console
console.log(person1);
console.log(person2);
console.log(person3);

// Example usage of path module
const filePath = path.join(__dirname, 'data.txt');
console.log('File path using path.join():', filePath);

const baseName = path.basename(filePath);
console.log('Base name using path.basename():', baseName);

const resolvedPath = path.resolve(__dirname, 'data.txt');
console.log('Resolved path using path.resolve():', resolvedPath);
