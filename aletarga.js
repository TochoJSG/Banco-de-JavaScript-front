const aletargar=document.querySelectorAll('.aletarga');
const load=(entradas,observador)=>{entradas.forEach((entrada)=>{if(entrada.isIntersecting){entrada.target.classList.add('visible');}else{entrada.target.classList.remove('visible');}});}
const observador=new IntersectionObserver(load,{root:null,rootMargin:'0px 0px 0px 0px',thresholds:0.5});
for(var i=0;i<aletargar.length;i++){observador.observe(aletargar[i]);}
