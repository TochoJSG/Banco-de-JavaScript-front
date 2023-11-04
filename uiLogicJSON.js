document.querySelector('#btnSaveRows').addEventListener('click',saveRow);
function saveRow(){
	var id = document.querySelector('#txtId').value,
		sName = document.querySelector('#txtName').value,
		sPrice = document.querySelector('#txtPrice').value,
		sUrl_ml = document.querySelector('#txtUrl_ml').value,
		sIm1 = document.querySelector('#txtIm1').value,
		sIm2 = document.querySelector('#txtIm2').value,
		sIm3 = document.querySelector('#txtIm3').value,
		sDesc = document.querySelector('#txtDesc').value;
		
		addRows(sId,sName,sPrice,sUrl_ml,sIm1,sIm2,sIm3,sDesc);
		
		//drawRows();
}
/*function drawRows(){
	var list = getRows(),
	tbody = document.querySelector('#friendsTable tbody');
	
	tbody.innerHTML='';
	
	for(var i=0; i<list.length; i++){
		var row = tbody.insertRow(i), 
			idCell = row.insertCell(0),
			nameCell = row.insertCell(1),
			countryCell = row.insertCell(2),
			birthdayCell = row.insertCell(3),
			emailCell = row.insertCell(4),
			selectCell = row.insertCell(5);
			
			idCell.innerHTML = list[i].id;
			nameCell.innerHTML = list[i].name;
			countryCell.innerHTML = list[i].country;
			birthdayCell.innerHTML = list[i].birthday;
			emailCell.innerHTML = list[i].email;
			
			var inputSelect = document.createElement('input');
			inputSelect.type='radio';
			inputSelect.value=list[i].id;
			selectCell.appendChild(inputSelect);
		
		tbody.appendChild(row);
	}
}*/