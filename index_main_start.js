window.onload = function(){
	// Variables
	const IMAGENES = ["1.PNG","5.PNG","2.PNG","6.PNG","3.PNG"];//Estas cadenas constantes son los nombres de las imagenes a mostrar
	const TIEMPO_INTERVALO_MILESIMAS_SEG = 5000;
	let posicionActual = 0;
	let $botonRetroceder = document.querySelector('#retroceder');
	let $botonAvanzar = document.querySelector('#avanzar');
	let $imagen = document.querySelector('#imagen');
	let $botonPlay = document.querySelector('#play');
	let $botonStop = document.querySelector('#stop');
	let intervalo;
	// Funciones
	intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
	
	//alert('Hola, contactanos con un mensaje al 56 10 93 61 70 estamos para servirte Solo Whatsapp');
	Push.create("Bienvenido ",{
		body:"Hola, te invitamos a ver nuestro inventario",
		icon:"COORP (2).png",
		timeout:6666,
		onClick: function(){
			window.location.="https://tochamateriasprimas.com/departamentos.html";
			this.close();
		}
	});
	function pasarFoto(){//Funcion que cambia la foto en la siguiente posicion
		if(posicionActual >= IMAGENES.length - 1){//Si el valor de Indice es mayor a numero de imagenes se recorrio todo 
			posicionActual = 0;//Si se recorrio todo Indice reinicia, vuelve a posicion inicial 0
			}else{
				posicionActual++;//Si aun no se recorre todo indice aumenta una posicion
				}
		renderizarImagen();
	}
	function retrocederFoto(){//Funcion que cambia la foto en la anterior posicion
		if(posicionActual <= 0){ 
			posicionActual = IMAGENES.length - 1;
			}else{
				posicionActual--;
				}
		renderizarImagen();
	}
	function renderizarImagen(){//Funcion que muestra la imagen dependiendo de posicionActual
		//$imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;//Recorre las imagenes definidas y las recorre con el Item
		$imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
		$imagen.style.backgroundImage.objectFit({type: 'cover', hideOverflow: true});
	}
	function playIntervalo(){//Activa autoplay de la imagen
		intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
		// Desactivamos los botones de control
		$botonAvanzar.setAttribute('disabled', true);
		$botonRetroceder.setAttribute('disabled', true);
		$botonPlay.setAttribute('disabled', true);
		$botonStop.removeAttribute('disabled');
	}
	function stopIntervalo(){//Detine autoplay de la imagen
		clearInterval(intervalo);
		// Activamos los botones de control
		$botonAvanzar.removeAttribute('disabled');
		$botonRetroceder.removeAttribute('disabled');
		$botonPlay.removeAttribute('disabled');
		$botonStop.setAttribute('disabled', true);
	}
	// Eventos
	//$botonAvanzar.addEventListener('click', pasarFoto);
	//$botonRetroceder.addEventListener('click', retrocederFoto);
	//$botonPlay.addEventListener('click', playIntervalo);
	//$botonStop.addEventListener('click', stopIntervalo);
	// Iniciar
	renderizarImagen();
} 