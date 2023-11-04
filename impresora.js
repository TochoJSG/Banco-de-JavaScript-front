const imp=document.querySelector('.impresora');
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
	if(item.clase=="impresoras"){
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
function impresoras(){
	imp.innerHTML=`
		<h2>Tecnisismos</h2>
		<button class="collapsible">PPP Puntos Por Pulgada (Dots Per Inch)</button>
		<div class="contentCola"><p>Es una unidad de medida para resoluciones de impresión, concretamente, el número de puntos individuales de tinta que una impresora o tóner puede producir en un espacio lineal de una pulgada.
			</p></div>
		<button class="collapsible">EcoTank</button>
		<div class="contentCola"><p>Es una tecnologia muy difundida por su ahorro en tinta. Es realmente libre de cartuchos, implicando bajos costos de impresión, miles de páginas con cada juego de botellas de tinta de reemplazo1 y cabezales de impresión diseñados para durar toda la vida útil de la impresora.
			</p></div>
		<button class="collapsible">Impresion Láser</button>
		<div class="contentCola"><p>Se refiere a que utiliza la tecnología láser para plasmar la tinta en el papel. Funcionan al proyectar una sola carga electrostática contra un rodillo. En esencia, así es como tu impresora define lo que sea que está imprimiendo, ya sea texto o imagen. Son mejores para imprimir documentos, mientras que las de inyección de tinta tienden a ser mejores para imprimir fotos. Elección para aquellos freelances, pymes o grandes oficinas con una alta demanda de impresión y que necesiten velocidad en su equipo, mientras que las impresoras LED son la elección perfecta para aquellas oficinas, pymes o negocios que necesiten imprimir rápidamente documentos a color con un equipo compacto y fiable. 
			</p></div>
		<button class="collapsible">Impresion por Inyección de Tinta</button>
		<div class="contentCola"><p>Es una tecnologia simple de impresion, depende de un medio líquido con un agente colorante añadido. Suelen ser más baratas inicialmente, pero su funcionamiento es más costoso. Si no imprime mucho, puede ser la opción más económica, aunque si pasa días sin imprimir aunque sea una página, se terminan tapando los cabezales de la impresora y posiblemente dañándose, dejando en este punto de ser la opción económica que pensábamos.
			</p></div>
		<button class="collapsible">Impresion LED</button>
		<div class="contentCola"><p>Las impresoras con esta tecnologia producen impresiones de alta calidad, mediante un haz de luz emitido por diodos, los cuales pasan carga al tambor y después el tóner es depositado en el papel para quedarse permanentemente. Considerando su calidad estan destinados a usos mas profesionales o con mas exigencia en calidad, el costo viene relacionado, obviamente.
			</p></div>
		<button class="collapsible">PPM (Páginas Por Minuto)</button>
		<div class="contentCola"><p>Unidad de medida que se emplea para determinar la velocidad de impresión, aunque una impresora más rápida no significa que sea de mejor calidad, buena para negocios.
			</p></div>
		<button class="collapsible">Monocromático</button>
		<div class="contentCola"><p>IP es un prefijo para saber la resistencia del aparato.</p>
			<p>Todos los colores (tonalidades) de un solo matiz o tono, no necesariamente blanco y negro, puede ser tonalidad azul.
				</p>.</div>
		<button class="collapsible">Wireless</button>
		<div class="contentCola"><p>Se refiere a las comunicaciones inalámbricas. Wi-Fi es la abreviatura del término inglés Wireless Fidelity.
			</p></div>`;
}
document.addEventListener('DOMContentLoaded',e=>{
	fetchCards();
	impresoras();
	cola();
	});º