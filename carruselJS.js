
const IMAGENES=["1.jpg","2.jpg","3.jpg"];
const TIEMPO_INTERVALO_MILESIMAS_SEG=6666;
let posicionActual=0;
/*let $botonRetroceder=document.querySelector('#retroceder');
let $botonAvanzar=document.querySelector('#avanzar');
let $imagen=document.querySelector('#imagen');
let $botonPlay=document.querySelector('#play');
let $botonStop=document.querySelector('#stop');*/
let intervalo;
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
	$imagen.style.backgroundImage=`url(${IMAGENES[posicionActual]})`;//Recorre las imagenes definidas y las recorre con el Item
}
function playIntervalo(){//Activa autoplay de la imagen
	intervalo=setInterval(pasarFoto,TIEMPO_INTERVALO_MILESIMAS_SEG);
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
/*$botonAvanzar.addEventListener('click',pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);
$botonPlay.addEventListener('click', playIntervalo);*/
//$botonStop.addEventListener('click', stopIntervalo);
document.addEventListener('scroll',()=>{intervalo=setInterval(pasarFoto,TIEMPO_INTERVALO_MILESIMAS_SEG);renderizarImagen();});
