var sexo = prompt("Digite M se você for Homem, ou digite F se você for Mulher!");

switch(sexo) {
    case "F":
     alert("Seja Bem Vinda!");
     break;
    case "M":
     alert("Seja Bem Vindo!");
     break
     case "f":
     alert("Seja Bem Vinda!");
     break;
    case "m":
     alert("Seja Bem Vindo!");
     break
}

const materias = 
    [
    "ALGORITMOS E FUNDAMENTOS DE PROGRAMACAO DE COMPUTADORES", 
    "ARQUITETURA E ORGANIZACAO DE COMPUTADORES",
    "FUNDAMENTOS DE PROGRAMACAO PARA INTERNET",
    "LEGISLACAO APLICADA A TECNOLOGIA DA INFORMACAO"
];
    function mostraMaterias(){
        for(let i = 0; i < materias.length; i++ ){
            var text = document.getElementById("materia" + i);
            text.innerHTML += materias[i] + "<br>";
            var botao1 = document.getElementById("botao1");
            botao1.style.display = 'none';
            var botao2 = document.getElementById("botao2");
            botao2.style.display = 'block';
        }
    }

    function mostraComWhile(){
        let i = 0
        while(i < materias.length) {
            var text = document.getElementById("materia" + i);
            text.innerHTML += materias[i] + "<br>";
            i++
        }
    }

    function mostraTabuada() {
        for(let i = 0; i <= 10; i++) {
            var text = document.getElementById('tabuada');
            text.innerHTML += "8 x " + i + " = " + 8*i + "<br>";
        }
    }
    
    var txt = "";
    var carro = {
        cor:"Vermelho", 
        fabricante:"Volkswagen", 
        portas:4, 
        modelo: "VW T-Cross", 
        versao: "Comfortline"    
    };
    var atributo;
    for (atributo in carro) {
    txt += carro[atributo] + "<br>";
    }
    function mostraCarro() {
        botaoCarro = document.getElementById("botaoCarro");
        botaoCarro.style.display = 'none';
        document.getElementById("forin").innerHTML = txt;
    }

    function numerosPares() {
        var text = document.getElementById("numerosPares");
        var botaoNumeros = document.getElementById("botaoNumeros");
        botaoNumeros.style.display = 'none';
        for(i = 0; i <= 15; i++) {
            if (i % 2 == 0) {
                text.innerHTML += i + "<br>";
            } else {
                continue
            }
        }
    }