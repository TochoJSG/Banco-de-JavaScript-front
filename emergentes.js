const buttonUs=document.querySelectorAll('#buttonUs');
const us=document.querySelector('#cierraNosotros');
const buttonContact=document.querySelectorAll('#buttonContact');
const contacto=document.querySelector('#cierraContacto');
buttonUs.forEach(a=>{
	a.onclick=()=>{console.log('intento',i);document.getElementById('nosotros').style.display='block';document.getElementsByTagName('body')[0].style.overflow='hidden';i++;}});
us.onclick=()=>{console.log('intento1');document.getElementById('nosotros').style.display='none';document.getElementsByTagName('body')[0].style.overflow='visible';}

buttonContact.forEach(b=>{
	b.onclick=()=>{console.log('intento2');document.getElementById('contacto').style.display='block';document.getElementsByTagName('body')[0].style.overflow='hidden';}});
contacto.onclick=()=>{document.getElementById('contacto').style.display='none';document.getElementsByTagName('body')[0].style.overflow='visible';}