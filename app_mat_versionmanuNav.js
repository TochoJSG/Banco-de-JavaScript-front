const materiasPrimas = document.getElementById('matPrima')
const cards = document.getElementById('cards')
const cardDrop = document.getElementById('cardDrop')//Dropdown

const items = document.getElementById('items')
const footer = document.getElementById('footer')

const templateCard = document.getElementById('template-card').content
const templateDrop = document.getElementById('template-drop').content

const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content

const fragment = document.createDocumentFragment() //dar nombre d etiqueta d elemento a crear párrafo(p) capa(div)
const fragmentDrop = document.createDocumentFragment()
let carrito = {}

// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener('DOMContentLoaded', e => { fetchData() });
cards.addEventListener('click', e => { addCarrito(e) });
items.addEventListener('click', e => { btnAumentarDisminuir(e) })

// Traer productos
const fetchData = async () => {
    const res = await fetch('api.json');
    const data = await res.json()
    // console.log(data)
        pintarCards(data)
}
/*
insert into departamentos.html

<div class="navigation">
	<div class="toggle">
		<span></span></div>
	<div class="row" id="cardDrop"></div>
</div>
<template id="template-drop">
	<ul>
		<li></li>
	</ul>
</template>
*/

// Pintar productos
const pintarCards = data => {
	templateCard.innerHTML = ''
	templateDrop.innerHTML = ''
    data.forEach(item => {
        //templateCard.querySelector('h5').textContent = item.title
		templateCard.querySelector('h5').innerHTML = `<h5 id="${item.title}">${item.title}</h5>`
        templateCard.querySelector('span').textContent = item.precio
        templateCard.querySelector('p').textContent = item.descripcion
        templateCard.querySelector('div').innerHTML = `
		<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" style="height:auto; margin:0;">
			<div class="carousel-inner">
			    <div class="item active">
			    	<img id="myImg" src="${item.im1}" alt="First slide"/>
			    </div>
			    <div class="item">
			    	<img id="myImg" src="${item.im2}" alt="Second slide"/>
			    </div>
			    <div class="item active">
			    	<img id="myImg" src="${item.im3}" alt="Third slide"/>
			    </div>
			</div>
		</div>
		`
		templateCard.querySelector('a').innerHTML = `<a href="${item.url_ml}"><button class="personalizado_">Mercado libre</button></a>` 
        templateCard.querySelector('button').dataset.id = item.id
		
		templateDrop.querySelector('li').innerHTML = `<a href="#${item.title}">${item.title}</a>`//Menu Nav
		
		const cloneDrop = templateDrop.cloneNode(true)
        fragmentDrop.appendChild(cloneDrop)
		
		
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
	cardDrop.appendChild(fragmentDrop)
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
        precio: item.querySelector('span').textContent,
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

    //localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito Vacío</th>
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
    
    const botonComprar = document.querySelector('#comprar-todo')//Agregue boton Comprar
    botonComprar.addEventListener('click', () => {
        /*carrito = {}
        pintarCarrito()*/
        alert('funciono el boton compra')
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
        const producto = carrito[e.target.dataNset.id]
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