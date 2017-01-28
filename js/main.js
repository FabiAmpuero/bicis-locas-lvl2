var validator={
	// Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
	isText: function(_string){
		var regex = /([a-zA-Z]+)/g;
		return regex.test(_string);
	}
}