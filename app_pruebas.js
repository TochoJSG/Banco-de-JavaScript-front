const url='Amazon.json'; 
const items=document.getElementById('items');
const templateBloque=document.getElementById('template-bloque').content;
const fragment=document.createDocumentFragment();

var btnPrecio=document.getElementById('ba');/*Id's de Botones*/
var btnOiniones=document.getElementById('bb');
var btnCaracteristicas=document.getElementById('bc');

//Evento Click ejecuta peticion
btnPrecio=document.addEventListener('click',e=>{fetchDataPrecio()});
btnOiniones=document.addEventListener('click',e=>{fetchDataOpinion()});
btnCaracteristicas=document.addEventListener('click',e=>{fetchDataCara()});

//Obtenemos, con un data set la cadena de que categoria es...
const grupo=document.querySelector('#tipo-producto')//Id en HTML
const departamento=grupo.dataset.depto;//Another way to do this is using getAttribute()

//Funciones Filtro
function filtrarPorPrecio(arregloP){
	var arreglolisto;
	var auxiliar=arregloP.filter(function(producto){//Auxiliar alamacenara un array solo del depto solicitado
		//console.log('Titulo:',producto.titulo,', $: ',producto.precio);
		return producto.categoria==departamento;//Retorna Campo del JSON X==Al departamento leido de la Var del HTML
	});//Antes de filtrar por boton, filtramos por departamento
	arreglolisto=ordenamiento(auxiliar.precio,10);//ordenamos por precio
	//console.log('Arreglo Listo: ',arreglolisto);
	return arreglolisto;
}
function filtrarPorOpinion(arregloP){
	var arreglolisto;
	var auxiliar=arregloP.filter(function(producto){//Auxiliar alamacenara un array solo del depto solicitado
		//console.log('Titulo:',producto.titulo,', Catego: ',producto.categoria);
		return producto.categoria==departamento;
	});//Antes de filtrar por boton, filtramos por departamento
	arreglolisto=ordenamiento(auxiliar.top,10);//ordenamos por ranking
	//console.log('Arreglo Listo: ',arreglolisto);
	return arreglolisto;
}
function fetchDataPrecio(){
fetch(url) 
		.then(res => res.json()) 
		.then(data => { 
			//console.log(data);
			var arrPorPre=filtrarPorPrecio(data);
			console.log('Data Arreglada: ',arrPorPre);
			pintarBloque(arrPorPre);
		}) 
		.catch(error => console.log(error));
}
function fetchDataOpinion(){
fetch(url) 
		.then(res => res.json()) 
		.then(data => { 
			//console.log(data);
			var arrPorOpi=filtrarPorOpinion(data);
			console.log('Data Arreglada: ',arrPorOpi);
			pintarBloque(arrPorOpi);
		}) 
		.catch(error => console.log(error));
}
function fetchDataCara(){
fetch(url) 
		.then(res => res.json()) 
		.then(data => { 
			console.log(data);
			pintarBloque(data);
		}) 
		.catch(error => console.log(error));
}
				
const pintarBloque=data=>{/*Teoricamente no mover nada, insercion es igual, cambia contenido*/
	templateBloque.innerHTML='';
    data.forEach(item=>{
	if(item.categoria==cate){
        templateBloque.querySelector('th').textContent=producto.id;
        templateBloque.querySelectorAll('td')[0].textContent=producto.titulo;
        templateBloque.querySelectorAll('td')[1].textContent=producto.descripcion;
        templateBloque.querySelector('td')[2].innerHTML=`<a class="btn_amz" target="_blank" href="${item.url}">Comprar en Amazon</a>`;
        const clone = templateBloque.cloneNode(true);
        fragment.appendChild(clone);
		}//Cierre de filter method
    })
    items.appendChild(fragment);
}
function ordenamiento(arreglo,n){//Simple AAlgoritmo de Ordenamiento
	var i=0,j,controlador,aux;
	i=n-1;
	while(i>0){
		controlador=0;
		for(j=0;j<i;j++){
			if(arreglo[j+1]<arreglo[j]){
				aux=arreglo[j+1];
				arreglo[j]=arreglo[j+1];
				arreglo[j+1]=aux;
				controlador=j;
			}
		}
		i=controlador;
	}
}
/*
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
*/