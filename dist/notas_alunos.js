"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// Array de objetos representando alunos e suas notas
var alunos = [{
  nome: "Ana",
  nota: 8
}, {
  nome: "Bruno",
  nota: 5
}, {
  nome: "Carlos",
  nota: 6
}, {
  nome: "Daniela",
  nota: 7
}, {
  nome: "Eduardo",
  nota: 4
}];

// Função que filtra alunos com nota maior ou igual a 6
function filtrarAlunosPorNota(alunos) {
  // Verifica se o argumento é um array
  if (!Array.isArray(alunos)) {
    throw new Error("O argumento deve ser um array.");
  }

  // Verifica se cada item no array é um objeto válido
  alunos.forEach(function (aluno) {
    if (_typeof(aluno) !== 'object' || aluno === null) {
      throw new Error("Cada item do array deve ser um objeto.");
    }
    if (!('nome' in aluno) || !('nota' in aluno)) {
      throw new Error("Cada objeto deve ter as propriedades 'nome' e 'nota'.");
    }
    if (typeof aluno.nota !== 'number') {
      throw new Error("A propriedade 'nota' deve ser um número.");
    }
  });
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Testando a função
try {
  var alunosAprovados = filtrarAlunosPorNota(alunos);
  console.log(alunosAprovados);
} catch (error) {
  console.error(error.message);
}