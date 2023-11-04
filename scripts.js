//Menu Toggle
const menuToggle=document.querySelector('.menuToggle');
const navigation=document.querySelector('.navigation');
menuToggle.onclick=function(){menuToggle.classList.toggle('active');navigation.classList.toggle('active');}
window.addEventListener('scroll',function(){const header=document.querySelector('header');header.classList.toggle('sticky',window.scrollY>0);});
function toggleMenu(){menuToggle.classList.remove('active');navigation.classList.remove('active');}

//Efecto Lazy
const aletargar=document.querySelectorAll('.aletarga');
const load=(entradas,observador)=>{entradas.forEach((entrada)=>{if(entrada.isIntersecting){entrada.target.classList.add('visible');}else{entrada.target.classList.remove('visible');}});}
const observador=new IntersectionObserver(load,{root:null,rootMargin:'0px 0px 0px 0px',thresholds:0.5});
for(var i=0;i<aletargar.length;i++){observador.observe(aletargar[i]);}

//Navegacion entre paginas
const dropdownMenu=document.querySelector('.dropdownMenu');document.querySelector('.toggleMenu').onclick=function(){this.classList.toggle('activeMenu');dropdownMenu.classList.toggle('activeMenu');}

//collapsible
var coll=document.getElementsByClassName('collapsible');var i;for(i=0;i<coll.length;i++){coll[i].addEventListener('click',function(){this.classList.toggle('active');var content=this.nextElementSibling;if(content.style.maxHeight){content.style.maxHeight=null;}else{content.style.maxHeight=content.scrollHeight+"px";}});}

//Bloques
function a(){
var bloqueA=document.getElementById("a");
var m=document.getElementById("b");
var e=document.getElementById("c");
if(bloqueA.style.display==="none"){bloqueA.style.display = "block";m.style.display="none";e.style.display="none";}else{bloqueA.style.display="none";m.style.display="none";e.style.display="none";}}
function b(){
var bloqueB=document.getElementById("b");
var m=document.getElementById("a");
var e=document.getElementById("c");
if(bloqueB.style.display==="none"){bloqueB.style.display="block";m.style.display="none";e.style.display="none";}else{bloqueB.style.display="none";m.style.display="none";e.style.display="none";}}
function c(){
var bloqueC=document.getElementById("c");
var mt=document.getElementById("a");
var ms=document.getElementById("b");  
if(bloqueC.style.display==="none"){bloqueC.style.display="block";mt.style.display="none";ms.style.display="none";}else{bloqueC.style.display="none";mt.style.display="none";ms.style.display="none";}}
function ver(){var desplieMas=document.getElementById('desplegarMas');
var ocultaBtn=document.getElementById('dM');
if(desplieMas.style.display==='none'){desplieMas.style.display="block";ocultaBtn.style.opacity=0;}else{desplieMas.style.display="none";ocultaBtn.style.opacity=1;}}