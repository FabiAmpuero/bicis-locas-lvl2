function validateForm(){
    var name=document.getElementById("name");
    var lastName=document.getElementById("lastname");
    nombreText();
    apellidoText();
    correoText();
    passwordText();
    selectValid();
    name.addEventListener("keyup",isMayus(name));
    lastName.addEventListener("keyup",isMayus(lastName));
}

function haveNumbers (_value){
    var regex= /[0-9]/g;
    return regex.test(_value);
}
function isComplete (_value){
    if(_value.length==0){
        return true;
    }
}
function createSpan (_value,_menssage){
    var span=document.createElement("span");
    span.innerHTML=_menssage;
    _value.parentNode.appendChild(span);
}
function removeSpan (_value){
    _value.parentNode.removeChild(_value.nextSibling);
}

function isMayus (_value){
    var array=_value.value.split("");
    var first=array[0];
    var upper=first.toUpperCase();
    var space = false;
    
    for(var i=1; i<array.length; i++) {
            if(space){
                upper += array[i].toUpperCase();
                space = false;
            } else {
                upper += array[i].toLowerCase();
                if(array[i] == " ")
                    space = true;
            }
        _value.value = upper;
    }
}

function nombreText (){
	var name=document.getElementById("name");
    
    if(name.nextSibling == null){
        if(isComplete(name.value) || haveNumbers(name.value)){
            createSpan(name,"Nombre inválido");
        }       
    } else{
        if(name.nextSibling != null){
            if(!isComplete(name.value) && !haveNumbers(name.value)){
                removeSpan(name);
            }
        }
    }
}

function apellidoText (){
	var lastName=document.getElementById("lastname");
    if(lastName.nextSibling == null){
        if(isComplete(lastName.value) || haveNumbers(lastName.value)){
            createSpan(lastName,"Apellido inválido");
        }
    } else{
        if(lastName.nextSibling != null){
            if(!isComplete(lastName.value) && !haveNumbers(lastName.value)){
                removeSpan(lastName);
            }
        }
    }
}

function correoText (){
    var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var correo=document.getElementById("input-email");
    if(correo.nextSibling == null){
        if(isComplete(correo.value) || regex.test(correo.value)==false){
            createSpan(correo,"Correo inválido");
        }
    } else{
        if(correo.nextSibling != null){
            if(!isComplete(correo.value) && regex.test(correo.value)==true){
                removeSpan(correo);
            }
        }
    }
}

function passwordText (){
    var password=document.getElementById("input-password");
    if(password.nextSibling==null){
        if(password.value=="123456" || password.value=="098754" || password.value.length<6){
            createSpan(password,"Esta Contraseña no es válida");
        }
    } else{
        if(password.nextSibling != null){
            if(password.value.length>=6 && password.value!="123456" && password.value!="098754"){
                removeSpan(password);
            }
        }
    }
}

function selectValid (){
    var select=document.getElementById("select");
    if(select.nextSibling == null){
        if(select.value==0){
            createSpan(select,"Seleccione una bicicleta");
        }       
    } else{
        if(select.nextSibling != null){
            if(select.value != 0){
                select.parentNode.removeChild(select.nextSibling);
            }
        }
    }
}