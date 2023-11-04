const url='amz.json';
let modelo='';
const tarjeta=document.querySelector('#temp');
document.addEventListener('DOMContentLoaded',e=>{fetchDataCarr()});
const fetchDataCarr=async()=>{
const res=await fetch(url);
const data=await res.json();
//console.log(data);
pintarFifi(data);
}
const pintarFifi=data=>{
    data.forEach(item=>{
    if(item.plataforma=='amazon'){
		modelo+=`<div class="box_fifi">
					<div class="imgBxFifi">
						<img src="${item.imProd}"/>
					</div>
					<div class="content_fifi">
						<h2>${item.title}</h2><br>
						<a target="_blank href="${item.url}"><button class="botones">Amazon</button></a>
					</div>
				</div>`;
    }else if(item.plataforma=='ml'){
		modelo+=`<div class="box_fifi">
					<div class="imgBxFifi">
						<img src="${item.imProd}"/>
					</div>
					<div class="content_fifi">
						<h2>${item.title}</h2><br>
						<a target="_blank href="${item.url}"><button class="botones">Mercado Libre</button></a>
					</div>
				</div>`;
	}
    });
tarjeta.innerHTML=modelo;
//carr.innerHTML=modeloCarr;
}