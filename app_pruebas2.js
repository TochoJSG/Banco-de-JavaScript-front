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
const departamento=grupo.dataset.depto;//Another way to do this is using getAttribute()-> Esto funciona

function fetchDataPrecio(){
fetch(url) 
		.then(res => res.json()) 
		.then(data => { 
			//const arrPorPre=data.filter(producto => producto.categoria == departamento);
			if(data.categoria===departamento){
				console.log('Dentro del if');
				const arrPorPre=ordenamiento(data.precio,20);
			
			console.log('Arreglo Chulo: ',arrPorPre);}
			//pintarBloque(arrPorPre);
		}) 
		.catch(error => console.log(error));
}
function fetchDataOpinion(){
fetch(url) 
		.then(res => res.json()) 
		.then(data => { 
			//const arrPorOpi=data.filter(producto => producto.categoria==departamento);
			if(data.categoria===departamento){
				console.log('Dentro del if');
				const arrPorOpi=ordenamiento(data.elTop,20);
			
			console.log('Arreglo Chulo: ',arrPorOpi);}
			//pintarBloque(arrPorOpi);
		}) 
		.catch(error => console.log(error));
}
function fetchDataCara(){
fetch(url) 
		.then(res => res.json()) 
		.then(data => { 
			console.log(data);
			//pintarBloque(data);
		}) 
		.catch(error => console.log(error));
}
				
/*const pintarBloque=data=>{
	templateBloque.innerHTML='';
    data.forEach(item=>{
	if(item.categoria==departamento){
        templateBloque.querySelector('th').textContent=item.id;
        templateBloque.querySelectorAll('td')[0].textContent=item.titulo;
        templateBloque.querySelectorAll('td')[1].textContent=item.descripcion;
        templateBloque.querySelector('td')[2].innerHTML=`<a class="btn_amz" target="_blank" href="${item.url}">Comprar en Amazon</a>`;
        const clone = templateBloque.cloneNode(true);
        fragment.appendChild(clone);
		}//Cierre de filter method
    })
    items.appendChild(fragment);
}*/
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