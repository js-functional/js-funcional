## JavaScript Functional Programming Cookbook (ES6)
A Cookbook for writing FP in JavaScript using ES6

### Higher-order functions
Functions that operate on other functions, either by taking them as arguments or by returning them

1) Sum

```javascript
let sum = (x, y) => {
  return x + y;
}

let calculate = (fn, x, y) => {
  return fn(x, y);
}

let calc = calculate(sum, 1, 2);
console.log(calc);
// 3
```

2) Filter

```javascript
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
```

3) Map
```javascript
let byName = (obj) => {
    return obj.name;
}

let studentsByName = students.map(byName);
console.log(studentsByName);
// [ 'Anna', 'John', 'Maria' ]
```

### Recursion
Whenever a function calls itself, creating a loop

```javascript
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
```

### Currying
Taking a function that takes multiple arguments and turning it into a chain of functions each taking one argument and returning the next function, until the last returns the result


```javascript
let student =
  name =>
    grade =>
      `Name: ${name} | Grade: ${grade}`;

let myStudent = student("Matt")(8);
console.log(myStudent);
// Name: Matt | Grade: 8
```
