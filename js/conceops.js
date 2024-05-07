document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calcular").addEventListener("click", function() {
        var numCotizacion = document.getElementById("num-cotizacion").value;
        var descripcion = document.getElementById("descripcion").value;
        var precio = parseFloat(document.getElementById("precio").value);
        var porcentajePago = parseFloat(document.getElementById("porcentaje-pago").value);
        var plazo = parseInt(document.getElementById("plazo").value);

        var pagoInicial = precio * porcentajePago;
        var totalAFinanciar = precio - pagoInicial;
        var pagoMensual = totalAFinanciar / plazo;

        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "Pago Inicial: $" + pagoInicial.toFixed(2) + "<br>" +
                                "Total a Fin: $" + totalAFinanciar.toFixed(2) + "<br>" +
                                "Pago Mensual: $" + pagoMensual.toFixed(2);
        resultadoDiv.style.display = "block";
    });
});
