let sum = (x, y) => {
  return x + y;
}

let calculate = (fn, x, y) => {
  return fn(x, y);
}

let calc = calculate(sum, 1, 2);
console.log(calc); // 3

let students = [
  {name: 'Anna', grade: 6},
  {name: 'John', grade: 4},
  {name: 'Maria', grade: 9}
];

let isApproved = (student) => {
    return student.grade >= 6;
}

let approvedStudents = students.filter(isApproved);
console.log(approvedStudents); // [ { name: 'Anna', grade: 6 }, { name: 'Maria', grade: 9 } ]

let studentByName = (student) => {
    return student.name;
}

let studentsByName = students.map(studentByName);
console.log(studentsByName); // [ 'Anna', 'John', 'Maria' ]

let student =
  name =>
    grade =>
      `Name: ${name} | Grade: ${grade}`;

let myStudent = student("Matt")(8);
console.log(myStudent); // Name: Matt | Grade: 8

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
