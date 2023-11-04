//Handle Data for Swiper
const silla=document.querySelector('.silla');
const url4sl='amz.json';
const cards=document.querySelector('.containerCardAmz');//Aqui se insertara
const fetchCards=async()=>{
	const res=await fetch(url4sl);
	const data=await res.json();
	console.log(data);
	pintador(data);
}
const pintador=data=>{
	let plantilla='';
	data.forEach(item=>{
	if(item.clase=="sillas"){
	plantilla+=`<div class="contCardAmz">
	<div class="coverLaCard">
		<img src="${item.imBase}"/>
	</div>
	<div class="detailsLaCard">
	<div>
		<img src="${item.imProd}"/>
		<h2>${item.title}
			</h2>
		<h3>${item.precio}
			</h3>
		<a target="_blank" href="${item.url}">Comprar en Amazon
			</a>
	</div>
	</div>
	</div>`;
	}
	})
	cards.innerHTML=plantilla;
}
function insertaSilla(){
	silla.innerHTML=`<h2>Tecnisismos</h2>
		<button class="collapsible">Ortopedico</button>
		<div class="contentCola"><p>Se refiere a un tratamiento preventivo o correctivo de deformaciones o desviaciones de los huesos y/o articulaciones. Da comodidad y salud al mismo tiempo.</p></div>
		<button class="collapsible">Ergonomico Ergonomia</button>
		<div class="contentCola"><p>Se refiere al diseño de algunos componentes de un objeto o a todo, comodo y facil de usar, pues esta pensado en el diseño del cuerpo humano; como agarraderas con goma que siguen la forma de las manos, para que no resbale; o auriculares que contemplan la forma del oido para estar bien ajustados.
			</p></div>`;
}
document.addEventListener('DOMContentLoaded',e=>{
	fetchCards();
	insertaSilla();
	cola();//Comentar Si me la pelo
	});