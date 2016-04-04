## JavaScript Functional Programming Cookbook (ES6)
A Cookbook for writing FP in JavaScript using ES6

**Translations**

- [Português (Brasil)](/translations/pt-BR/README.md)
- [简体中文](/translations/zh-CN/README.md)

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

const increment = () => number += 1;

increment();
// 2
```

2) Pure

```javascript
const increment = n => n + 1;

increment(1);
// 2
```

### Higher-order functions
Functions that operate on other functions, either by taking them as arguments or by returning them.

1) Sum

```javascript
const sum = (x, y) => x + y;

const calculate = (fn, x, y) => fn(x, y);

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

const isApproved = student => student.grade >= 6;

students.filter(isApproved);
// [ { name: 'Anna', grade: 6 }, { name: 'Maria', grade: 9 } ]
```

3) Map

```javascript
const byName = obj => obj.name;

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

const isApproved = student => student.grade >= 6;

const byName = obj => obj.name;

students.filter(isApproved).map(byName);
// ['Anna', 'Maria']
```

5) Reduce

```javascript
const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);

totalGrades
// 19
```

### Recursion
Whenever a function calls itself, creating a loop.

1) Countdown

```javascript
const countdown = num => {
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
const factorial = num => {
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
An object that has a map method. The map method of the functor takes it’s own contents and transforms each of them using the transformation callback passed to map, and returns a new functor, which contains the structure as the first functor, but with the transformed values.

1) Adding a value to all the elements in a array

```javascript
const plus1 = num => num + 1;

let numbers = [1, 2, 3];
numbers.map(plus1);
// [2, 3, 4]
```

### Compose
The composition of two or more functions returns a new function.

1) Combining two functions to generate another one

```javascript
const compose = (f,g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;

const angry = compose(exclaim, toUpperCase);

angry("stop this");
// STOP THIS!
```

2) Combining three functions to generate another one

```javascript
const compose = (f,g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;
const moreExclaim = x => `${x}!!!!!`;

const reallyAngry = compose(exclaim, compose(toUpperCase, moreExclaim));

reallyAngry("stop this");
// STOP THIS!!!!!!
```

### Destructuring
Extract data from arrays or objects using a syntax that mirrors the construction of array and object literals. Or "Pattern Matching".

1) Select from pattern

```javascript
const foo = () => [1, 2, 3];

const [a, b] = foo();
console.log(a, b);
// 1 2
```

2) Accumulates the rest values

```javascript
const [a, ...b] = [1, 2, 3];
console.log(a, b);
// 1 [2, 3]
```

3) Optional parameters

```javascript
const ajax = ({ url = "localhost", port: p = 80}, ...data)  =>
    console.log("Url:", url, "Port:", p, "Rest:", data);

ajax({ url: "someHost" }, "additional", "data", "hello");
// Url: someHost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

ajax({ }, "additional", "data", "hello");
// Url: localhost Port: 80 Rest: [ 'additional', 'data', 'hello' ]
```

### Currying
Taking a function that takes multiple arguments and turning it into a chain of functions each taking one argument and returning the next function, until the last returns the result.

1) Currying an Object

```javascript
const student = name => grade => `Name: ${name} | Grade: ${grade}`;

student("Matt")(8);
// Name: Matt | Grade: 8
```

2) Currying a Sum

```javascript
const add = x => y => x + y;

const increment = add(1);
const addFive = add(5);

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

[https://www.youtube.com/watch?v=DisD9ftUyCk](https://www.youtube.com/watch?v=DisD9ftUyCk)


