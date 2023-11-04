//const ML_URL = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055';
const ML_URL = 'https://api.mercadolibre.com/sites/MLM/search?category=1055'//URL Mexico

const cards = document.getElementById('cards')//plantillas
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

const cards_ = document.getElementById('cards_')//Dropdown
const items_ = document.getElementById('items_')
const footer_ = document.getElementById('footer_')
const templateCard_ = document.getElementById('template-card_').content
const fragment_ = document.createDocumentFragment()

const drop = document.querySelector('.toggle').addEventListener('onmouseover', e => { fetchData_() });
const navigation = document.querySelector('.navigation');
		document.querySelector('.toggle').onclick = function(){
			this.classList.toggle('active');
			navigation.classList.toggle('active');
		}

//Eventos
//document.addEventListener('DOMContentLoaded', e => { fetchData() });
btn = document.querySelector('.btn_');
btn.addEventListener('click', e => { fetchData() })

// Traer productos
const fetchData = async () => {
    const res = await fetch(ML_URL);
    const data = await res.json()
    console.log(data.results)
    pintarCards(data.results)
	
	/*fetch(ML_URL) 
                .then(res => res.json()) 
                .then(data => { 
                    console.log(data);
                }) 
                .catch(error => console.log(error));*/
}

// Formatear en HTML
const pintarCards = data => {
	templateCard.innerHTML = ''
	templateCard_.innerHTML = ''
    data.forEach(item => {
		templateCard.querySelector('h2').textContent = item.title
		templateCard.querySelector('h3').textContent = item.site_id
        templateCard.querySelector('span').textContent = item.price
		templateCard.querySelector('h4').textContent = item.id
		templateCard.querySelector('section').innerHTML = `<div id="${item.title}" style="align: center;">
														<h5 style="text-align: center; font-size: 25px; color: orange;">Informacion de Vendedor</h5>
														<h4>Disponibilidad: ${item.available_quantity}</h4>
														<h3>Id de Vendedor ${item.seller.id_seller}</h3>
														<h1>Envio Gratis: ${item.shipping.free_shipping}</h1>
														<h2>Tipo de Logistica: ${item.shipping.logistic_type}</h2>
														<p>${item.seller_address}</p>	
													</div>`
		templateCard.querySelector('p').textContent = item.tags
		templateCard.querySelector('a').innerHTML = `<a href="${item.permalink}"><button class="btn">URL en Mercado libre</button></a>` 
		
		templateCard_.querySelector('li').innerHTML = `<a href="#${item.title}">${item.title}</a>`
		const clone_ = templateCard_.cloneNode(true)
        fragment_.appendChild(clone_)
		
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
	cards.appendChild(fragment)
	cards_.appendChild(fragment_)
	
	/*
	data.forEach(item =>{
		templateCard_.querySelector('li').textContent = item.title
		const clone_ = templateCard_.cloneNode(true)
        fragment_.appendChild(clone_)
	})
    cards_.appendChild(fragment_)*/
}
