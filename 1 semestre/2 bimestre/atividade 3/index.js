var texto = document.getElementById('textoEditar');
function editarTexto() {
    texto.innerHTML = 'Seja Bem Vindo!';
}

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var i = 1;
var empty = "Fim Da Página!"
document.getElementById('empty').innerHTML = empty;

function proxImg() {
    if (i == 1) {
        img1.style.display = 'none';
        img2.style.display = 'block';
    }
    if (i == 2) {
        img2.style.display = 'none';
        img3.style.display = 'block';
    }
    if (i == 3) {
        img3.style.display = 'none';
        img1.style.display = 'block';
        i = 0;
    }
    i++;
}

function imgAnt() {
    if (i == 1) {
        img1.style.display = 'none';
        img3.style.display = 'block';
        i = 4;
    }
    if (i == 2) {
        img2.style.display = 'none';
        img1.style.display = 'block';
    }
    if (i == 3) {
        img3.style.display = 'none';
        img2.style.display = 'block';
    }
    i--;
}

function ocultar() {
    var h1Ocultar = document.getElementById('ocultar');
    var botaoOcultar = document.getElementById('botaoOcultar');
    botaoOcultar.style.display = 'none';
    h1Ocultar.style.display = 'none';
}

function aparecer() {
    var botaoAparecer = document.getElementById('botaoAparecer');
    var h1Aparecer = document.getElementById('h1Aparecer');
    botaoAparecer.style.display = 'none';
    h1Aparecer.innerHTML = "Exibido via JS"
}

function calculo() {
    alert("20 * 2 = 40");
    var divCalculo = document.getElementById('calculo');
    var botaoCalculo = document.getElementById('botaoCalculo');
    botaoCalculo.style.display = 'none';
    divCalculo.style.display = 'block';
    console.log("20 * 2 = 40");
}