const footer=document.querySelector('#insFoo');
function insercionFoo(){
footer.innerHTML=`<footer>
<a href="index.html">ADMING desarrollos</a>
<ul class="footerMenu">
	<li><a href="index.html">Principal
		</a></li>
	<li><a id="buttonUs">Nosotros
		</a></li>
	<li><a id="buttonContact">Contacto
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
	</p></a>
</footer>`;
}
document.addEventListener('DOMContentLoaded',insercionFoo);