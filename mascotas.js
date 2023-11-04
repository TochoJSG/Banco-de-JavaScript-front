function mascotas() {
		  var mas = document.getElementById("mascota");
		  
		  var m = document.getElementById("matPrima");
		  var e = document.getElementById("electronica");
		  
		  if (mas.style.display === "none") {
			mas.style.display = "block";
			m.style.display = "none";
			e.style.display = "none";
		  } else {
			mas.style.display = "none";
			
			m.style.display = "none";
			e.style.display = "none";
		  }
		}