let span=document.querySelector('.car_mov');
let product=document.getElementsByClassName('prod_car');
let product_page=Math.ceil(product.length/4);
let l=0;
let movePer=66.666;/*25.34;*/
let maxMove=333;/*203;*/
let mobile_view=window.matchMedia("(max-width:6000px)");
if(mobile_view.matches){
	movePer=50.36;
	maxMove=666;
}
/*let right_mover=()=>{
	l=l+movePer;
	if(product==1){
		l=0;
	}
	for(const i of product){
		if(l>maxMove){l=l-movePer;}	
		i.style.left='-'+l+'%';
	}
}*/
function right_mover(){
	l+=movePer;
	if(product==1){
		l=0;
	}
	for(const i of product){
		if(l>maxMove){l=l-movePer;}	
		i.style.left='-'+l+'%';
	}
}
/*let left_mover=()=>{
	l=l-movePer;
	if(product<=1){
		l=0;
	}
	for(const i of product){
		if(product_page>1)
		i.style.left ='-'+l+'%';
	}
}*/
function left_mover(){
	l-=movePer;
	if(product<=1){
		l=0;
	}
	for(const i of product){
		if(product_page>1)
		i.style.left ='-'+l+'%';
	}
}
/*span[0].onclick=()=>{left_mover();}
span[1].onclick=()=>{right_mover();}*/
span[0].document.addEventListener('click',left_mover(););
span[1].document.addEventListener('click',right_mover(););