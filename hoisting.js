// What will be console.logged here
//
// Question 1
// console.log(foo);
// foo = 1;
// this throws a refernce error that the foo is not defined

// question 2
// console.log(foo);
// var foo = 2;
// this gives us back undefined

// question 3
foo = 3;
console.log(foo);
// var foo;
// this gives us the 3 value because it is called after the defination
