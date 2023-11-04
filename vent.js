//Handle Data for Swiper
const vent=document.querySelector('.vent');
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
	if(item.clase=="vent"||item.clase=="KeybordMouse"){
	plantilla+=`<div class="contCardAmz">
	<div class="coverLaCard">
		<img src="${item.imBase}"/>
	</div>
	<div class="detailsLaCard">
	<div>
		<img src="${item.imProd}"/>
		<h2>${item.title}
			</h2>
		<a target="_blank" href="${item.url}">Comprar en Amazon
			</a>
	</div>
	</div>
	</div>`;
	}
	})
	cards.innerHTML=plantilla;
}
function eqvent(){
vent.innerHTML=`<h2>Tecnisismos</h2>
		<button class="collapsible">Plug & Play</button>
		<div class="contentCola"><p>“Conectar y Usar” característica que permite a los dispositivos poder utilizarse sin la necesidad de configuración. Se conecta y se usa.
			</p></div>
		<button class="collapsible">RGB</button>
		<div class="contentCola"><p>Red Green Blue, Rojo Verde Azul, se refiere simplemente a colores de las luces led. Ilumina con los colores del arcoiris.
			</p></div>
		<button class="collapsible">Caudal de Aire</button>
		<div class="contentCola"><p>El caudal de aire de un ventilador mide la cantidad de aire que el ventilador hace pasar por sus aspas por unidad de tiempo. El caudal se mide en CFM o m3/h, cuanto mayor sea el valor, mayor será la cantidad de aire que mueve el ventilador. Un CFM de 50 es el número mínimo para hacer que un ventilador sea eficiente.
			</p></div>
		<button class="collapsible">Presión Estática</button>
		<div class="contentCola"><p>Representa la fuerza con la que el ventilador empuja el aire a través de sus aspas. La presión estática se mide en mmH2O, cuanto mayor sea este valor mayor será la presión con la que el ventilador empuja el aire. Lo ideal sería optar por un ventilador que supere los 2 mmH2O, o al menos se acerque mucho a este valor.
			</p></div>
		<button class="collapsible">Ruido</button>
		<div class="contentCola"><p>A excepcion de los que puedan sentir amor por las maquinas o algo asi a ningún usuario le gusta que su PC sea muy ruidoso, por ello es importante escoger ventiladores que sean lo más silenciosos posible. El ruido se mide en decibelios (dBa) y deberíamos optar por un modelo que no sobrepase los 30 dBa. El ruido generado pro el ventilador aumenta a medida que aumenta su velocidad de giro, aunque también aumentan los valores de CFM y mmH2O, es por ello que debemos buscar el mejor compromiso posible entre silencio y rendimiento.
			</p></div>
		<button class="collapsible">Rodamientos</button>
		<div class="contentCola"><p>Son los cojinetes que están dentro del ventilador y permiten su giro, estos se desgastan con el uso, por lo que es importante que sea de gran calidad. En la actualidad los mejores ventiladores tienen rodamientos hidráulicos o de levitación magnética.
			</p></div>
		<button class="collapsible">Iluminacion Retroiluminacion</button>
		<div class="contentCola"><p>Es una cualidad estetica muy agradable, puede ser funcional si se trabaja en espacios con poca luz pero realmente es mas estitico. Puede hacer ver el trabajo mas tecnologico e ineteresante pero que no aporta nada al rendimiento del ventilador. La iluminación puede ser un añadido estético interesante, pero nunca deberías ponerla por encima de la calidad y las prestaciones, es mejor optar por un ventilador con altos valores de CFM y mmH2O pero que no tenga luces.
			</p></div>`;
}
document.addEventListener('DOMContentLoaded',e=>{
	fetchCards();
	eqvent();
	cola();//Comentar Si me la pelo
	});