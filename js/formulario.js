document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(formulario);

        // Recuperar los valores de los campos del formulario
        const nombre = formData.get("nombre");
        const edad = formData.get("edad");
        const genero = formData.get("genero");
        const ingresos = formData.get("ingresos");
        const gastos = formData.get("gastos");
        const deudas = formData.get("deudas");
        const dependientes = formData.get("dependientes");
        const nivel_educativo = formData.get("nivel_educativo");
        const profesion = formData.get("profesion");
        const estado_civil = formData.get("estado_civil");
        const nacionalidad = formData.get("nacionalidad");
        const residencia = formData.get("residencia");
        const telefono = formData.get("telefono");
        const email = formData.get("email");
        const comentario = formData.get("comentario");

        // Aquí puedes realizar las acciones necesarias con los datos del formulario,
        // como enviarlos a un servidor, procesarlos localmente, etc.

        // Ejemplo: Mostrar los datos en la consola
        console.log("Nombre:", nombre);
        console.log("Edad:", edad);
        console.log("Género:", genero);
        console.log("Ingresos mensuales:", ingresos);
        console.log("Gastos mensuales:", gastos);
        console.log("Deudas totales:", deudas);
        console.log("Número de dependientes:", dependientes);
        console.log("Nivel educativo:", nivel_educativo);
        console.log("Profesión:", profesion);
        console.log("Estado civil:", estado_civil);
        console.log("Nacionalidad:", nacionalidad);
        console.log("Lugar de residencia:", residencia);
        console.log("Teléfono de contacto:", telefono);
        console.log("Correo electrónico:", email);
        console.log("Comentarios adicionales:", comentario);

        // Puedes agregar más acciones aquí, como mostrar un mensaje de confirmación o redirigir al usuario a otra página
    });
});
