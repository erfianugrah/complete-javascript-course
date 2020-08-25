/******************************
* Variables and data types

var firstName = 'Erfi';
console.log(firstName);

var lastName = 'Anugrah';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// Variable Naming Rules
var _3years = 3;
var johnMark = 'John and Mark';
// var if = 23;
*/

/******************************
* Variable mutation and type coercion

var firstName = 'Erfi';
var age = 26;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/******************************
* Basic Operators
*/

var now, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(yearMark);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);