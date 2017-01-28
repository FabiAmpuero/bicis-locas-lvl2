// objeto literal (no tiene constructor)/ reglas de validacion
var validator={
	// Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
	isText: function(_string){
		var regex = /([a-zA-Z]+)/g;
		return regex.test(_string);
	},
	// Validar que el campo email tenga un formato válido
	isEmail: function(_string){
		var regex= /([a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]+)/g;
		return regex.test(_string);
	},
	// El campo password debe tener al menos 6 caracteres
	isPassword: function(_string){
		var isValid= true;
		if(_string.length<6 || _string == "098754" || _string == "123456"){
			isValid= false;
		}
		return isValid;
	}
}

function createMessage(_inputId, _message){
	var elemento= document.getElementById(_inputId);
	// si el span no existe
	if(elemento.nextSibling == null){
		// se crea el span
		var span= document.createElement("span");
		span.innerHTML= _message;
		elemento.parentNode.appendChild(span);
	}
}

function removeMessage(_inputId){
    var elemento= document.getElementById(_inputId);
    if(elemento.nextSibling != null){
        elemento.parentNode.removeChild(elemento.nextSibling);
    }
}


function validateForm(){
	var name=document.getElementById("name");
	var lastName=document.getElementById("lastname");
	var email=document.getElementById("input-email");
	var password=document.getElementById("input-password");
	alert("oli");
}

