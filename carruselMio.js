let product=document.getElementsByClassName('prod_car');
let product_page=Math.ceil(product.length/4);
let l=0;
let movePer=25.34;
let maxMove=203;
let mobile_view = window.matchMedia("(max-width: 1200px)");
if(mobile_view.matches){
	movePer=50.36;
	maxMove=504;
}
let right_mover=()=>{
	l=l+movePer;
	if(product==1){
		l=0;
	}
	for(const i of product){
		if(l>maxMove){l=l-movePer;}	
		i.style.left='-'+l+'%';
	}
}
let left_mover=()=>{
	l=l-movePer;
	if(product<=1){
		l=0;
	}
	for(const i of product){
		if(product_page>1)
		i.style.left='-'+l+'%';
	}
}
const r=document.querySelector('#r');
const a=document.querySelector('#a');
a.onclick=()=>{right_mover();}
r.onclick=()=>{left_mover();}