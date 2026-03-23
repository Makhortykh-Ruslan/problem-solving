let a = 5;
let b = 10;

b = a + b;
a = b - a;
b = b - a;

console.log(a); // Expected: 10
console.log(b); // Expected: 5
