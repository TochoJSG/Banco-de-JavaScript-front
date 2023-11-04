const postsA=document.querySelector('#primeraParte');
const postsB=document.querySelector('#desplegarMas');
function insertaPosts(){
	postsA.innerHTML=`
		<div class="postColumn">
			<div class="postBox">
				<div class="imgBx">
					<img src="post3.png" class="cover"/>
				</div>
				<div class="txtBx">
					<h3>Bocinas</h3>
					<a href="mejores_bocinas_fiesteras.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox extraHeight">
				<div class="imgBx">
					<img src="post4.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Laptops</h3>
					<a href="mejores_laptop.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox">
				<div class="imgBx">
					<img src="post8.png"><!-- class="cover"/>-->
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
					<img src="post2.jpg"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Kits Mouse + Teclado</h3>
					<a href="kits_mouse_teclado.html" class="btn">Ver Mas</a>
				</div>
			</div> 
			<div class="postBox">
				<div class="imgBx">
					<img src="post5.png" class="cover"/>
				</div>
				<div class="txtBx">
					<h3>Audifonos orejera</h3>
					<a href="audifonos_orejera.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox">
				<div class="imgBx">
					<img src="post6.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Audifonos Cable</h3>
					<a href="audifonos_cable.html" class="btn">Ver Mas</a>
				</div>
			</div>
		</div>
		<div class="postColumn">
			<div class="postBox">
				<div class="imgBx">
					<img src="post9.png"><!--class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Smartwatch Relojes Inteligentes</h3>
					<a href="reloj_inteligente_smartwatch.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox">
				<div class="imgBx">
					<img src="cel.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Smartphone Celulares</h3>
					<a href="smarthphones.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox extraHeight">
				<div class="imgBx">
					<img src="post1.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Almacenamiento Externo</h3>
					<a href="almacenamiento_externo.html" class="btn">Ver Mas</a>
				</div>
			</div>
		</div>`;		
	postsB.innerHTML=`<div class="contentBx">
		<div class="postColumn">
			<div class="postBox extraHeight">
				<div class="imgBx">
					<img src="ama9.jpg" class="cover"/>
				</div>
				<div class="txtBx">
					<h3>Audifonos Bluetooth</h3>
					<a href="audifonos_bluetooth.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox">
				<div class="imgBx">
					<img src="postBB.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Bocinas Bluetooth</h3>
					<a href="mejores_bocinas_bluetooth.html" class="btn">Ver Mas</a>
				</div>
			</div>
		</div>
		<div class="postColumn">
			<div class="postBox">
				<div class="imgBx">
					<img src="postMC.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Mouse de Computadora</h3>
					<a href="mouse_computadora.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox">
				<div class="imgBx">
					<img src="postTC.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Teclado de Computadora</h3>
					<a href="teclado_computadora.html" class="btn">Ver Mas</a>
				</div>
			</div>
		</div>
		<div class="postColumn">
			<div class="postBox">
				<div class="imgBx">
					<img src="postVe.png"><!-- class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Ventiladores de Computadora</h3>
					<a href="ventiladores_computadora.html" class="btn">Ver Mas</a>
				</div>
			</div>
			<div class="postBox extraHeight">
				<div class="imgBx">
					<img src="postSi.png"<!--class="cover"/>-->
				</div>
				<div class="txtBx">
					<h3>Sillas Gaming</h3>
					<a href="sillas_gaming.html" class="btn">Ver Mas</a>
				</div>
			</div>
			
		</div>
	</div>`;
}