/*
============================================
; Title:  Exercise 1.4
; Author: Professor Krasso
; Date:   20 February 2020
; Modified By: Jonathan Kobyluck
; Description: Duck Typing, A.K.A. "Interfaces"
;===========================================
*/

// Require statement that imports my header file
const header = require('../kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 1.4'));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>
*/

// start program

// declaring variables added to constructor functions
var altima = new Car("Altima");

var ram = new Truck("Ram", 2010);

var wrangler = new Jeep("Wrangler", 2012, "Black");

// declaring racetrack array
var racetrack =[];

// defining constructor for "Car"
function Car(model) {
    this.model = model;
}

// using the prototype property for start and logging the output
Car.prototype.start = function() {
    console.log("Car added to the racetrack!");
};

// defining constructor for "Truck"
function Truck(model, year) {
    this.model = model;
    this.year = year;
}

// using the prototype property for start and logging the output
Truck.prototype.start = function() {
    console.log("Truck added to the racetrack!");
};

// defining constructor for "Jeep"
function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}

// using the prototype property for start and logging the output
Jeep.prototype.start = function() {
    console.log("Jeep added to the racetrack!");
};

function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
}

// line break
console.log("");

driveIt(altima);
driveIt(ram);
driveIt(wrangler);

// outputting the expected output header
console.log("\n-- The following vehicles have been added to the racetrack --");

// for loop for racetrack and outputting the names and models defined
for (var k = 0; k < racetrack.length; k++) {
    console.log(racetrack[k].constructor.name + ": " + racetrack[k].model);
}


// end program


