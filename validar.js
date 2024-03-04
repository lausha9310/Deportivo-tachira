function validar (){
    var nombre, apellido, comentario;
    nombre = document.getElementById("nombre").value; 
    apellido = document.getElementById("apellido").value;
    comentario = document.getElementById("comentario").value;

    if(nombre === ""){ 
        alert("El campo nombre esta vacio");
    }
  if(apellido === ""){
    alert("El campo apellido esta vacio");
  }
  if(comentario === ""){
    alert("El campo comentario esta vacio")
  };
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