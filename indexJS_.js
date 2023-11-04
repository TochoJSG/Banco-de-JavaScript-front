const url='Amazon.json';
let carrusel='';
const cardCarr=document.querySelector('#swiper-wrapper');
document.addEventListener('DOMContentLoaded',e=>{
	fetchCarr();
	handleHeader();
	});
const fetchCarr=async()=>{
	const res=await fetch(url);
	const data=await res.json();
	/*console.log(data);*/
	pintaCarrusel(data);
}
const pintaCarrusel=data=>{
    data.forEach(item=>{
		carrusel+=`
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
cardCarr.innerHTML=carrusel;
}
function handleHeader(){const Skewed=document.querySelector('.cover');window.addEventListener('scroll',function(){const value1=1-(window.scrollY/415);Skewed.style.opacity=value1;});}