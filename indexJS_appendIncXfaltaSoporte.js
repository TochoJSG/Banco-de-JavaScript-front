const url='Amazon.json';
let modelo='';
const tarjeta=document.querySelector('#swiperCard');
document.addEventListener('DOMContentLoaded',e=>{
	fetchData();
	handleHeader();
	});
const fetchData=async()=>{
const res=await fetch(url);
const data=await res.json();
/*console.log(data);*/
pintarFifi(data);
}

const elementoDOM=document.querySelector('#lista');
const arrayInser=['a','b','c'];
const fragmento=document.createDocumentFragment();
arrayInser.forEach(item=>{
	const li = document.create('li');
	li.classList.add('list');
	
	const b = document.createDocumentFragment('b');
	b.textContent='Nombre: ';
	
	const span=document.createDocumentFragment('span');
	span.classList.add('text-danger');
	span.textContent=item.campo;
	
	li.appendChild(b);
	li.appendChild(span);
	fragmento.appendChild(li);
})
elementoDOM.appendChild(fragmento);

const pintarFifi=data=>{
    data.forEach(item=>{
		const div1=document.create('div');
		div1.classList.add('swiper-slide');
		
		const div2=document.create(div);
		div2.classList.add('prodCarAmz');
		
		const picture=document.create('picture');
		const image=document.create('img');
		image.
		
		
		
		modelo+=`
				<div class="swiper-slide">
					<div class="prodCarAmz">
						<picture>
							<img src="${item.imagen}" alt="loading..."/>
						</picture>
						<div class="detailsCarrAmz">
							<p>
								<b>${item.titulo}</b>
							</p>
						</div>
						<div class="buttonCarrAmz">
						<a class="btn_amz" target="_blank" href="${item.url}">Comprar en Amazon
							</a>
						</div>
					</div>
				</div>`;
	
    });
tarjeta.innerHTML=modelo;
}
function handleHeader(){const Skewed=document.querySelector('.cover');window.addEventListener('scroll',function(){const value1=1-(window.scrollY/415);Skewed.style.opacity=value1;});}