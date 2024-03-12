function validar() {
  var nombre, apellido, comentario;
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  comentario = document.getElementById("comentario").value;

  function validetionNombre(nombre) {
      return /^[a-zA-Z]+$/.test(nombre); // Utilizamos una expresión regular para verificar si solo contiene letras
  }

  if (!validetionNombre(nombre)) {
      alert("El campo nombre contiene caracteres no permitidos");
      return; // Detener la ejecución si el nombre no es válido
  }

  if (nombre === "") {
      alert("El campo nombre está vacío");
      return;
  }

  if (apellido === "") {
      alert("El campo apellido está vacío");
      return;
  }

  if (comentario === "") {
      alert("El campo comentario está vacío");
      return;
  }

  // Obtener el formulario
  var reset = document.getElementById('myform');
  var miToast = document.getElementById('miToast');

  // Agregar un controlador de eventos para el evento de envío del formulario
  reset.addEventListener('submit', function(event) {
      // Evitar que el formulario se envíe de forma predeterminada
      event.preventDefault();
      var toast = new bootstrap.Toast(miToast);
      toast.show();

      // Restablecer el formulario después de enviarlo
      myform.reset();
  });
}