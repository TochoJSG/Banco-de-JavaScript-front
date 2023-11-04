let span = document.querySelectorAll('car_mov3');
let product = document.getElementsByClassName('prod_car3');
let product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
//Mobile View
let mobile_view = window.matchMedia("(max-width: 768px)");
if(mobile_view.matches){
	movePer = 50.36;
	maxMove = 504;
}
let right_mover = () => {
	l = l + movePer;
	if(product == 1){
		l = 0;
	}
	for(const i of product){
		if(l > maxMove){l = l - movePer;}	
		i.style.left = '-' + l + '%';
	}
}
let left_mover = () => {
	l = l - movePer;
	if(product <= 1){
		l = 0;
	}
	for(const i of product){
		if(product_page > 1)
		i.style.left = '-' + l + '%';
	}
}
span[2].onclick = () => {left_mover();}
span[3].onclick = () => {right_mover();}