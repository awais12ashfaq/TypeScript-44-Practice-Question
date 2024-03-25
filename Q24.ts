// Question 24 : More Conditional Tests

console.log("Tests for equality and inequality with strings");
let fruit:string = `banana`;
console.log("Is fruit == `banana`? I predict true.");
console.log(fruit == `banana`);

console.log( "is fruit == `Apple`? I predict false");
console.log(fruit == 'apple');

console.log("Test using lowercase function:");
console.log("Is fruit.tolowercase() == `banana`? I predict true");
console.log(fruit.toLowerCase() == `banana`);

console.log("Is fruit.tolowercase() == `banana`? I predict false");
console.log(fruit.toLowerCase() == `banana`);

console.log("-------------------------------------------------");

console.log("Numerical test using equality and inequality:");
let number : number = 10;
console.log("Is number == 10? I predict true.");
console.log(number == 10);

console.log("Is number == 5? I predict true.");
console.log(number != 5);

console.log("Is number == 10? I predict true.");
console.log(number == 10);

console.log("Is number > 5? I predict true.");
console.log(number > 10);

console.log("Is number < 5? I predict false.");
console.log(number < 5);

console.log("Is number >= 10? I predict true.");
console.log(number >= 10);

console.log("Is number <= 10? I predict true.");
console.log(number <= 10);

console.log("-------------------------------------------------");

console.log("Test using `And` and `Or` operators ");
console.log("Is number > 5 and fruit == `banana`? I predict true.");
console.log(number > 5 && fruit == `banana`);

console.log("Is number < 5 or fruit == `banana`? I predict true.");
console.log(number < 5 || fruit == `banana`);


















