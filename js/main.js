var validator={
	isText: function(_string){
		var regex = /([a-zA-Z]+)/g;
		return regex.test(_string);
	}
}