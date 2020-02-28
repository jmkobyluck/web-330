/*
============================================
; Title:  Exercise 2.2
; Author: Professor Krasso
; Date:   28 February 2020
; Modified By: Jonathan Kobyluck
; Description: Prototypes
;===========================================
*/

// Require statement that imports my header file
const header = require('../kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 2.2'));

// Line break
console.log(" ")

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

The person's full name is: 'Jim Duncan'
The person's age is: '25'
*/

// declaring object literal "Person"
var person = {
    // returning the person's age
    getAge: function() {
        return this.age;
    }
};

// creating the person object
var jim = Object.create(person, {
    "age": {
        "value": "25"
    },
    "fullname": {
        "value": "Jim Duncan"
    }
});

// calling the getAge function on jim object
jim.getAge(); 

// console log output
console.log("The person's full name is: '%s'", jim.fullname);
console.log("The person's age is: '%s'", jim.age);