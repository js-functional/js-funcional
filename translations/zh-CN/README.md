## JavaScript 函数式编程手册 (ES6)
一份用 ES6 写的 JavaScript 函数式编程手册

**Translations**

- [Português (Brasil)](/translations/pt-BR/README.md)
- [简体中文版](/translations/zh-CN/README.md)

### 概要

* [Pure functions](#纯函数式)
* [Higher-order functions](#高阶函数)
* [Recursion](#递归)
* [Functor](#functor)
* [Compose](#组合)
* [Destructuring](#解构)
* [Currying](#柯里化)

### 纯函数式

相同的参数返回相同的结果，它的执行不依赖于系统的状态

1) 非纯净的

```javascript
let number = 1;

const increment = () => number += 1;

increment();
// 2
```

2) 纯净的

```javascript
const increment = n => n + 1;

increment(1);
// 2
```

### 高阶函数
函数把其他函数当做参数传递使用或者返回一个函数
1) 加法

```javascript
const sum = (x, y) => x + y;

const calculate = (fn, x, y) => fn(x, y);

calculate(sum, 1, 2);
// 3
```

2) filter

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

4) 链式

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

### 递归

当一个函数调用它自己的时候，就创造了一个循环

1) 递减

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

2) 阶乘

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
有 map 方法的对象。functor 的 map 方法通过 map 回调函数调用自己的内容，然后返回一个新的 functor.

1) 给数组所有的元素添加一个值

```javascript
const plus1 = num => num + 1;

let numbers = [1, 2, 3];
numbers.map(plus1);
// [2, 3, 4]
```

### 组合

通过组合两个或更多的函数生成一个新的函数

1) 组合两个函数生成一个新的函数

```javascript
const compose = (f,g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;

const angry = compose(exclaim, toUpperCase);

angry("stop this");
// STOP THIS!
```

2) 组合三个函数生成一个新的

```javascript
const compose = (f,g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;
const moreExclaim = x => `${x}!!!!!`;

const reallyAngry = compose(exclaim, compose(toUpperCase, moreExclaim));

reallyAngry("stop this");
// STOP THIS!!!!!!
```

### 解构

从数组中提取数据或对象使用一种语法混合数组和对象文本的建设。或“模式匹配”。

1) Select from pattern

```javascript
const foo = () => [1, 2, 3];

const [a, b] = foo();
console.log(a, b);
// 1 2
```

2) 接收 rest 值

```javascript
const [a, ...b] = [1, 2, 3];
console.log(a, b);
// 1 [2, 3]
```

3) 可选参数

```javascript
const ajax = ({ url = "localhost", port: p = 80}, ...data)  =>
    console.log("Url:", url, "Port:", p, "Rest:", data);

ajax({ url: "someHost" }, "additional", "data", "hello");
// Url: someHost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

ajax({ }, "additional", "data", "hello");
// Url: localhost Port: 80 Rest: [ 'additional', 'data', 'hello' ]
```

### 柯里化

一个函数有多个参数,把每个参数通过链式的形式返回下一个函数,直到最后返回结果。


1) 对象柯里化

```javascript
const student = name => grade => `Name: ${name} | Grade: ${grade}`;

student("Matt")(8);
// Name: Matt | Grade: 8
```

2) 加法函数柯里化

```javascript
const add = x => y => x + y;

const increment = add(1);
const addFive = add(5);

increment(3);
//4

addFive(10);
// 15
```

### 参考资源
[https://gist.github.com/mikaelbr/9900818](https://gist.github.com/mikaelbr/9900818)

[https://www.gitbook.com/book/jcouyang/functional-javascript/details](https://www.gitbook.com/book/jcouyang/functional-javascript/details)

[https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)

[http://functionaljavascript.blogspot.com.br/2013/07/functors.html](http://functionaljavascript.blogspot.com.br/2013/07/functors.html)

[http://nicoespeon.com/en/2015/01/pure-functions-javascript/](http://nicoespeon.com/en/2015/01/pure-functions-javascript/)

[https://drboolean.gitbooks.io/mostly-adequate-guide/](https://drboolean.gitbooks.io/mostly-adequate-guide/)

[https://www.youtube.com/watch?v=DisD9ftUyCk](https://www.youtube.com/watch?v=DisD9ftUyCk)
