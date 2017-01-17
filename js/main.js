/* -------------------------- transformar en  mayuscula con jquery
$(document).ready(function(){
    var nombre=$("#name").val();
    $("#name").keyup(function(){
        $("#name").css("text-transform", "uppercase");
    });
});
---------------------------- transformar en  mayuscula con event
    var nombre = document.getElementById("name");
    nombre.setAttribute("onkeyup","porfi()");
    function porfi(){
        nombre.value = nombre.value.toUpperCase();
    }
*/
/*var formulario=document.getElementsByClassName("form-signup");
    var funcion=document.getElementsByTagName("button")[0];
    funcion.setAttribute("onclick","validateForm()");*/


/*
var contenedor=document.getElementsByClassName("name-container")[0];
var mensaje=document.createElement("span");
var cont=document.createTextNode("Escriba su nombre, por favor");
mensaje.appendChild(cont);
mensaje.classList.add("span-box");
contenedor.appendChild(mensaje);
*/

function validateForm(){
    
    
    
    var nombre=document.getElementById("name").value;
    var apellido=document.getElementById("lastname").value;
    var correo=document.getElementById("input-email").value;
    var contrasenia=document.getElementById("input-password").value;
    
    /* --------------------------------- otra forma de poner un texto
    var contenedor=document.getElementsByClassName("input-box")[0];
    var cont=document.createTextNode("Su nombre debe comenzar con una mayúscula");
    mensaje.appendChild(cont);*/
    
/* ----------------------------------------- campo obligatorio -- */
    if (nombre.length == 0 || apellido.length == 0 || correo.length == 0 || contrasenia.length == 0) {
		alert ("Falta llenar datos");   
	}
    else {
/* ---------------------------------------- validar solo texto -- */
/* -------------------------------- primera letra en mayuscula -- */
/* ---------------------------------------------------- nombre -- */
        if(nombre.length == 0 || nombre == "") {
            var mensaje_uno=document.createElement("span");
            mensaje_uno.innerText="Escriba su nombre, por favor";
            document.getElementsByClassName("input-box")[0].appendChild(mensaje_uno);
		}
        else if ( /^[a-z]/.test(nombre.charAt(0))) {
            var mensaje_dos=document.createElement("span");
            mensaje_dos.innerText="Su nombre debe comenzar con una mayúscula";
            document.getElementsByClassName("input-box")[0].appendChild(mensaje_dos);
		}
        else if ( /[0-9]/.test(nombre)) {
            var mensaje_tres=document.createElement("span");
            mensaje_tres.innerText="En el campo nombre no se permiten números";
            document.getElementsByClassName("input-box")[0].appendChild(mensaje_tres);
        }
        
/* -------------------------------------------------- apellido -- */
        if(apellido.length == 0 || apellido == "") {
            var ape_uno=document.createElement("span");
            ape_uno.innerText="Escriba su Apellido, por favor";
            document.getElementsByClassName("input-box")[1].appendChild(ape_uno);
		} 
         else if ( /^[a-z]/.test(apellido.charAt(0))) {
            var ape_dos=document.createElement("span");
            ape_dos.innerText="Su apellido debe comenzar con una mayúscula";
            document.getElementsByClassName("input-box")[1].appendChild(ape_dos);
		}
        else if ( /[0-9]/.test(apellido)) {
            var ape_tres=document.createElement("span");
            ape_tres.innerText="En apellido no se permiten números";
            document.getElementsByClassName("input-box")[1].appendChild(ape_tres);
		}
    
/* ------------------------------------------ formato de email -- */
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(correo) ){
            var mail_uno=document.createElement("span");
            mail_uno.innerText="Error: La dirección de correo " + correo + " es incorrecta";
            document.getElementsByClassName("input-box")[2].appendChild(mail_uno);
        }
/* ---------------------------------------- formato contraseña -- */
        if (contrasenia.length < 6){
            var contra_uno=document.createElement("span");
            contra_uno.innerText="La contraseña debe tener 6 caracteres como mínimo";
            document.getElementsByClassName("input-box")[3].appendChild(contra_uno);
		}
		else if (contrasenia == "123456" || contrasenia == "098754" || contrasenia == "password") {
            var contra_dos=document.createElement("span");
            contra_dos.innerText="No se permiten '123456', '098754' y 'password' como contraseñas";
            document.getElementsByClassName("input-box")[3].appendChild(contra_dos);
		};
/* ----------------------------------------- seleccion de bici -- */
        if (document.getElementsByTagName("select")[0].value == 0){
            var selec_uno=document.createElement("span");
            selec_uno.innerText="Selecciona tu tipo de bicicleta";
            document.getElementsByClassName("input-box")[4].appendChild(selec_uno);
	    }
        else{
            var borrar=document.getElementsByClassName("input-box")[0];
                if (borrar.hasChildNodes()) {
                    borrar.removeChild(borrar.childNodes[2]);
                }
        }
    }
}

