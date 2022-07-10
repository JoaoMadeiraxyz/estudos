alert("Seja Bem Vindo!");
var nome = 'João Victor';
var idade = '18';
var telefone = '(44)997420056';
const cpf = '013.246.949-98';

const materias = [
    'ALGORITMOS E FUNDAMENTOS DE PROGRAMACAO DE COMPUTADORES',
    'ARQUITETURA E ORGANIZACAO DE COMPUTADORES',
    'FUNDAMENTOS DE PROGRAMACAO PARA INTERNET',
    'LEGISLACAO APLICADA A TECNOLOGIA DA INFORMACAO'
];
const notas =[
    100,
    75,
    90,
    100
];
const cidades =[
    'Tapejara',
    'Cianorte',
    'Maringá',
    'Jussara'
];

var ola = 'Olá';
console.log(ola);

var verify = 6<4;

function mostrar() {
    document.getElementById('nome').style.display = 'block';
    document.getElementById('idade').style.display = 'block';
    document.getElementById('cpf').style.display = 'block';
    document.getElementById('telefone').style.display = 'block';
}

function hide() {
    document.getElementById('nome').style.display = 'none';
    document.getElementById('idade').style.display = 'none';
    document.getElementById('cpf').style.display = 'none';
    document.getElementById('telefone').style.display = 'none';
}
function mostrarNotas() {
    var materia = document.getElementById('materias').value;
    document.getElementById('nota').innerHTML = ' ';
    if(materia == 'materia1') {
        document.getElementById('nota').innerHTML = notas[0];
    }
    if(materia == 'materia2') {
        document.getElementById('nota').innerHTML = notas[1];
    }
    if(materia == 'materia3') {
        document.getElementById('nota').innerHTML = notas[2];
    }
    if(materia == 'materia4') {
        document.getElementById('nota').innerHTML = notas[3];
    }
}

function alterar() {
    document.getElementById('texto').innerHTML = 'alterada';
}

function clicou() {
    alert('Você clicou no botão');
}