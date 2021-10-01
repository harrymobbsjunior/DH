const moduloAlunos = require('./alunos');
const moduloCursos = require('./curso');

console.log(moduloAlunos);
console.log(moduloCursos);


console.log('-----------------------------------');
console.log('## PASSO 2 - Calcula media e faltas');
console.log(moduloAlunos.aluno3.calcularMedia());
console.log(moduloAlunos.aluno3.faltas());


console.log('-----------------------------');
console.log('## PASSO 3 - Lista estudantes');
moduloCursos.listaCursos[0].printEstudante()

console.log('-------------------------------');
console.log('## PASSO 4 - Adiciona estudante');
moduloCursos.listaCursos[0].addEstudante('teste');

console.log('-------------------------------');
console.log('## PASSO 5 - Aprovação---------');
//console.log(moduloCursos.listaCursos[0].aprovacao('Harry'));
console.log(moduloCursos.listaCursos[0].aprovacao(moduloAlunos.aluno3));

// como fiz uma 
//console.log('-----------------------------------');
//console.log('--------------STATUS---------------');
//console.log(moduloCursos.statusAluno('Informatica','Harry'));

console.log('------------------------------');
console.log('## PASSO 6 - Resultados alunos');
console.log(moduloCursos.listaCursos[0].resultadoEstudante());








