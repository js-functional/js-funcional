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

calculate(sum, 1, 2);
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

students.filter(isApproved);
// [ { name: 'Anna', grade: 6 }, { name: 'Maria', grade: 9 } ]
```

3) Map
```javascript
let byName = (obj) => {
    return obj.name;
}

students.map(byName);
// [ 'Anna', 'John', 'Maria' ]
```

### Recursion
Whenever a function calls itself, creating a loop

1) Countdown

```javascript
let countdown = (num) => {
  if (num > 0) {
    console.log(num);
    countdown(num - 1);
  }
}

countdown(5);
/*
5
4
3
2
1
*/
```

2) Factorial

```javascript
let factorial = (num) => {
  if (num <= 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}

factorial(5);
//120
```

### Currying
Taking a function that takes multiple arguments and turning it into a chain of functions each taking one argument and returning the next function, until the last returns the result

1) Currying an Object

```javascript
let student =
  name =>
    grade =>
      `Name: ${name} | Grade: ${grade}`;

student("Matt")(8);
// Name: Matt | Grade: 8
```

2) Currying a Sum

```javascript
let currySum =
  x =>
    y =>
      x + y;

let addFive = currySum(5);
addFive(10);
// 15
```
