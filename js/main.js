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
	},
    isSelected: function(_value){
        var isValid= true;
        if(_value == 0){
            isValid= false;
        }
        return isValid;
    }
}

function validateForm() {
	var name=document.getElementById("name");
	var lastName=document.getElementById("lastname");
	var email=document.getElementById("input-email");
	var password=document.getElementById("input-password");
    
    var select= document.getElementsByTagName("select")[0];
    console.log(select.value);

	// -------------------------------- validacion de texto NOMBRE
    if(validator.isText(name.value)){
        removeMessage("name");
    }
    else{
        createMessage("name","No es válido");
    }
    
    // -------------------------------- validacion de texto APELLIDO
    if(validator.isText(lastName.value)){
        removeMessage("lastname");
    }
    else{
        createMessage("lastname","No es válido");
    }
    
    // -------------------------------- validacion de EMAIL
    if(validator.isEmail(email.value)){
        removeMessage("input-email");
    }
    else{
        createMessage("input-email","No es válido");
    }
    
    // -------------------------------- validacion de CONTRASEÑA
    if(validator.isPassword(password.value)){
        removeMessage("input-password");
    }
    else{
        createMessage("input-password","No es válido");
    }
    
    // -------------------------------- validacion de SELECCION
    if(validator.isSelected(select.value)){
        removeMessage("select");
    }
     else{
        createMessage("select","No es válido");
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
    else{
		//El span ya existe
		if(elemento.nextSibling.tagName == 'span'){
			elemento.nextSibling.innerHTML = _message;
		}
        else{
			elemento.parentNode.removeChild(elemento.nextSibling);
			var span = document.createElement('span');
			span.innerHTML = _message;
			elemento.parentNode.appendChild(span);
		}
	}
}

function removeMessage(_inputId){
    var elemento= document.getElementById(_inputId);
    // si es que existe el span
    if(elemento.nextSibling != null){
        elemento.parentNode.removeChild(elemento.nextSibling);
    }
}

