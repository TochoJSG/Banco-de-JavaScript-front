const {Router} = require('express');
const router = Router();
const fileSystem = require('fs');//Modulo de Mode para leer archivos del sistema

const json_row = fileSystem.readFileSync('./registros.json','utf-8');
let rows = JSON.parse(json_row);

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
	
	const jsonRows = JSON.stringify(registros);
	fileSystem.writeFileSync('src/registros.json',jsonRows,'utf-8');//Lee ruta
	//res.send('received');
}

function getRows(){
	return rows;
}