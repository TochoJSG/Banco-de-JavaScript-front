const postsA=document.querySelector('#primeraParte');
const postsB=document.querySelector('#desplegarMas');
const footer=document.querySelector('#footerDina');
function insertaPosts(){
	footer.innerHTML=`<a href="index.html">Electronica Inteligente</a>
	<ul class="footerMenu">
		<li><a href="index.html">Principal
			</a></li>
		<li><a href="index.html #about">Nosotros
			</a></li>
		<li><a href="index.html #post">poster
			</a></li>
		<li><a href="index.html #contact">Contacto
			</a></li>
	</ul>
	<ul class="footerMenu">
		<li><a href="privacidad.html">Politica de PRIVACIDAD
			</a></li>
		<li><a href="Política_de_Cookies.html">Politica de COOKIES
			</a></li>
		<li><a href="aviso_legal.html">Aviso legal y Términos de uso
			</a></li>
	</ul>	
	<a href="https://admingtutoriales.com"><p class="copyrightText">ADMING DESARROLLOS
		</p></a>`
	postsA.innerHTML=`
		<div class="postColumn">
			<div class="postBox">
				<div class="imgBx">
					<img title="altoparlantes" src="post_altoparlantes.png" class="cover"/>
				</div>
				<div class="txtBx">
					<h3>Bocinas</h3>
					<a href="bocinas-altoparlantes.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox extraHeight">
				<div class="imgBx">
					<img title="portatiles" src="post_laptop.png"><!-- class="cover"/>   AQUI ALTERE POR POSIBLE ERROR  -->
				</div>
				<div class="txtBx">
					<h3>Laptops</h3>
					<a href="laptop.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox">
				<div class="imgBx">
					<img title="pc desktop" src="post_pc.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Computadora</h3>
					<a href="computadora.html" class="btn">Ver Mas</a>
				</div>
			</div>
		</div>
		<div class="postColumn">
			<div class="postBox extraHeight">
				<div class="imgBx">
					<img title="kit" src="post_kit.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Kits Mouse + Teclado</h3>
					<a href="kit-mouse-teclado.html" class="btn">Ver Mas</a>
				</div>
			</div> 
			<div class="postBox">
				<div class="imgBx">
					<img title="audifonos casco" src="post_casco.png" class="cover"/>
				</div>
				<div class="txtBx">
					<h3>Audifonos orejera</h3>
					<a href="audifono-orejera.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox">
				<div class="imgBx">
					<img title="audifonos sencillos" src="post_auriculares.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Audifonos Cable</h3>
					<a href="audifonos.html" class="btn">Ver Mas</a>
				</div>
			</div>
		</div>
		<div class="postColumn">
			<div class="postBox">
				<div class="imgBx">
					<img title="smartwatches" src="post_smartwatches.png"><!--class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Smartwatch Relojes Inteligentes</h3>
					<a href="reloj-inteligente-smartwatch.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox">
				<div class="imgBx">
					<img title="celulares" src="post_celulares.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Smartphone Celulares</h3>
					<a href="smartphones.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox extraHeight">
				<div class="imgBx">
					<img title="memorias" src="post_usb.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Almacenamiento Externo</h3>
					<a href="almacenamiento-externo.html" class="btn">Ver Mas</a>
				</div>
			</div>
		</div>`;		
	postsB.innerHTML=`<div class="contentBx">
		<div class="postColumn">
			<div class="postBox extraHeight">
				<div class="imgBx">
					<img title="audifonos bluetooth" src="post_audifono.png" class="cover"/>
				</div>
				<div class="txtBx">
					<h3>Audifonos Bluetooth</h3>
					<a href="audifonos-bluetooth.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox">
				<div class="imgBx">
					<img title="bocinas" src="post_bocina.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Bocinas Bluetooth</h3>
					<a href="bocinas-bluetooth.html" class="btn">Ver Mas</a>
				</div>
			</div>
		</div>
		<div class="postColumn">
			<div class="postBox">
				<div class="imgBx">
					<img title="ratones" src="post_raton.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Mouse de Computadora</h3>
					<a href="raton.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox">
				<div class="imgBx">
					<img title="teclados" src="post_teclado.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Teclado de Computadora</h3>
					<a href="teclado.html" class="btn">Ver Mas</a>
				</div>
			</div>
		</div>
		<div class="postColumn">
			<div class="postBox">
				<div class="imgBx">
					<img title="ventiladores" src="post_ventilador.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Ventiladores de Computadora</h3>
					<a href="ventiladores.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox extraHeight">
				<div class="imgBx">
					<img title="sillas gamer" src="post_silla.png"><!--class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Sillas Gaming</h3>
					<a href="sillas-gaming.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox">
				<div class="imgBx">
					<img title="impresoras" src="post_impresora.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Impresoras</h3>
					<a href="impresoras.html" class="btn">Ver Mas</a>
				</div>
			</div>
			
		</div>
	</div>`;
}
function ver(){var desplieMas=document.getElementById('desplegarMas');
var ocultaBtn=document.getElementById('dM');
if(desplieMas.style.display==='none'){desplieMas.style.display="block";ocultaBtn.style.opacity=0;}else{desplieMas.style.display="none";ocultaBtn.style.opacity=1;}}
document.addEventListener('scroll',insertaPosts);