<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    //msg de bem vindo
    echo("Seja Bem Vindo! <br>");
    //variavel do tipo string
    $string = "Olá Mundo!";
    //variavel do tipo inteiro
    $int = 10;
    //variavel do tipo flutuante
    $float = 10.5;
    //variavel do tipo booleano
    $bool = true;

    echo($string . "<br>");
    echo($int . "<br>");
    echo($float . "<br>");
    echo($bool . "<br>");

    define("CONSTANTE", "Esta é uma constante! <br>");
    echo CONSTANTE;
?>

<form>
    <div>Numero 1:</div>
    <input type="number" name="num1"/>
    <div>Numero 2:</div>
    <input type="number" name="num2"/>
    <div><br><input type="submit" value="Somar"></div><br>
</form>
 
<?php
if (isset($_GET['num1']) && isset($_GET['num2'])) {
 
    $num1 = $_GET['num1'];
    $num2 = $_GET['num2'];
    $sum = $num1 + $num2;
    echo $num1 . " + " . $num2 . " = " . $sum;
}
?>
</body>
</html>