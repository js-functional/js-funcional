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

let aluno =
  nome =>
    nota =>
      `Nome: ${nome} | Nota: ${nota}`;

let meuAluno = aluno("Matheus")(8);
console.log(meuAluno); // Nome: Matheus | Nota: 8

let contagemRegressiva = (num) => {
  if (num > 0) {
    console.log(num);
    contagemRegressiva(num - 1);
  }
}

let contagem = contagemRegressiva(5);
/*
5
4
3
2
1
*/
