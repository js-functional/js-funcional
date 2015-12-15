## JavaScript Functional Programming Cookbook (ES6)
A Cookbook for writing FP in JavaScript using ES6

### Summary

* [Pure functions](#pure-functions)
* [Higher-order functions](#higher-order-functions)
* [Recursion](#recursion)
* [Functor](#functor)
* [Compose](#compose)
* [Destructuring](#destructuring)
* [Currying](#currying)

### Pure functions
Returns the same result given same parameters. It's execution doesn't depend on the state of the system.

1) Impure

```javascript
let number = 1;

let increment = () => number += 1;

increment();
// 2
```

2) Pure

```javascript
let increment = (n) => n + 1;

increment(1);
// 2
```

### Higher-order functions
Functions that operate on other functions, either by taking them as arguments or by returning them.

1) Sum

```javascript
let sum = (x, y) => x + y;

let calculate = (fn, x, y) => fn(x, y);

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

let isApproved = (student) => student.grade >= 6;

students.filter(isApproved);
// [ { name: 'Anna', grade: 6 }, { name: 'Maria', grade: 9 } ]
```

3) Map

```javascript
let byName = (obj) => obj.name;

students.map(byName);
// [ 'Anna', 'John', 'Maria' ]
```

4) Chaining

```javascript
let students = [
    {name: 'Anna', grade: 6},
    {name: 'John', grade: 4},
    {name: 'Maria', grade: 9}
];

let isApproved = (student) => student.grade >= 6;

let byName = (obj) => obj.name;

students.filter(isApproved).map(byName);
// ['Anna', 'Maria']
```

5) Reduce

```javascript
let totalGrades = students.reduce((sum, student) => sum + student.grade, 0);

totalGrades
// 19
```

### Recursion
Whenever a function calls itself, creating a loop.

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

### Functor
Given a value and a function, unwraps the values to get to its inner value(s), calls the given function with the inner value(s), wraps the returned values in a new structure, and returns the new structure.

1) Adding a value to all the elements in a array

```javascript
let plus1 = (num) => num + 1;

let numbers = [1, 2, 3];
numbers.map(plus1);
// [2, 3, 4]
```

### Compose
The composition of two or more functions returns a new function.

1) Combining two functions to generate another one

```javascript
let compose = (f,g) => x => f(g(x));

let toUpperCase = function(x) { return x.toUpperCase(); };
let exclaim = function(x) { return x + '!'; };

let angry = compose(exclaim, toUpperCase);

angry("stop this");
// STOP THIS!
```

2) Combining three functions to generate another one

```javascript
let compose = (f,g) => x => f(g(x));

let toUpperCase = function(x) { return x.toUpperCase(); };
let exclaim = function(x) { return x + '!'; };
let moreExclaim = function(x) { return x + '!!!!!'; };

let reallyAngry = compose(exclaim, (toUpperCase, moreExclaim));

reallyAngry("stop this");
// STOP THIS!!!!!!
```

### Destructuring
Extract data from arrays or objects using a syntax that mirrors the construction of array and object literals. Or "Pattern Matching".

1) Select from pattern

```javascript
let foo = () => [1, 2, 3];

let [a, b] = foo();
console.log(a, b);
// 1 2
```

2) Accumulates the rest values

```javascript
let [a, ...b] = [1, 2, 3];
console.log(a, b);
// 1 [2, 3]
```

3) Optional parameters

```javascript
let ajax = function ({ url = "localhost", port: p = 80}, ...data) {
    console.log("Url:", url, "Port:", p, "Rest:", data);
};

ajax({ url: "someHost" }, "additional", "data", "hello");
// Url: someHost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

ajax({ }, "additional", "data", "hello");
// Url: localhost Port: 80 Rest: [ 'additional', 'data', 'hello' ]
```

### Currying
Taking a function that takes multiple arguments and turning it into a chain of functions each taking one argument and returning the next function, until the last returns the result.

1) Currying an Object

```javascript
let student = name => grade => `Name: ${name} | Grade: ${grade}`;

student("Matt")(8);
// Name: Matt | Grade: 8
```

2) Currying a Sum

```javascript
let add = x => y => x + y;

let increment = add(1);
let addFive = add(5);

increment(3);
//4

addFive(10);
// 15
```

### Sources
[https://gist.github.com/mikaelbr/9900818](https://gist.github.com/mikaelbr/9900818)

[https://www.gitbook.com/book/jcouyang/functional-javascript/details](https://www.gitbook.com/book/jcouyang/functional-javascript/details)

[https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)

[http://functionaljavascript.blogspot.com.br/2013/07/functors.html](http://functionaljavascript.blogspot.com.br/2013/07/functors.html)

[http://nicoespeon.com/en/2015/01/pure-functions-javascript/](http://nicoespeon.com/en/2015/01/pure-functions-javascript/)

[https://drboolean.gitbooks.io/mostly-adequate-guide/](https://drboolean.gitbooks.io/mostly-adequate-guide/)
