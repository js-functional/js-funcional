let soma = (x, y) => {
  return x + y;
}

let calcula = (fn, x, y) => {
  return fn(x, y);
}

let calculo = calcula(soma, 1, 2);
console.log(calculo); // 3

let alunos = [
  {nome: 'Ana', nota: 6},
  {nome: 'Julio', nota: 4},
  {nome: 'Maria', nota: 9}
];

let estaAprovado = (aluno) => {
    return aluno.nota >= 6;
}

let alunosAprovados = alunos.filter(estaAprovado);
console.log(alunosAprovados); // [ { nome: 'Ana', nota: 6 }, { nome: 'Maria', nota: 9 } ]

let alunoPeloNome = (aluno) => {
    return aluno.nome;
}

let nomeAlunos = alunos.map(alunoPeloNome);
console.log(nomeAlunos); // [ 'Ana', 'Julio', 'Maria' ]
