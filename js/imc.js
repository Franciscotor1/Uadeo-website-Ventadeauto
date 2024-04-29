function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, introduce valores válidos para peso y altura.";
        return;
    }

    var imc = peso / (altura * altura);
    var categoriaIMC;

    if (imc < 18.5) {
        categoriaIMC = "Bajo peso";
    } else if (imc < 24.9) {
        categoriaIMC = "Peso normal";
    } else if (imc < 29.9) {
        categoriaIMC = "Sobrepeso";
    } else {
        categoriaIMC = "Obesidad";
    }

    document.getElementById('resultado').innerText = "Tu IMC es: " + imc.toFixed(2) + ". Categoría: " + categoriaIMC;
}
