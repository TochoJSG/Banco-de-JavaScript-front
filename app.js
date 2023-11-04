const url='Amazon.json'; 
const items=document.getElementById('items');
const templateBloque=document.getElementById('template-bloque').content;
const fragmentApp=document.createDocumentFragment();
const btnPrecio=document.getElementById('ba');/*	Id's de Botones		*/
const btnOiniones=document.getElementById('bb');
const btnCaracteristicas=document.getElementById('bc');
//Getting, with a data set the string of the category...
const grupo=document.querySelector('#tipo-producto')//Id in HTML
const departamento=grupo.dataset.depto;//Another way to do this is using getAttribute()-> Esto funciona
//	We add addEventListener, Click event execute the fetch and filter code
btnPrecio=document.addEventListener('click',e=>{fetchDataPrecio()});
btnOiniones=document.addEventListener('click',e=>{fetchDataOpinion()});
btnCaracteristicas=document.addEventListener('click',e=>{fetchDataCara()});
DOMContentLoaded
//Obtenemos, con un data set la cadena de que categoria es...
//const grupo=document.querySelector('#tipo-producto')//Id en HTML
//const departamento=grupo.dataset.depto;//Another way to do this is using getAttribute()

//Funciones Filtro
/*function filtrarPorPrecio(obj){//Por Var 'obj' pasariamos la Data
	var arreglolisto;
	var auxiliar=obj.filter(function(producto){//Auxiliar alamacenara un array solo del depto solicitado
		console.log(producto.categoria);
		return producto.categoria==departamento;
	});//Antes de filtrar por boton, filtramos por departamento
	arreglolisto=ordenamiento(auxiliar.precio,10);//ordenamos por precio
	console.log(arreglolisto);
	return arreglolisto;
}
function filtrarPorOpinion(obj){
	var arreglolisto;
	var auxiliar=obj.filter(function(producto){//Auxiliar alamacenara un array solo del depto solicitado
		console.log(producto.categoria);
		return producto.categoria==departamento;
	});//Antes de filtrar por boton, filtramos por departamento
	arreglolisto=ordenamiento(auxiliar.top,10);//ordenamos por ranking
	console.log(arreglolisto);
	return arreglolisto;
}*/

/*
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
*/
const fetchDataPrecio=async()=>{
	try{
    const res=await fetch(url);
    const data=await res.json();
		if(data.categoria===departamento){
			console.log('Categoria coincide con departamento de la pagina');
			var arreglo[]=ordenamiento(data.precio,20);
			console.log('Arreglo Chulo: ',arreglo);
			}
			/*			or			*/
			
			/*var result[]=data.filter(dato=>dato.categoria===departamento);//Rellenamos result con la data filtrada por la categoria
			var arreglo[]=ordenamiento(result,20);*/
			console.log('Arreglo Chulo: ',arreglo);
	}catch(error){console.log('error');}
}
const fetchDataOpinion=async()=>{
	try{
    const res=await fetch(url);
    const data=await res.json();
		if(data.categoria===departamento){
			console.log('Categoria coincide con departamento de la pagina');
			var arreglo[]=ordenamiento(data.precio,20);
			console.log('Arreglo Chulo: ',arreglo);
			}
			/*			or			*/
			
			/*var result[]=data.filter(dato=>dato.categoria===departamento);//Would be necesary a forEch or another bucle to iter data?
			var arreglo[]=ordenamiento(result,20);*/
			console.log('Arreglo Chulo: ',arreglo);
	}catch(error){console.log('error');}
}
const fetchDataCara=async()=>{/*		Esta es original		*/
	try{
    const res=await fetch(url);
    const data=await res.json();
    pintarBloque(data);
	}catch(error){console.log('error');}
}
/*
fetch(url) 
		.then(res => res.json()) 
		.then(data => { 
			console.log(data);
		}) 
		.catch(error => console.log(error));*/
				
const pintarBloque=data=>{/*Teoricamente no mover nada, insercion es igual, cambia contenido*/
	items.innerHTML='';
	templateBloque.innerHTML='';
    data.forEach(item=>{
	if(item.categoria==cate){
        templateBloque.querySelector('th').textContent=producto.id;
        templateBloque.querySelectorAll('td')[0].textContent=producto.titulo;
        templateBloque.querySelectorAll('td')[1].textContent=producto.descripcion;
        templateBloque.querySelector('td')[2].innerHTML=`<a class="btn_amz" target="_blank" href="${item.url}">Comprar en Amazon</a>`;
        const clone = templateBloque.cloneNode(true);
        fragmentApp.appendChild(clone);
		}//Cierre de filter method
    })
    items.appendChild(fragmentApp);
}
function ordenamiento(var arreglo,var n){//Simple Algoritmo de Ordenamiento
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