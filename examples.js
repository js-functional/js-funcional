// pure fuctions
var number = 1;
var increment = function() {
    return number += 1;
};
console.log(increment());

var increment = function(n) {
    return n + 1;
};
console.log(increment(1));

// Sum
let sum = (x, y) => {
  return x + y;
}

let calculate = (fn, x, y) => {
  return fn(x, y);
}

let calc = calculate(sum, 1, 2);
console.log(calc); // 3

// Filter
let students = [
  {name: 'Anna', grade: 6},
  {name: 'John', grade: 4},
  {name: 'Maria', grade: 9}
];

let isApproved = (student) => {
    return student.grade >= 6;
}

let approvedStudents = students.filter(isApproved);
console.log(approvedStudents);
// [ { name: 'Anna', grade: 6 }, { name: 'Maria', grade: 9 } ]

// Map
let byName = (obj) => {
    return obj.name;
}

let studentsByName = students.map(byName);
console.log(studentsByName);
// [ 'Anna', 'John', 'Maria' ]

// Chaining
console.log(students.filter(isApproved).map(byName));

// Reduce
let totalGrades = students.reduce((sum, student) => {
  return sum + student.grade;
}, 0);
console.log(totalGrades);

// Currying
let currySum =
  x =>
    y =>
      x + y;

let incr = currySum(1);
let addFive = currySum(5);
let adding = incr(10);
console.log(adding); // 15

let student =
  name =>
    grade =>
      `Name: ${name} | Grade: ${grade}`;

let myStudent = student("Matt")(8);
console.log(myStudent); // Name: Matt | Grade: 8

// Functor
let plus1 = (num) => {
    return num + 1;
}
let numbers = [1, 2, 3];
console.log(numbers.map(plus1));

// compose

let compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};

let toUpperCase = function(x) { return x.toUpperCase(); };
let exclaim = function(x) { return x + '!'; };
let angry = compose(exclaim, (toUpperCase));

console.log(angry("send in the clowns"));


// Destructuring
let foo = () => {
  return [1, 2, 3];
};

let [a, b] = foo();
console.log(a, b); // 1 2

let [x, ...y] = [1, 2, 3];
console.log(x, y); // 1 [2, 3]

let ajax = function ({ url = "localhost", port: p = 80}, ...data) {
  console.log("Url:", url, "Port:", p, "Rest:", data);
};

ajax({ url: "someHost" }, "additional", "data", "hello");
// Url: someHost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

ajax({ }, "additional", "data", "hello");
// Url: localhost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

// Recursion
let countdown = (num) => {
  if (num > 0) {
    console.log(num);
    countdown(num - 1);
  }
}

let counting = countdown(5);
/*
5
4
3
2
1
*/

let factorial = (num) => {
  if (num <= 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
};
console.log(factorial(5));
//120
