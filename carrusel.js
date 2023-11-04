const url='amz.json';
const carrusel=document.querySelector('#carrusel-gral');

document.addEventListener('DOMContentLoaded',pedirDataMl();pedirDataAmz(););
function pedirDataMl(){
fetch(url).then(response=>
	response.json()).then(data=>{
			/*console.log(data);*/
			pintarCarrusel(data);
		}).catch(error=>console.log(error));
}
const pintarCarrusel=data=>{
	let plantilla2='';
	data.forEach(item=>{
	/*if(item.depto!="amazon"){       CHECAR h3				*/
	plantilla2+=`<div class="prod_car" id="template-carr">
	<picture>
		<img src="${item.imProd}" alt="loading..."/>
	</picture>
	<div class="details_car">
		<p>
			<b>${item.title}</b>
			<h3>${item.precio}</h3>
		</p>
	</div>
	<div class="button_car_c">
		<a target="_blank" href="${item.url}"><button class="btn_car">Ver en Amazon</button></a>
	</div>
    </div>`;
	/*}*/
	});
	carrusel.innerHTML=plantilla2;
}