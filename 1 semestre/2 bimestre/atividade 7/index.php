<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<center>
        <h3>
            Tabuada
        </h3>
  
        <form method="POST">
            Entre um numero: 
            <input type="text" name="number">
              
            <input type="Submit" 
                value="Multiplicar">
        </form>
</center>

<?php
if($_POST and isset($_POST["number"])) {
    $num = $_POST["number"];
  
    echo nl2br("<p style='text-align: center;'>
        Tabuada do Numero $num: </p>
    ");
          
    for ($i = 1; $i <= 10; $i++) {
        echo ("<p style='text-align: center;'>$num"
            . " X " . "$i" . " = " 
            . $num * $i . "</p>
        ");
    }
}
?>

<br> <br>

<form method="POST">

    Entre a Primeira Nota 
    <input type="number" name="nota1"><br><br>

    Entre a Segunda Nota
    <input type="number" name="nota2"><br><br>

    Entre a Terceira Nota
    <input type="number" name="nota3"><br><br>

    Entre a Quarta Nota 
    <input type="number" name="nota4"><br><br>

    <input type="Submit" 
        value="Calcular">
</form>

<?php
    $nota1 = "";
    $nota2 = "";
    $nota3 = "";
    $nota4 = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST" and isset($_POST["nota1"])){
        $nota1 = $_POST['nota1'];
        $nota2 = $_POST['nota2'];
        $nota3 = $_POST['nota3'];
        $nota4 = $_POST['nota4'];

        echo("<h2>Resultado da média:</h2>");
        $media = ($nota1 + $nota2 + $nota3 + $nota4) / 4;
        echo "Média: $media <br>";
        if($media < 60 && $media >= 40) {
            echo ("Aluno de Recuperação");
        }
        if($media < 40) {
            echo ("Aluno Reprovado!");
        }
        if($media >= 60) {
            echo ("Aluno Aprovado!");
        }
    }
?>

<br> <br>

<form method="POST">

    Entre o Primeiro Número:
    <input type="number" name="num1"> <br><br>

    Entre o Segundo Número:
    <input type="number" name="num2"> <br><br>

    <label for="operation">Operação</label>
    <select name="operation" id="operation">
        <option value="">Escolha uma operação</option>
        <option value="subtrair">Subtrair</option>
        <option value="somar">Somar</option>
        <option value="dividir">Dividir</option>
        <option value="multiplicar">Multiplicar</option>
    </select>
    <br> <br>
    <input type="submit" value="Calcular">
    <br>
</form>

<?php
    $operacao = filter_input(INPUT_POST, 'operation', FILTER_SANITIZE_STRING);
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];

    if($operacao == "subtrair") {
        $result = $num1 - $num2;
        echo "Resultado: ". $result;
    }
    if($operacao == "somar") {
        $result = $num1 + $num2;
        echo "Resultado: ". $result;
    }
    if($operacao == "dividir") {
        $result = $num1 / $num2;
        echo "Resultado: ". $result;
    }
    if($operacao == "multiplicar") {
        $result = $num1 * $num2;
        echo "Resultado: ". $result;
    }
?>
</body>
</html>