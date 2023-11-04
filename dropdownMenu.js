const dropdownMenu=document.querySelector('.dropdownMenu');
const menuNav=document.querySelector('#mn');
function insertaMenu(){
menuNav.innerHTML=`
		<li><a href="audifonos-bluetooth.html">Audifonos Bluetooth</a></li>
		<li><a href="reloj-inteligente-smartwatch.html">Relojes Smartwatch</a></li>
		<li><a href="smartphones.html">Celulares Smarthphone</a></li>
		<li><a href="teclado.html">Teclados Computadora</a></li>
		<li><a href="ventiladores.html">Ventiladores Computadora</a></li>
		<li><a href="sillas-gaming.html">Sillas Gaming</a></li>
		<li><a href="raton.html">Mouse Computadoras</a></li>
		<li><a href="laptop.html">Laptops</a></li>
		<li><a href="impresoras.html">Impresoras</a></li>
		<li><a href="almacenamiento-externo.html">USB / SD / DD</a></li>
		<li><a href="computadora.html">Computadoras</a></li>
		<li><a href="bocinas-altoparlantes.html">Bocinas</a></li>
		<li><a href="bocinas-bluetooth.html">Bocinas Bluetooth</a></li>
		<li><a href="kit-mouse-teclado.html">Kits Mouse + Teclado</a></li>
		<li><a href="audifono-orejera.html">Audifonos Orejera</a></li>
		<li><a href="audifonos.html">Audifonos Sencillos</a></li>`;
}
document.querySelector('.toggleMenu').onclick=function(){
	this.classList.toggle('activeMenu');
	dropdownMenu.classList.toggle('activeMenu');
	insertaMenu();
	}