//const ML_URL = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055';
//const ML_URL = 'https://api.mercadolibre.com/sites/MLM/search?category=1055'//URL Mexico

const cards = document.getElementById('cards')//plantilla Mat
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

const cards3 = document.getElementById('cards3')//plantilla Ele
const templateCard3 = document.getElementById('template-card3').content
const fragment3 = document.createDocumentFragment()

const cards_ = document.getElementById('cards_')//Dropdown
const templateNav = document.getElementById('template-nav').content
const fragment_ = document.createDocumentFragment()

const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
let carrito = {}

const drop = document.querySelector('.toggle').addEventListener('onclick', e => { fetchData_() });
const navigation = document.querySelector('.navigation');
		document.querySelector('.toggle').onclick = function(){
			this.classList.toggle('active');
			navigation.classList.toggle('active');
		}

//Eventos
document.addEventListener('DOMContentLoaded', e => { fetchData() });
btnA = document.querySelector('a');
btnB = document.querySelector('b');

// Traer productos
const fetchData = async () => {

btnA.addEventListener('click', function{	
    const res = await fetch('api.json');
    const data = await res.json()
    console.log(data.results)
    pintarCards(data.results)
	})

btnB.addEventListener('click', function{	
	const res = await fetch('api_muebles.json');
    const data = await res.json()
    console.log(data.results)
    pintarCards(data.results)
	})
	/*fetch(ML_URL) 
                .then(res => res.json()) 
                .then(data => { 
                    console.log(data);
                }) 
                .catch(error => console.log(error));*/
}

// Formatear en HTML
const pintarCards = data => {//template-card_ => template-nav
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
// Agregar al carrito
const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        // console.log(e.target.dataset.id)
        // console.log(e.target.parentElement)
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = item => {
    // console.log(item)
    const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('p').textContent,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }
    // console.log(producto)
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }
    
    pintarCarrito()
}

const pintarCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
        
        //botones
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()
}

const pintarFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío con innerHTML</th>
        `
        return
    }
    
    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    // console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })

}

const btnAumentarDisminuir = e => {
    // console.log(e.target.classList.contains('btn-info'))
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        pintarCarrito()
    }
    e.stopPropagation()
}
//LocalStorage
document.addEventListener('DOMContentLoaded', e => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
});

const pintarCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
        
        //botones
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}