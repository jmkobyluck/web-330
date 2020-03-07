/*
============================================
; Title:  Exercise 3.3
; Author: Professor Krasso
; Date:   7 March 2020
; Modified By: Jonathan Kobyluck
; Description: The Singleton Pattern
;===========================================
*/

// Require statement that imports my header file
const header = require('../kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 3.3'));

// Line break
console.log(" ")

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

// DatabseSingleton function creating an instance 
var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }
    
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function databaseSingletonTest() {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s", oracle === postgres);
}

// calling the databaseSingletonText function
databaseSingletonTest();
// end program