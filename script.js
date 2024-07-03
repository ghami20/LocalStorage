function Ingresar(){
    var nombre = document.getElementById("nombre").value;
    var formulario = document.getElementById("formulario");
  
    if (nombre.length =! 0) {
        var usuario ={
            "nombre":nombre
        };
        localStorage.setItem("Conectado",JSON.stringify( usuario));//Aca guarda el usuario
        formulario.submit();
    }else{
        alert("Error al ingresar");
    }

}
function Cerrar(){
    alert("Se borro el cache")
    localStorage.clear();
    
}

window.onload= function(){
    var usRegis = document.getElementById("UsuariosRegistradod");

    var UsuarioGuardado = JSON.parse( localStorage.getItem("Conectado"));

    if (UsuarioGuardado == null) {
        usRegis.textContent = UsuarioGuardado.nombre;
    }else{
        alert("No podes ingresar a esta página no estas logueado")
    }
    
}
