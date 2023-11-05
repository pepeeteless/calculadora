function inserir(caractere) {
    document.getElementById("resultado").innerHTML += caractere;
}

function limparTudo() {
    document.getElementById('resultado').innerHTML = ''
}

function apagarCaractere() {
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
    var resultadoElement = document.getElementById('resultado');
    var resultado = resultadoElement.innerHTML;
    if (resultado) {
        resultadoElement.innerHTML = eval(resultado);
    } else {
        resultadoElement.innerHTML = "Sem Valor... ";
    }
}
