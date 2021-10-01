/*
    Passo 1
    Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).
    Crie um construtor para ele e importe-o como o módulo aluno.

    Passo 2
    Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
    Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
*/
// let alunos = [
//     {
//         nome: 'João',
//         falta: 1,
//         nota: [1,3,5,7,8,9]
//     }
// ]
/*
    PASSO 1
*/
function Aluno(nome, falta, nota) {
    this.nome = nome;
    this.falta = falta;
    this.nota = nota;
    this.calcularMedia = function () {
        let soma = 0;
        for (let i = 0; i < this.nota.length; i++) {
            soma = soma + this.nota[i];
        }
        media = soma / this.nota.length;
        return media;
    };
    this.faltas = function () {
        return this.falta + 1;
    }
}
let aluno1 = new Aluno("Harry", 1, [1, 6, 7, 8, 9]);
let aluno2 = new Aluno("Pedro", 2, [2, 6, 7, 8, 9]);
let aluno3 = new Aluno("Paulo", 1, [4, 6, 7, 8, 9]);
let aluno4 = new Aluno("Maria", 0, [4, 6, 7, 8, 9]);
let aluno5 = new Aluno("Joana", 2, [5, 6, 7, 8, 9]);

//let listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5];
const listaAlunos = { aluno1, aluno2, aluno3, aluno4, aluno5 };

//console.log(Aluno);

// console.log(listaAlunos.aluno2);
// console.log(listaAlunos.aluno2.calcularMedia());
// console.log(listaAlunos.aluno2.faltas());

module.exports = listaAlunos;
