const peri=document.querySelector('.peris');
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
	if(item.clase=="KeybordMouse"||item.clase=="vent"){
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
function eqperi(){
	peri.innerHTML=`
		<h2>Ver Sus Tecnisismos</h2>
		<button class="collapsible">Wireless</button>
		<div class="contentCola"><p>Se refiere a conexion inalambrica, generalmente es por Bluetooth.
			</p></div>
		<button class="collapsible">Ajustable DPI</button>
		<div class="contentCola"><p>[Tenisismo de un Mouse] Esta especificacion es mas reelevante para los jugadores o gente de diseño grafico. Se refiere a la precision del mouse y al tiempo de reaccion, cuanto mas alto sea el PDI sera mas preciso y mas rapido el mouse.
			</p></div>
		<button class="collapsible">Conexion Dual</button>
		<div class="contentCola"><p>Permite elegir entre 2 tipos de conexion con el dispositivo o con algunos pueden estar combinados en simultaneo
			</p></div>
		<button class="collapsible">PPP ajustable</button>
		<div class="contentCola"><p>[Tenisismo de un Mouse] Unidad que determina la sensibilidad del mouse al tacto. Cuanto mayor es este valor, moyor sensibilidad tiene el 'raton', y al detectar con mayor sesnibilidad al mas minimo movimiento, mejora sensiblemente el control durante un juego.
			</p></div>
		<button class="collapsible">Teclado a membrana</button>
		<div class="contentCola"><p>Sencillos en su diseño, se llama asi por su constitucion de una capa de material elastico. Son buena opcion para un negocio, o para ponerle a los empleados en la oficina, pues aunque algunos lo consideran mas incomodo las teclas son extremadamente silenciosas y son muy ligeros.
			</p></div>
		<button class="collapsible">Teclado a Mecanico</button>
		<div class="contentCola"><p>Mejores para el gaming o trabajos de precision, el recorrido de sus teclas es mas comoda y mejor al pulsarlas, lo que le da mas precision. Una desventaja es que puede hacer mas ruido la pulasion de sus teclas, ahora que si estas dispuesto a invertir bien existen alternativas y modelos que atacan esa desventaja dejando como gran desventaja el costo, que es mucho mayor que uno de membrana.
			</p></div>
		<button class="collapsible">Teclado de Tijera</button>
		<div class="contentCola"><p>Tecnologia muy difundida en portatiles, se llama asi por su funcionamiento que consiste en 2 pequeñas piezas de plastico entrelazados como tijera.
			</p></div>
		<button class="collapsible">Teclado de Mariposa</button>
		<div class="contentCola"><p>Es el teclado mas fino, pues las teclas tienen menos recorrido por lo que necesitan menos espacio, se llama asi por 2 componentes debajo de cada tecla que asemejan a alas de mariposa.
			</p></div>
		<button class="collapsible">Sensor optico</button>
		<div class="contentCola"><p>[Tenisismo de un Mouse] Es el capaz de detetar una presencia o algun objeto a distancia una distancia. Se refiere a la luz debajo de los mouse modernos, antes traian una bola para detectar el movimiento de modo analogico. 
			</p></div>
		<button class="collapsible">Teclado Retroiluminado</button>
		<div class="contentCola"><p>Usando un sensor de luz, se activara la luz automaticamente en situaciones de poca iluminacion, puede ser ajustado para activarse o dasactivarse un tiempo decidido.
			</p></div>
		<button class="collapsible">RGB</button>
		<div class="contentCola"><p>Red Green Blue, Rojo Verde Azul, se refiere simplemente a colores.
			</p></div>
		<button class="collapsible">Teclado LED RGB</button>
		<div class="contentCola"><p>Se refiere a que la luz esta con focos LED y es de los colores RedGreenBlue (Rojo,Verde,Azul).
			</p></div>
		<button class="collapsible">Ergonomia Ergonomico</button>
		<div class="contentCola"><p>Se refiere al diseño de algunos componentes o parte de un objeto. Un diseño ergonomico debe ser comodo de usar y facil, como agarraderas de goma con diseño especial para que no se resbale de las manos; o auriculares ergonomicos deben ser comodos y estar bien ajustados al oido para no caerse con el movimiento.
			</p></div>
		<button class="collapsible">Waterproof</button>
		<div class="contentCola"><p>Se refiere a que el dispositivo resiste agua.
			</p></div>
		<button class="collapsible">IP</button>
		<div class="contentCola"><p>Estandar para clasificar el nivel de proteccion contra la entrada de marteriales extraños del exterior. Que soporta un dispositivo y que no.
			</p></div>
		<button class="collapsible">IP55, IP68</button>
		<div class="contentCola"><p>IP es un prefijo para saber la resistencia del aparato.</p>
			<p>El primer numero luego de IP va del 0 al 6 y se refiere a la resistencia al polvo; <b>0</b> es sinn proteccion contra polvo, <b>1</b> no le entran objetos de esfera de 50mm (protege contra algunas peluzas pero el polvo se mete); <b>2</b> evita entrada de objetos de 12.55mm; <b>3</b> evita entrada de objetos de 2.5mm; <b>4</b> protege entrada de objetos mas chicos desde 1mm; <b>5</b> entrara polvo pero nada significativo para afectarlo; <b>6</b> te grantizan que no le ntrara polvo</p>.
			<p>El segundo numero indica el grado de resistencia a los liquidos; <b>0</b> Sin proteccion; <b>1</b> proteccion contra goteo por un tiempo limitado de unos 10 minutos; <b>2</b> un poco mas de proteccion contra goteo, pero contra gotas mas grandes; <b>3</b> Soporta spray durante un tiempo limitado de aporx 5 minutos; <b>4</b> Resiste chorros de agua por mas de 5 minutos hasta a 10 litros por minuto; <b>5</b> Protege contra chorros de agua desde distancias mas cercanas contra unos 12.5 litros por minuto; <b>6</b> Este nivel ya soporta chorros de agua muy potentes de mas cerca y con mas presion y por mas tiempo; <b>7</b> protege contra inmersion completa a 1 metro de profundidad por unos 30 minutos; <b>8</b> Esta es la buena, resiste inmersion completa el el agua por tiempo continuo, puedes nadar con el sin problemas, teoricamente; <b>9K</b> esta ya esta exagerada, pues resiste chorros de agua a corto alcance de alta presion y a temperaturas altas, uso ya industrial o algo asi.</b>
			<p>Resumen, lo maximo en proteccion es IP69K, pero lo mejor en lo comercial es un IP68, resiste el maximo en cuanto al polvo y al agua, asi se van combinando, un IP55 resiste algo de polvo un que lo uses en la lluvia al bajar de tu vehiculo o periodos cortos.</p>
			<p>pueden tener letras adicionales; <b>D</b> dispositivo con cable; <b>f</b> proteccion contra aceite; <b>H</b> de alto voltaje(no aplica); <b>M</b> el dispositivo se probo en movimiento(genial); <b>S</b> el dispositivo estaba inmobil durante la prueba; <b>W</b> Contra condiciones climatologicas </p>
			</div>
		<button class="collapsible">LCD</button>
		<div class="contentCola"><p>Liquid Crystal Display, es la pantalla, pero una pantalla LCD es estupenda pues tienen muchos pixeles lo que se traduce en muy buena calidad grafica por lo que se usan para ver imagenes fijas y en movimiento.
			</p></div>
		<button class="collapsible">USB Tipo C o USB-C </button>
		<div class="contentCola"><p>Tipo de conector más pequeño y ovalado por lo que puede conectarse sin una orientación específica, a diferencia de las versiones anteriores que requieren un lado específico para conectarse.<br>Nuevo estándar tecnologico por su mayor velocidad en transferencia de datos, intensidad en la corriente eléctrica y practicidad de conexion.
			</p></div>
		<button class="collapsible">DPI</button>
		<div class="contentCola"><p>Magnitud usada para medir la sensibilidad de un ratón, cuanto más alto sea el DPI, más lejos se irá el cursor moviéndolo muy poco.
			</p></div>
		<button class="collapsible">QWERTY </button>
		<div class="contentCola"><p>Distribución más popular de las teclas de un teclado. El término surge del orden de las seis primeras letras, de izquierda a derecha, en la fila superior.
			</p></div>
		<button class="collapsible">Ghosting</button>
		<div class="contentCola"><p>Fenómeno ocurrido al presionar más de 6 teclas, no obtenemos respuesta en el juego. Básicamente, el teclado no emite ningún comando al PC, y parece que no estemos presionando ninguna. En un uso habitual no afecta, pero para juego como GTA o otros juegos complejos si que afecta.
			</p></div>
		<button class="collapsible">Anti-Ghosting </button>
		<div class="contentCola"><p>Funcionalidad que soluciona el ghosting, permitiendo que podamos presionar varias teclas y que el teclado ingrese todos los carácteres o comandos.
			</p></div>
		<button class="collapsible">Plug & Play</button>
		<div class="contentCola"><p>“conectar y usar” característica que permite a los dispositivos poder utilizarse sin la necesidad de configuración.
			</p></div>`;
}
document.addEventListener('DOMContentLoaded',e=>{
	fetchCards();
	eqperi();
	cola();
	});