//Handle Data for Swiper
//const url4sl='Amazon.json';
const pcs=document.querySelector('.pcs');
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
	if(item.clase=="PCS"){
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
function eqpcs(){
pcs.innerHTML=`
	<h2>Tecnisismos</h2>
	<button class="collapsible">RAM</button>
	<div class="contentCola"><p>Memoria principal para la ejecucion de los programas, de su capacidad depende la rapidez y eficacia del equipo. Los equipos actuales ya tienen capacidades en GB, generalmente mas de 4, pues los programas y archivos actuales al ser de mayor calidad y funciones necesitan mas memoria para ser procesados; videojuegos, programas de edicion multimedia son ejemplos de software que requiere mucha memoria y esfuerzo para el equipo.
	<br>Trabaja en armonia con el CPU que es el cerebro, en la RAM se cargan o almacenan las tareas(programas) que ejecutara la CPU, por eso importancia de su capacidad, con poca memoria se trabara si se tienen muchos programas abiertos al mismo tiempo.
	<br>Existe la posibilidad de extender o mejorar su capacidad, pero requiere conocimiento tecnico y puede invalidar garantias la manipulacion de esta.
		</p></div>
	<button class="collapsible">SSD - Disco Duro</button>
	<div class="contentCola"><p>Es la memoria en el se almacenan las descargas, programas, imagenes, archivos, etc. Las aplicaciones pueden ocupar mucha memoria, videojuegos ocupan demasiada (si son como GTA es muchisima), por eso su relevancia aunque para suplir sus actividades existen alternativas accesibles y faciles.
	<br>Existen discos duros externos de mas de un Tera de capacidad, USBs o SDs pueden arreglar problemas e incluso se puede mejorar el almacenamiento ampliando directamente el Disco del equipo. Servicios en la NUBE(drive, icloud,...) tambien pueden ampliar la capacidad de almacanamiento y no se limita a alamacenar archivos tambien se pueden ejecutar programas remotamente teniendo conexion.
		</p></div>
	<button class="collapsible">SO / Sistema Operativo</button>
	<div class="contentCola"><p>Es el programa principal y "base" de los dispositivos, gestiona el uso y funcionamiento de las apps y demas programs y sirve de interfaz para el ususrio y lo electronico. De este depende que puedas usar programas, pues la compatibilidad de muchas aplicaciones depende de ciertas versiones Versiones de Windows o Mac (windows 10) o <b>Sistemas Operativos</b> especificos.
		</p></div>
	<button class="collapsible">Procesador</button>
	<div class="contentCola"><p>Es el <b>Cerebro</b> de la Computadora, aqui se procesan las cosas que haces con tu equipo. Busca que sean multinucleo(multicore) de IntelCore, lo que significa es que tiene multiple procesadores o Cerebros en un solo Chip o Cerbro, (muy potente)<br>Los modelos mas populares de IntelCore son: IntelCore i3 = 2 nucleos(cerebros), IntelCore i5 = cuatro nucleos(cerebros), IntelCore i7 4 y 6 nuecleos(muy potente).
	Un procesador potente va de la mano a una RAM potente, pues un procesador multinucleo o multicerebro requiere una memoria que pueda "recordar" todos las tareas
	(programas) que ejecuta a la vez.
	"Imagina una persona con poca capacidad mental con buena memoria, recuerda todas las tareas por hacer pero las ejecuta lento" para evitarlo hay que buscar procesadores rapidos ;)
		</p></div>
	<button class="collapsible">ROM</button>
	<div class="contentCola"><p>Read Only Memory Memoria solo de lectura, no tiene gran relavancia porque esa memoria solo lee, no la podemos administrar, no podemos almacenar cosas en ella, aunque muchos vendedores la incluyen dentro de la descripcion del producto. En ella esta contenido el Sistema Operativo y otros programas y archivos necesarios para que tu equipo funcione.
		</p></div>
	<button class="collapsible">Targetas de Graficas / Procesador Grafico/ GPU</button>
	<div class="contentCola"><p>Componente que se encuentra integrado en la placa base del PC o se instala por separado para mejorar la calidad de las imagenes proyectadas en las pantallas. Se vuelve indispensable si se trabaja con multimedia, edicion y publicidad efectiva o para el gaming.
	<br>Un fabricante prestigioso es NVIDIA (prestigio suele ser calidad), la mas potente es RTX 3090, superando la GTX que tambien es de alto rendimiento, modelos de GPU de baja potencia y bajo consumo son las targetas GT. Considera que las tagetas graficas de alto rendimiento operan minimo con 1300MegaHerzios, una targeta grafica potente consume mas recursos. Trabaja con la VRAM, las targetas graficas de alto rendimiento requieren VRAM potente.
		</p></div>
	<button class="collapsible">VRAM</button>
	<div class="contentCola"><p>Memoria especial para tareas en aplicaciones graficas y videojuegos, trabaja con la GPU(Uinidad que Procesa los Graficos), es como una <b>RAM</b> pero para lo grafico. La VRAM es a la GPU lo que la RAM a la CPU.
	<br>Es un componente especial que viene en equipos Gamer para mejorar la experiencia de juego. Esta presente en todas las Targetas Graficas, pero no es igual para todas, depende de la potencia de la GPU.
		</p></div>
	<button class="collapsible">Display</button>
	<div class="contentCola"><p>Es la pantalla de los equipos, medida en pulgadas. Pueden ser LCD simple o touch.
		</p></div>
	<button class="collapsible">LCD</button>
	<div class="contentCola"><p>Liquid Crystal Display, es un pantalla estupenda por su nitidez y calidad de imagen, gracias a que tienen muchos pixeles lo que se traduce en capacidad de resolucion increible para disfrutar imagenes fijas y en movimiento.
		</p></div>
	<button class="collapsible">Bateria</button>
	<div class="contentCola"><p>La durabilidad de la batería que tienen las computadoras también es algo a tenber en cuenta, ya que de ella dependerá el tiempo de vida que tenga y por supuesto, que vaya a tener durante las largas jornadas laborales que de vez en cuando se presentan. Los equipos que no son de apple suelen durar mucho mas y tener refacciones que alargan su ciclo de vida.
	<br>Para elegir cargador o bateria es importante que sea nueva y original pues pueden no servir igual marcas genericas.
		</p></div>
	<button class="collapsible">Entradas / Puertos</button>
	<div class="contentCola"><p>Se refiere a la compatibilidad con tecnologias y la opcion de conexion con cierto tipos de cables. A pesar de que los CD’s son una tecnologia en peligro de extincion, puede ser utiles el acceso a ello, ya sea para instalar algún programas o almacenar y disponer de cierta informacion, (como presentaciones y documentos) que deba estar disponible pese a fallos en la red y conexiones; USB, HDMI o SD.
	<br>USB es un Estandar Universal, altamente difundido por lo que tener opcion a esa tecnologia es util; carga de dispositivos y transferencia de datos son las opciones que vuelven relevante su uso; HDMI usado para presentaciones con proyector, entretenimiento y proyecciones en TV; SD es para una memoria externa
	<br>Puerto para SD es otra buena prestacion que puede ofrecer un equipo, pues significa una extension de la memoria del equipo, de gran utilidad en PCs, Portatiles, Smarthphones, Tablets que puede alargar la vida util de los dispositivos y eficientar su uso.
		</p></div>
	<button class="collapsible">Waterproof</button>
	<div class="contentCola"><p>Se refiere a que el dispositivo tiene proteccion contra agua.
		</p></div>
	<button class="collapsible">Teclado Retroiluminado</button>
		<div class="contentCola"><p>Es una prestacion agradable, util para trabajar con poca luz, mezclando colores primarios consigue una iluminacion muy rica con los tonos del arcoiris. Usando un sensor de luz, se activara la luz automaticamente en situaciones de poca iluminacion, puede ser ajustado para activarse o dasactivarse un tiempo decidido.
			</p></div>
	<button class="collapsible">Retroiluminado</button>
	<div class="contentCola"><p>Es una tecnica de iluminacion que permite iluminar pantallas, especialmente <b>LCD</b>, para mejorar el contraste y garantizar leginbilidad., incluso en zonas obscuras.
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
	<button class="collapsible">Teclado de Tijera</button>
	<div class="contentCola"><p>Tecnologia muy difundida en portatiles, se llama asi por su funcionamiento que consiste en 2 pequeñas piezas de plastico entrelazados como tijera.
		</p></div>
	<button class="collapsible">AMOLED</button>
	<div class="contentCola"><p>Son pantallas OLED de matriz activa con su misma tecnologia. La diferencia es que tienen una matriz que ilumina cada píxel solo cuando este se activa electrónicamente. Esto repercute directamente en el consumo de batería, razón por la que muchos móviles la tienen.
		</p></div>
	<button class="collapsible">USB Tipo C o USB-C </button>
	<div class="contentCola"><p>Tipo de conector más pequeño y ovalado por lo que puede conectarse sin una orientación específica, a diferencia de las versiones anteriores que requieren un lado específico para conectarse.<br>Nuevo estándar tecnologico por su mayor velocidad en transferencia de datos, intensidad en la corriente eléctrica y practicidad de conexion.
		</p></div>
	<button class="collapsible">DPI</button>
	<div class="contentCola"><p>Es una unidad de medida o magnitud establecida para medir la sensibilidad de un ratón de computador, cuanto más alto sea el DPI, más lejos se irá el cursor moviéndolo muy poco.
		</p></div>
	<button class="collapsible">QWERTY </button>
	<div class="contentCola"><p>Es la forma más popular de distribuir o organizar las teclas de un teclado. El término surge del orden de las seis primeras letras, de izquierda a derecha, en la fila superior.
		</p></div>
	<button class="collapsible">Plug & Play</button>
	<div class="contentCola"><p>“conectar y usar” característica que permite a los dispositivos poder utilizarse sin la necesidad de configuración.
		</p></div>
	<button class="collapsible">Ghosting</button>
		<div class="contentCola"><p>Es un fenómeno que le ocurre al teclado al presionar más de 6 teclas, donde no obtenemos la accion deseada; para uso normal no es problema pues los atajos computacionales basicos no ocupan mas de 3 teclas. 
		<br>Básicamente es una preocupacion para el gaming por lo que <b>debe venir integrado en equipos Gamer</b>, el teclado no emite ningún comando al PC, y parece que no estemos presionando ninguna; para juego como GTA o otros juegos con acciones y eventos complejos el teclado no respondera bien y posiblemente pierdas.
			</p></div>
	<button class="collapsible">Anti-Ghosting </button>
	<div class="contentCola"><p>Funcionalidad que soluciona el ghosting, permitiendo que podamos presionar varias teclas y que el teclado ingrese todos los carácteres o comandos. Esta debe ser una cualidad incluida en cualquier equipo Gamer.
		</p></div>
	<button class="collapsible">Tarjeta TF vs Tarjeta SD</button>
	<div class="contentCola"><p>Fruto de la colaboracion de SanDisk y Motorola en 2004, es una pequeña tarjeta de memoria flash basada en la tecnología NAND MLC y el controlador SanDisk. La tarjeta SD es una tarjeta de memoria de nueva generación que utiliza una memoria flash semiconductora. La tarjeta SD fue el resultado conjunto de SanDisk, Panasonic y Toshiba en 1999.<br>Una TF puede convertirse en una SD con un adaptador adecuado, pero, la última no puede utilizarse en ningún dispositivo pensado en conexión de una tarjeta TF.<br>Ambas tienen un tamaño diferente. La tarjeta TF usualmente se usa en <a href="">Smartphones</a> debido a su diminuto tamaño, tambien en reproductores de música portátiles, dispositivos GPS e incluso en algunos discos de memoria flash. Las tarjetas SD se utilizan principalmente en reproductores multimedia, computadoras, laptops, cámaras y otros.
		</p></div>
	<button class="collapsible">GeForce</button>
	<div class="contentCola"><p>Es un servicio streaming que provee el fabricante grafico NVIDIA con el que se pueden usar los juegos comprados desde la nube en vez de tu ordenador. Así, incluso si tienes un PC poco potente vas a poder jugar a los últimos títulos a buena calidad.
		</p></div>
	<button class="collapsible">GTX</button>
	<div class="contentCola"><p>Son modelos con un rendimiento suficientemente bueno como para jugar con garantizado.
		</p></div>
	<button class="collapsible">GT</button>
	<div class="contentCola"><p>Viene en modelos de baja potencia y bajo consumo, buenas pero cuyo rendimiento es inferior al de las GTX.
		</p></div>
	<button class="collapsible">RTX</button>
	<div class="contentCola"><p>Reciente. Son modelos de alto rendimiento que son compatibles con trazado de rayos (raytracing).
		</p></div>
	<button class="collapsible">Ray Tracing</button>
	<div class="contentCola"><p>Tecnología encargada de mejorar las iluminaciones, sombras y reflejos de los videojuegos.
		</p></div>
	<button class="collapsible">Dolby Atmos</button>
	<div class="contentCola"><p>Tecnologia que toma la información espacial de los objetos de audio creados para el cine y los convierte en espacio virtual tridimensional sobre los audífonos o altavoces incorporados, es super genial para una buena experiencia.
		</p></div>`;
}
document.addEventListener('DOMContentLoaded',e=>{
	fetchCards();
	eqpcs();
	cola();
	});