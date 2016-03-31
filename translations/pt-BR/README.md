## Livro de receitas - Programação Funcional em JavaScript (ES6)
Um livro de receitas para escrever _programação funcional_ no JavaScript com ES6.

### Índice

* [Funções puras](#funções-puras)
* [O que são "Higher-order functions"](#o-que-são-higher-order-functions)
* [Recursão](#recursão)
* [O que são "Functors"](#o-que-são-functors)
* [Compondo funções](#compondo-funções)
* [Usando desestruturação de parâmetros](#usando-desestruturação-de-parâmetros)
* [O que é "Currying"](#o-que-é-currying)

### Funções puras
Retorna o mesmo valor se passado os mesmos parâmetros. Sua execução não depende do estado do sistema.

1) Função impura

```javascript
let number = 1;

const increment = () => number += 1;

increment();
// 2
```

2) Função pura

```javascript
const increment = n => n + 1;

increment(1);
// 2
```

### O que são "Higher-order functions"
São funções que operam em outras funções, seja por receber elas como argumentos ou retornando-a como valor.

1) Função de soma

```javascript
const sum = (x, y) => x + y;

const calculate = (fn, x, y) => fn(x, y);

calculate(sum, 1, 2);
// 3
```

2) Filtrando elementos

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

4) Encadeando funções

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

5) Usando _reduce_

```javascript
const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);

totalGrades
// 19
```

### Recursão
Sempre que uma função chama a si mesmo, criando um loop.

1) Função de contagem regressiva

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

2) Calculando uma fatorial

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

### O que são "Functors"
É um objeto que implementa o método _map_. O método _map_ do _functor_ retorna seu próprio conteúdo e, para cada um deles, processa a transformação passada como _callback_ para o método _map_ e retorna um novo _functor_, que contém a estrutura do primeiro _functor_, porém, com seu conteúdo transformado.

1) Adicionando um valor a todos os elementos em um array

```javascript
const plus1 = num => num + 1;

let numbers = [1, 2, 3];
numbers.map(plus1);
// [2, 3, 4]
```

### Compondo funções
A composição de duas ou mais funções retornando uma nova função.

1) Combinando duas funções para gerar uma nova

```javascript
const compose = (f,g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;

const angry = compose(exclaim, toUpperCase);

angry("stop this");
// STOP THIS!
```

2) Combinando três funções para gerar uma nova

```javascript
const compose = (f,g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;
const moreExclaim = x => `${x}!!!!!`;

const reallyAngry = compose(exclaim, compose(toUpperCase, moreExclaim));

reallyAngry("stop this");
// STOP THIS!!!!!!
```

### Usando desestruturação de parâmetros
Extrair dados de arrays ou objetos usando uma sintaxe que espelha a estrutura literal do array ou objeto. Conhecida também como _"Pattern Matching"_ (em português, algo como, **correspondendo ao mesmo padrão**).

1) Selecionando a partir de um padrão

```javascript
const foo = () => [1, 2, 3];

const [a, b] = foo();
console.log(a, b);
// 1 2
```

2) Acumula os valores de restantes

```javascript
const [a, ...b] = [1, 2, 3];
console.log(a, b);
// 1 [2, 3]
```

3) Parâmetros opcionais

```javascript
const ajax = ({ url = "localhost", port: p = 80}, ...data)  =>
    console.log("Url:", url, "Port:", p, "Rest:", data);

ajax({ url: "someHost" }, "additional", "data", "hello");
// Url: someHost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

ajax({ }, "additional", "data", "hello");
// Url: localhost Port: 80 Rest: [ 'additional', 'data', 'hello' ]
```

### O que é "Currying"
Recebe uma função que recebe múltiplos argumentos e transforma isso em um encadeamento de funções, passando um argumento de cada vez e retornando a próxima função, até que a última retorne o resultado.

1) Utilizando _currying_ em um objeto

```javascript
const student = name => grade => `Name: ${name} | Grade: ${grade}`;

student("Matt")(8);
// Name: Matt | Grade: 8
```

2) Utilizando _currying_ em uma função de soma

```javascript
const add = x => y => x + y;

const increment = add(1);
const addFive = add(5);

increment(3);
//4

addFive(10);
// 15
```

### Artigos relacionados

**OBS:** Todos em inglês.

[https://gist.github.com/mikaelbr/9900818](https://gist.github.com/mikaelbr/9900818)

[https://www.gitbook.com/book/jcouyang/functional-javascript/details](https://www.gitbook.com/book/jcouyang/functional-javascript/details)

[https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)

[http://functionaljavascript.blogspot.com.br/2013/07/functors.html](http://functionaljavascript.blogspot.com.br/2013/07/functors.html)

[http://nicoespeon.com/en/2015/01/pure-functions-javascript/](http://nicoespeon.com/en/2015/01/pure-functions-javascript/)

[https://drboolean.gitbooks.io/mostly-adequate-guide/](https://drboolean.gitbooks.io/mostly-adequate-guide/)

[https://www.youtube.com/watch?v=DisD9ftUyCk](https://www.youtube.com/watch?v=DisD9ftUyCk)
