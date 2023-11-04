//Handle Data for Swiper
const almacenamiento=document.querySelector('.almacenamiento');
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
	if(item.clase=="almacen"){
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
	});cards.innerHTML=plantilla;
}
function eqalmacenamiento(){
almacenamiento.innerHTML=`<h2>Ver sus Tecnisismos</h2>
		<button class="collapsible">Tarjeta TF vs Tarjeta SD</button>
		<div class="contentCola"><p>Fruto de la colaboracion de SanDisk y Motorola en 2004, es una pequeña tarjeta de memoria flash basada en la tecnología NAND MLC y el controlador SanDisk. La tarjeta SD es una tarjeta de memoria de nueva generación que utiliza una memoria flash semiconductora. La tarjeta SD fue el resultado conjunto de SanDisk, Panasonic y Toshiba en 1999.<br>Una TF puede convertirse en una SD con un adaptador adecuado, pero, la última no puede utilizarse en ningún dispositivo pensado en conexión de una tarjeta TF.<br>Ambas tienen un tamaño diferente. La tarjeta TF usualmente se usa en <a href="">Smartphones</a> debido a su diminuto tamaño, tambien en reproductores de música portátiles, dispositivos GPS e incluso en algunos discos de memoria flash. Las tarjetas SD se utilizan principalmente en reproductores multimedia, computadoras, laptops, cámaras y otros.
			</p></div>
		<button class="collapsible">Plug & Play</button>
		<div class="contentCola"><p>Significa “Conectar y Usar” es una característica que se refiere a poder utilizarse sin necesidad de ninguna configuración particular. Se conecta y se usa.
			</p></div>
		<button class="collapsible">USB Tipo C o USB-C </button>
		<div class="contentCola"><p>Tipo de conector más pequeño y ovalado por lo que puede conectarse sin una orientación específica, a diferencia de las versiones anteriores que requieren un lado específico para conectarse, parece poco relevante pero agiliza y facilita la conexion.<br>Nuevo estándar tecnologico por su mayor velocidad en transferencia de datos, intensidad en la corriente eléctrica y practicidad de conexion.
			</p></div>
		<button class="collapsible">Adaptador</button>
		<div class="contentCola"><p>Es una targeta mas grande donde se mete la SD para el uso en otros dispositivos como pueden ser computadores o bocinas. La SD es una targetita, que en general directamente se mete en una celular o tablet, pero, si se quiere para una computadora o camara o otro dispositivo la targeta es muy chica, para que quede se usa una targeta donde se mete la SD y que quede bien el el PC.
			</p></div>
		<button class="collapsible">Capacidad GB y TB</button>
		<div class="contentCola"><p>GigaByte, la minima actualmente es de 4Gb, raro haya una menor y es porque ya no es util por los avances en multimedia y otros archivos, ya no cabria nada. Una decente es de 8GB, dificilmente llenaras eso con uso comun, si solo llevas archivos del colegio o documentos del trabajo o fotos personales no la llenas facilmente, si es para videos o coas mas pesadas hay de 16GB, 32GB o hasta un Tera, una locura, muchisima memoria.
			</p></div>`;
}
document.addEventListener('DOMContentLoaded',e=>{
	fetchCards();
	eqalmacenamiento();
	cola();
	});