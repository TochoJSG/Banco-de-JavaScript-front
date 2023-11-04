var rows = [];

function addRows(id,name,country,birthday,email){
	var newRow = {
		id: id,
		name: name,
		country: country,
		birthday: birthday,
		email: email
	};
	
	console.log(newRow);
	rows.push(newRow);
}

function getRows(){
	return rows;
}