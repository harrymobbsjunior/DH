let moduloAlunos = require('../alunos');

// let json = JSON.stringify(Curso);
// let objeto = JSON.parse(json);

function Curso(nomeCurso, notaAprovacao, faltaMaxima, listaEstudante) {
    this.nome = nomeCurso;
    this.nota = notaAprovacao;
    this.falta = faltaMaxima;
    this.estudante = listaEstudante;
    this.printEstudante = function () {
        for (aluno of this.estudante) {
            console.log(aluno);
        }
    };
    this.addEstudante = function (aluno) {
        this.estudante.push(aluno);
    };
    this.aprovacao = function (aluno) {
        if( (aluno.calcularMedia() >= this.nota) && (aluno.falta < this.falta ) ){
            return true;
        } else if ( (aluno.falta === this.falta ) && (aluno.calcularMedia() > (this.nota * 1.10)) ){
            return true;
        }else {
            return false;
        }
    };
    this.resultadoEstudante = function () {
        let lista = [];
        for(let result of this.estudante){
            //lista.push(this.aprovacao(result));
            lista.push(result);
        }
        return lista;
    }
}

// PASSO 3
let addCurso = {
    'nome': 'HTML',
    'nota': 7,
    'falta': 2,
    'estudante': ['Harry', 'Pedro', 'Paulo']
}
console.log(addCurso);

//console.log(Curso);

let curso1 = new Curso("Informatica", 7, 3, ['Harry', 'Pedro', 'Paulo']);
let curso2 = new Curso("Contabilidade", 7, 2, ['Harry', 'Pedro', 'Paulo']);
let curso3 = new Curso("Direito", 7, 2, ['Harry', 'Pedro', 'Paulo', 'Joana']);
let curso4 = new Curso("Administração", 7, 2, ['Harry', 'Pedro', 'Paulo']);
let curso5 = new Curso("Fisica", 7, 2, ['Harry', 'Pedro', 'Paulo', 'Maria', 'Joana']);

let listaCursos = [curso1, curso2, curso3, curso4, curso5];

// let array = [];
// array.push(new Pessoa(valor1, valor1))

//console.log(listaCursos.faltas());

module.exports = {
    listaCursos

    // statusAluno: function (curso_, aluno_) {

    //     for (var i = 0; i < listaCursos.length; i++) {
    //         var estudande = 'não';
    //         if (listaCursos[i].nome == curso_) {
    //             var matriculados = listaCursos[i].estudante;
    //             var result = listaCursos[i];
    //         }

    //         for (var j = 0; j < matriculados.length; j++) {
    //             for( let aluno of moduloAlunos){
    //                 //return aluno;
    //             }
                
    //         }
    //     }
    //     return j;
    // }

}