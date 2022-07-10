function subtract(num1, num2) {
    var result = num1 - num2;
    return result;
}
subtract(1,1);

var numero1 = 1;
var numero2 = 1;
var resultado;
function subtrair(){
    resultado = numero1 - numero2;
    return resultado;
}

function subtractShow(n1, n2) {
    var total = n1 - n2;
    var show = document.getElementById('show');
    show.innerHTML = total;
}
subtractShow(1,1);

function mostraTempo() {
    const d = new Date();
    var showText = document.getElementById('showText');
    var hora = d.getHours();
    var minutos = d.getMinutes();
    var segundos = d.getSeconds();
    var showTime = document.getElementById('showTime');
    
    showTime.innerHTML = "Horário atual: " + hora + ":" + minutos + ":" + segundos;

    if (hora > 0 && hora < 9) {
        showText.innerHTML = "hora do café da manhã!"
    }
    if (hora > 9 && hora < 13) {
        showText.innerHTML = "hora do almoço!"
    }
    if (hora > 13 && hora < 18) {
        showText.innerHTML = "hora do café da tarde!"
    }
    if (hora > 18) {
        showText.innerHTML = "hora da janta!"
    }
}