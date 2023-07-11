// What will be logged in first example and in second example?
//
let var1;
console.log(var1);
console.log(typeof var1);

let var2 = null;
console.log(var2);
console.log(typeof var2);

// solution 
// undefined means that the variable is declared but the value is not assigned to it yet where as null is an assignment value 
// when to use null and when to use undefined
// it is fine to use both of them 
// in an array we always get the undefined if we are targeting the element which has not been define