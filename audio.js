const audio=document.querySelector('.audio');
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
	if(item.clase=="bocinas"||item.clase=="audifonos"){
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
	});cards.innerHTML=plantilla;
}
function insertaAudio(){
audio.innerHTML=`
	<h2>Tecnisismos y prestaciones de equipos de Audio</h2>
	<button class="collapsible">Tecnología TWS</button>
	<div class="contentCola"><p>(True Wireless Stereo) es lo nuevo en la evolución de bocinas inalámbricas Bluetooth. Su tecnología permite emparejar dos dispositivos de audio, conectándolos y generando un sistema de sonido de parlantes Bluetooth estéreo.
		</p></div>
	<button class="collapsible">Hub Zigbee Alexa</button>
	<div class="contentCola"><p>Un Hub es una tecnologia de Concentracion, que hace de puente o facilitador para interconectar varios dispositivos y motores para que estos se puedan controlar a distancia y de forma bidireccional.
		</p></div>
	<button class="collapsible">Tarjeta TF vs Targeta SD</button>
	<div class="contentCola"><p>Fruto de la colaboracion de SanDisk y Motorola en 2004, es una pequeña tarjeta de memoria flash basada en la tecnología NAND MLC y el controlador SanDisk. La tarjeta SD es una tarjeta de memoria de nueva generación que utiliza una memoria flash semiconductora. La tarjeta SD fue el resultado conjunto de SanDisk, Panasonic y Toshiba en 1999.<br>Una TF puede convertirse en una SD con un adaptador adecuado, pero, la última no puede utilizarse en ningún dispositivo pensado en conexión de una tarjeta TF.<br>Ambas tienen un tamaño diferente. La tarjeta TF usualmente se usa en <a href="">Smartphones</a> debido a su diminuto tamaño, tambien en reproductores de música portátiles, dispositivos GPS e incluso en algunos discos de memoria flash. Las tarjetas SD se utilizan principalmente en reproductores multimedia, computadoras, laptops, cámaras y otros.
		</p></div>
	<button class="collapsible">USB Tipo C o USB-C </button>
	<div class="contentCola"><p>Tipo de conector más pequeño y ovalado por lo que puede conectarse sin una orientación específica, a diferencia de las versiones anteriores que requieren un lado específico para conectarse.<br>Nuevo estándar tecnologico por su mayor velocidad en transferencia de datos, intensidad en la corriente eléctrica y practicidad de conexion.
		</p></div>
	<button class="collapsible">Active Noise Cancellation o ANC </button>
	<div class="contentCola"><p>Tecnologia que emplea altavoces que cancelan el ruido para reducir los sonidos de fondo no deseados.
		</p></div>
	<button class="collapsible">Dolby Audio</button>
	<div class="contentCola"><p>Conjunto de tecnologías que emplean formatos de audio y procesamiento de señal para ofrecer un sonido mejorado.
		</p></div>
	<button class="collapsible">Plug & Play</button>
	<div class="contentCola"><p>“conectar y usar” característica que permite a los dispositivos poder utilizarse sin la necesidad de configuración.
		</p></div>
	<button class="collapsible">Bafle</button>
	<div class="contentCola"><p>[Solo para Bocinas] Es la caja acustica, para este caso el armazon de plastico o el cuerpo color negro por lo general donde esta incrustada la bocina.
		</p></div>
	<button class="collapsible">Auriculares</button>
	<div class="contentCola"><p>Son los objetos que se ponen en la oreja para escuchar musica personalmente.
		</p></div>
	<button class="collapsible">Equalizador</button>
	<div class="contentCola"><p>[En Bocinas, para audifonos la equalizacion es con la APP de reproduccion que uses] Es un dispositivo o programa que regula el volumen en diferentes frecuencias para que el sonido sea mas especial a tnos graves y agudos. Le da mas fidelidad al sonido pues se pueden eliminar frecuencias o tonos indeseados y mejorar el sonido.
		</p></div>
	<button class="collapsible">Equalizador de Graves y Agudos</button>
	<div class="contentCola"><p>[En Bocinas, para audifonos la equalizacion es con la APP de reproduccion que uses]  Se trata de ajustar la forma en que se emiten los sonidos de acuerdo a la musica reproducida. En varios equipos existen perillas para subir o bajar y cambian segun el sonido reproducido. Eso es Equalizar.
		</p></div>
	<button class="collapsible">Display</button>
	<div class="contentCola"><p>[Para ambos] es la pantalita que indica cosas como porcentaje de carga, modalidad o 'X' cosa.
		</p></div>
	<button class="collapsible">Woofer</button>
	<div class="contentCola"><p>Tambien conocido como altavoz de graves, es el que produce los sonidos, la bocina como tal.
		</p></div>
	<button class="collapsible">Bafle pasivo</button>
	<div class="contentCola"><p>Es una bocina que para reproducir sonido requiere afuerza de otro dispotitivo electronico externo. Pueden recibir señal sonora desde un <a target="_blank" href="smarthphone_celulares.html">Smarthphone</a>, <a target="_blank" href="mejores_laptop.html">laptop</a>, <a target="_blank" href="mejores_computadora.html">PCs</a>, CD, DVD, mesa de mezclas o una <a target="_blank" href="almacenamiento_externo.html">SD</a> con musica cargada.<br>Son mas economicos pero, su audio tiene menos calidad, si lo que quieres es un super reventon sin escatimar consigue una que sea <b>Bafle Activo</b>.
		</p></div>
	<button class="collapsible">PotenciaSalida W P.M.P.O. o Watts P.M.P.O.</button>
	<div class="contentCola"><p>Peak Music Power Output o Salida de Potencia de Pico, es el nivel Maximo de potencia que puede tolerar tu bocina antes de quemarse, su maxima capcidad, entre mas sea el numero mejor, puede ser 6000 W PMPO, 5000, 3500,...,8000
		</p></div>
		<button class="collapsible">Bafle KSR-LINK version</button>
	<div class="contentCola"><p>Es una tecnologia de la marca Kaiser para enlazar con otra de la misma tecnologia sin cables, para un autentico escandalo. Aunque Kaiser no esta en el top de calidad en componentes y sonido Si esta en el top de venta por ser una bocina economica con un audio de ambiente.
		</p></div>
	<button class="collapsible">Audio Digital</button>
	<div class="contentCola"><p>Se refiere a como esta codificado o 'grabado' el audio, ya todo esto es digital y solo significa que es de buena calidad de audio mas que lo analogico.
		</p></div>	
	<button class="collapsible">Terminales Bateria Externa</button>
	<div class="contentCola"><p>[Para ambos] Power Bank es una bateria externa disponible tanto para bocinas como para audifonos que permite cargar otros dispositivos con puesto USB, para esto tienen el triple o mas potencia en la pila.
		</p></div>
	<button class="collapsible">Base de Carga</button>
	<div class="contentCola"><p>[Para audifonos] Es el estuche de los audifonos, que pueden reponer la energia consumida por el uso al volverlos a poner.
		</p></div>
	<button class="collapsible">Impedancia</button>
	<div class="contentCola"><p>En altavoces y audifonos nos indica cuanta opocision presentan los componentes al paso de la corriente electrica. Cuanto menor sea la impedancia mayor sera la intensidad de sonido.
		</p></div>
	<button class="collapsible">Ergonomia Ergonomico</button>
	<div class="contentCola"><p>Se refiere al diseño de algunos componentes o parte de un objeto. Un diseño ergonomico debe ser comodo de usar y facil, como agarraderas de goma con diseño especial para que no se resbale de las manos; o auriculares ergonomicos deben ser comodos y estar bien ajustados al oido para no caerse con el movimiento.
		</p></div>
	<button class="collapsible">Entrada Auxiliar</button>
	<div class="contentCola"><p>[Solo para Bocinas] se refiere a un puerto para conectar microfonos, guitarras o otros instrumento con conexion macho 'auxiliar'.
		</p></div>
	<button class="collapsible">Waterproof</button>
	<div class="contentCola"><p>Se refiere a que el dispositivo resiste agua.
		</p></div>
	<button class="collapsible">IP</button>
	<div class="contentCola"><p>Estandar para clasificar el nivel de proteccion contra la entrada de liquidos y materiales del exterior. Que soporta un dispositivo y que no.
		</p></div>
	<button class="collapsible">IP55, IP68</button>
	<div class="contentCola"><p>IP es un prefijo para saber la resistencia del aparato.</p>
		<p>El primer numero luego de IP va del 0 al 6 y se refiere a la resistencia al polvo; <b>0</b> es sinn proteccion contra polvo, <b>1</b> no le entran objetos de esfera de 50mm (protege contra algunas peluzas pero el polvo se mete); <b>2</b> evita entrada de objetos de 12.55mm; <b>3</b> evita entrada de objetos de 2.5mm; <b>4</b> protege entrada de objetos mas chicos desde 1mm; <b>5</b> entrara polvo pero nada significativo para afectarlo; <b>6</b> te grantizan que no le ntrara polvo.
			</p>
		<p>El segundo numero indica el grado de resistencia a los liquidos; <b>0</b> Sin proteccion; <b>1</b> proteccion contra goteo por un tiempo limitado de unos 10 minutos; <b>2</b> un poco mas de proteccion contra goteo, pero contra gotas mas grandes; <b>3</b> Soporta spray durante un tiempo limitado de aporx 5 minutos; <b>4</b> Resiste chorros de agua por mas de 5 minutos hasta a 10 litros por minuto; <b>5</b> Protege contra chorros de agua desde distancias mas cercanas contra unos 12.5 litros por minuto; <b>6</b> Este nivel ya soporta chorros de agua muy potentes de mas cerca y con mas presion y por mas tiempo; <b>7</b> protege contra inmersion completa a 1 metro de profundidad por unos 30 minutos; <b>8</b> Esta es la buena, resiste inmersion completa el el agua por tiempo continuo, puedes nadar con el sin problemas, teoricamente; <b>9K</b> esta ya esta exagerada, pues resiste chorros de agua a corto alcance de alta presion y a temperaturas altas, uso ya industrial o algo asi.
			</p>
		<p>Resumen, lo maximo en proteccion es IP69K, pero lo mejor en lo comercial es un IP68, resiste el maximo en cuanto al polvo y al agua, asi se van combinando, un IP55 resiste algo de polvo un que lo uses en la lluvia al bajar de tu vehiculo o periodos cortos.
			</p>
		<p>pueden tener letras adicionales; <b>D</b> dispositivo con cable; <b>f</b> proteccion contra aceite; <b>H</b> de alto voltaje(no aplica); <b>M</b> el dispositivo se probo en movimiento(genial); <b>S</b> el dispositivo estaba inmobil durante la prueba; <b>W</b> Contra condiciones climatologicas.
			</p></div>
	<button class="collapsible">LCD</button>
	<div class="contentCola"><p>Liquid Crystal Display, es la pantalla, pero una pantalla LCD es estupenda pues tienen muchos pixeles lo que se traduce en muy buena calidad grafica por lo que se usan para ver imagenes fijas y en movimiento.
		</p></div>`;
}
document.addEventListener('DOMContentLoaded',e=>{
	fetchCards();
	insertaAudio();
	cola();
	});