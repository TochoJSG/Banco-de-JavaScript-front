//const ML_URL = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055';
const ML_URL = 'https://api.mercadolibre.com/sites/MLM/search?category=1055'

//var protoOrden = sortJSON(ML_URL,'price','asc');

const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

//Eventos
btn = document.querySelector('.btn_');
//document.addEventListener('DOMContentLoaded', e => { fetchData() });
btn.addEventListener('click', e => { fetchData() });

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
    data.forEach(item => {
		var valor
        valor = parseInt(item.price,10)
		
		templateCard.querySelector('span').innerHTML = `<span>${valor}</span>`
		templateCard.querySelector('section').innerHTML = `<div>
														<h2>Marca ${item.title}</h3>
														$<span>${item.price}</span>
														<h3>Id de Vendedor ${item.seller.id_seller}</h3>
														<h5 style="text-align: center; font-size: 15px;">Informacion de Vendedor</h5>
														<h4>Disponibilidad: ${item.available_quantity}</h4>
														<h6>Disponibilidad: ${item.condition}</h6>
														<h1>Envio Gratis: ${item.shipping.free_shipping}</h1>
														<h2>Tipo de Logistica: ${item.shipping.logistic_type}</h2>
														<p>${item.seller_address}</p>	
													</div>`
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

//Algoritmo Sort Ordenamiento
function sortJSON(data, key, orden) {
    return data.sort((a, b) => {
        var x = a[key],		y = b[key];
         if(orden === 'asc'){
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
         }
		 if(orden === 'desc'){
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
         } 
    });
}
/*
console.log(JSON.stringify(protoOrden));
var jsonOrdenado = document.getElementById('jsonOrdenado');
jsonOrdenado.textContent = JSON.stringify(ML_URL);*/