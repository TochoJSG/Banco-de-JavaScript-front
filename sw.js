const sw=document.querySelector('.sw');
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
	if(item.clase=="sw"||item.clase=="cels"){
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
function eqsw(){
	sw.innerHTML=`
		<h2>Tecnisismos</h2>
		<button class="collapsible">Heart Rate Sensor</button>
		<div class="contentCola"><p>Se refeire a que trae un sensor, puede ser infrarrojo, al reverso de la pantalla principal; con el es posible hacer las mediciones de salud.
			</p></div>
		<button class="collapsible">SIM</button>
		<div class="contentCola"><p>Chip de telefonia, para tener linea, llamar e incluso mensajear, sin depender de la conexion a un celular via bluetooth. Es un minicelular que puede hacer recargar telefonicas. Es importante contemplar que estos aparatos pueden estar limitados a algunas compañias telefonicas.
			</p></div>
		<button class="collapsible">OS Support</button>
		<div class="contentCola"><p>Se refiere a la compatibilidad con el software del telefono. Con que sistemas operativos se puede conectar, con que versiones de android o Mac. Generalmente, Tecnologias nuevas reconocen viejas, pero las viejas no reconocen las nuevas, traduccion "un celular no tan nuevo puede no ser compatible con un smartwatch nuevo, no solo por el SO, tambien por la version de Bluetooth del aparato"
			</p></div>
		<button class="collapsible">Battery Bateria</button>
		<div class="contentCola"><p>Algo muy importante es la bateria y la carga en estos dispositivos. Algunos tienen una carga muy especial quitando una de las correas y usando un PC, suelen ser dificultosos y de poca calidad. Los mejores se conectam USB y al otro extremo un conector magnetico. Hay relojes que duran hasta mas de una semana.
			</p></div>
		<button class="collapsible">Waterproof</button>
		<div class="contentCola"><p>Se refiere a que el dispositivo es aprueba de agua. La capacidad varia si es IP55, IP68... algunos solo resisten que te laves las manos y con otros se puede nadar. Profundizamos en los estanderes IP a continuacion.
			</p></div>
		<button class="collapsible">IP</button>
		<div class="contentCola"><p>Estandar para clasificar el nivel de proteccion contra la entrada de marteriales del exterior. Que materiales y circunstancias soporta un dispositivo y cuales no.
			</p></div>
		<button class="collapsible">IP55, IP68</button>
		<div class="contentCola"><p>IP es un prefijo para saber la resistencia del aparato.</p>
			<p>El primer numero luego de IP va del 0 al 6 y se refiere a la resistencia al polvo; <b>0</b> es sinn proteccion contra polvo, <b>1</b> no le entran objetos de esfera de 50mm (protege contra algunas peluzas pero el polvo se mete); <b>2</b> evita entrada de objetos de 12.55mm; <b>3</b> evita entrada de objetos de 2.5mm; <b>4</b> protege entrada de objetos mas chicos desde 1mm; <b>5</b> entrara polvo pero nada significativo para afectarlo; <b>6</b> te grantizan que no le ntrara polvo</p>.
			<p>El segundo numero indica el grado de resistencia a los liquidos; <b>0</b> Sin proteccion; <b>1</b> proteccion contra goteo por un tiempo limitado de unos 10 minutos; <b>2</b> un poco mas de proteccion contra goteo, pero contra gotas mas grandes; <b>3</b> Soporta spray durante un tiempo limitado de aporx 5 minutos; <b>4</b> Resiste chorros de agua por mas de 5 minutos hasta a 10 litros por minuto; <b>5</b> Protege contra chorros de agua desde distancias mas cercanas contra unos 12.5 litros por minuto; <b>6</b> Este nivel ya soporta chorros de agua muy potentes de mas cerca y con mas presion y por mas tiempo; <b>7</b> protege contra inmersion completa a 1 metro de profundidad por unos 30 minutos; <b>8</b> Esta es la buena, resiste inmersion completa el el agua por tiempo continuo, puedes nadar con el sin problemas, teoricamente; <b>9K</b> esta ya esta exagerada, pues resiste chorros de agua a corto alcance de alta presion y a temperaturas altas, uso ya industrial o algo asi.</b>
			<p>Resumen, lo maximo en proteccion es IP69K, pero lo mejor en lo comercial es un IP68, resiste el maximo en cuanto al polvo y al agua, asi se van combinando, un IP55 resiste algo de polvo un que lo uses en la lluvia al bajar de tu vehiculo o periodos cortos.</p>
			<p>pueden tener letras adicionales; <b>D</b> dispositivo con cable; <b>f</b> proteccion contra aceite; <b>H</b> de alto voltaje(no aplica); <b>M</b> el dispositivo se probo en movimiento(genial); <b>S</b> el dispositivo estaba inmobil durante la prueba; <b>W</b> Contra condiciones climatologicas </p>
			</div>
		<button class="collapsible">LCD</button>
		<div class="contentCola"><p>Liquid Crystal Display es la pantalla, una pantalla LCD es estupenda pues tienen muchos pixeles lo que se traduce en muy buena calidad grafica por lo que se usan para ver imagenes fijas y en movimiento.
			</p></div>
		<button class="collapsible">Full Touch</button>
		<div class="contentCola"><p>Se refiere a que la pantalla es totalmente tactil como un smartphone. Es comun pensar que un smartwatch es 100% tactil, pero no, algunos limitan el touch solo para algunos comandos basicos.
			</p></div>
		<button class="collapsible">SD</button>
		<div class="contentCola"><p>Se refiere que tiene la capacidad de aceptar a una tarjetita de memoria externa que se inserta para expandir la memoria. Muy util en cualquier dispositivo.
			</p></div>
		<button class="collapsible">Monitoreo de SpO2</button>
		<div class="contentCola"><p>Medicion del nivel de oxígeno en la sangre para que puedas detectar cualquier indicio de cambio importante en tu condición física y bienestar.
			</p></div>
		<button class="collapsible">Tarjeta TF</button>
		<div class="contentCola"><p>Fruto de la colaboracion de SanDisk y Motorola en 2004, es una pequeña tarjeta de memoria flash basada en la tecnología NAND MLC y el controlador SanDisk. La tarjeta SD es una tarjeta de memoria de nueva generación que utiliza una memoria flash semiconductora. La tarjeta SD fue el resultado conjunto de SanDisk, Panasonic y Toshiba en 1999. Una TF puede convertirse en una SD con un adaptador adecuado, pero, la última no puede utilizarse en ningún dispositivo pensado en conexión de una tarjeta TF. Ambas tienen un tamaño diferente. La tarjeta TF usualmente se usa en <a href="">Smartphones</a> debido a su diminuto tamaño, tambien en reproductores de música portátiles, dispositivos GPS e incluso en algunos discos de memoria flash. Las tarjetas SD se utilizan principalmente en reproductores multimedia, computadoras, laptops, cámaras y otros.
			</p></div>
		<button class="collapsible">USB Tipo C o USB-C </button>
		<div class="contentCola"><p>Tipo de conector más pequeño y ovalado por lo que puede conectarse sin una orientación específica, a diferencia de las versiones anteriores que requieren un lado específico para conectarse. Nuevo estándar tecnologico por su mayor velocidad en transferencia de datos, intensidad en la corriente eléctrica y practicidad de conexion.
			</p></div>
		<button class="collapsible">AMOLED</button>
		<div class="contentCola"><p>Son pantallas OLED de matriz activa con su misma tecnologia. La diferencia es que tienen una matriz que ilumina cada píxel solo cuando este se activa electrónicamente. Esto repercute directamente en el consumo de batería, razón por la que muchos móviles la tienen.
			</p></div>
		<button class="collapsible">TruRelax</button>
		<div class="contentCola"><p>Monitoreo del estrés a través de la app, para lo que ofrece un entrenamiento de respiración por niveles que ayuda a reducirlo.
			</p></div>
		<button class="collapsible">Monitoreo de SpO2</button>
		<div class="contentCola"><p>Medicion del nivel de oxígeno en la sangre para que puedas detectar cualquier indicio de cambio importante en tu condición física y bienestar.
			</p></div>
		<button class="collapsible">TruSeen</button>
		<div class="contentCola"><p>Se refiere a que incluye una funcion de analisis del ritmo cardiaco.
			</p></div>`;
}
document.addEventListener('DOMContentLoaded',e=>{
	fetchCards();
	eqsw();
	cola();
	});