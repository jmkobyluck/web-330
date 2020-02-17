/*
============================================
; Title:  Exercise 1.3
; Author: Professor Krasso
; Date:   17 February 2020
; Modified By: Jonathan Kobyluck
; Description: Class Refresher
;===========================================
*/

// Require statement that imports my header file
const header = require('../kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 1.3'));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/

// start program

// declaring 'cell' variable for phone 'class' function
var cellPhone = new CellPhone("Samsung", "Galaxy Note 9", "Ocean Blue", "549.99");

// Phone 'class' function
function CellPhone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    // returning phone price
    this.getPrice = function() {
        return this.price;
    };

    // returning phone model
    this.getModel = function() {
        return this.model;
    }; 

    // returning all phone properties
    this.getDetails = function() {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.model + "\nColor: " + this.color + "\nPrice: " + this.price;
    };
}

// output

// line break
console.log("")

// logging expected output line
console.log("-- DISPLAYING CELL PHONE DETAILS --")

// logging all phone properties in expected output format
console.log(cellPhone.getDetails());

// end program