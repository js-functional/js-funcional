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

// Currying
let currySum =
  x =>
    y =>
      x + y;

let addFive = currySum(5);
let adding = addFive(10);
console.log(adding); // 15

let student =
  name =>
    grade =>
      `Name: ${name} | Grade: ${grade}`;

let myStudent = student("Matt")(8);
console.log(myStudent); // Name: Matt | Grade: 8


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
