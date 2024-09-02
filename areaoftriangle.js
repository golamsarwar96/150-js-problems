//3 sides of the triangle
let a = 5;
let b = 6;
let c = 7;

//Semi-parameter of triangle
let s = (a+b+c)/2;
console.log(s);

//Area of triangle with 3 sides.
let area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));

console.log(area);

