function validar (){
    var nombre, apellido, comentario;
    nombre = document.getElementById("nombre").value; 
    apellido = document.getElementById("apellido").value;
    comentario = document.getElementById("comentario").value;

    if(nombre === ""){ 
        alert("El campo nombre esta vacio");
    }
}