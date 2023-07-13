// Create a es6 module with function getName, getSurname and default export getFullname.

// import getFullName, {getName, getSurName} from "./es6";

// Create the same with commonJS module
 const {getFullName , getSurName, getName} = require("./common")

// What is the difference?

// common js modules are typically used in node js because of the module system is designed for node js
// and the es6 version imports are used in browser and can also be used in node js
// import is just sugar around require but underneath it's the require and require can be used in the loops or in function but the import must be at the top of the scope or it will bubble to the top

console.log(getName("Jack"),getSurName("Sparrow"), getFullName("Jack", "Sparrow"))
