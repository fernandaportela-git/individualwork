function traducir() {
	document.getElementsByTagName("h1")[0].innerHTML = "-------- Recetas de Postres Fáciles y Rápidos --------";
	h3 = document.getElementsByTagName("h3");
	h3[0].innerHTML = "Ingredientes: ";
	h3[2].innerHTML = "Ingredientes: ";
	h3[4].innerHTML = "Ingredientes: ";
	h3[1].innerHTML = "Instrucciones: ";
	h3[3].innerHTML = "Instrucciones: ";
	h3[5].innerHTML = "Instrucciones: ";
	h2 = document.getElementsByTagName("h2");
	h2[0].innerHTML = "Brownies de Nutella de 3 Ingredientes";
	h2[1].innerHTML = "Pastel de Piña de 2 Ingredientes";
	h2[2].innerHTML = "Galletas Fáciles de Mantequilla de Maní";
	p = document.getElementsByTagName("p");
	p[0].innerHTML = "Precalienta el horno a 180 °C y engrasa un molde cuadrado pequeño. En un bol mediano, bate los huevos con la Nutella hasta obtener una mezcla homogénea. Incorpora la harina con movimientos envolventes hasta que no queden grumos blancos. Vierte la masa espesa en el molde preparado, alisa la superficie con una espátula y hornea de 20 a 25 minutos, o hasta que al insertar un palillo en el centro, este salga con solo unas pocas migas húmedas. Deja enfriar los brownies completamente en el molde antes de cortarlos para que adquieran una textura suave y cremosa.";
	p[1].innerHTML = "Precalienta el horno a 175 °C y prepara un molde para hornear de 23 x 33 cm (aunque no es necesario engrasarlo si usas la mezcla para bizcocho Angel Food). En un bol grande, vierte la mezcla seca para bizcocho y toda la lata de piña triturada, incluyendo el jugo. Mezcla bien a mano hasta obtener una masa esponjosa y homogénea, luego viértela en el molde. Hornea de 25 a 30 minutos, hasta que la superficie esté dorada y el bizcocho recupere su forma al presionarlo. Este postre ligero y tropical está delicioso solo o con una cucharada de crema batida.";
	p[2].innerHTML = "Precalienta el horno a 180 °C y cubre una bandeja para hornear con papel vegetal. En un bol, mezcla la mantequilla de cacahuete, el azúcar y el huevo hasta obtener una masa firme y fácil de manejar. Forma bolitas con la masa, de aproximadamente 2,5 cm de diámetro, y colócalas en la bandeja para hornear, separadas por 5 cm. Con un tenedor, marca la parte superior de cada bolita con una X dorada, aplanándolas ligeramente, y hornea de 8 a 10 minutos, hasta que los bordes estén ligeramente firmes. Deja que se enfríen en la bandeja durante al menos 5 minutos antes de moverlas, ya que están muy blandas al sacarlas del horno.";
	li = document.getElementsByTagName("li");
	li[0].innerHTML = "1 ¼ tazas de Nutella (o cualquier crema de avellana con cacao)";
	li[1].innerHTML = "2 huevos grandes";
	li[2].innerHTML = "½ taza de harina de trigo (todo uso)";
	li[3].innerHTML = "Opcional: una pizca de sal de mar para la superficie";
	li[4].innerHTML = "1 caja (aprox. 430 g) de mezcla para pastel tipo Angel Food (o mezcla de vainilla)";
	li[5].innerHTML = "1 lata (560 g) de piña triturada en su jugo (no escurrir)";
	li[6].innerHTML = "1 taza de mantequilla de maní cremosa";
	li[7].innerHTML = "1 taza de azúcar blanca";
	li[8].innerHTML = "1 huevo grande";
}

function nightMode() {
	document.body.style.backgroundColor = "#291c23";
	document.body.style.color = "#f5e6eb";
	h1 = document.getElementsByTagName("h1");
    h1[0].style.color = "#ff8fab";
   	recipes = document.getElementsByClassName("recipe");
   	recipes[0].style.backgroundColor = "#1c1317";
   	recipes[1].style.backgroundColor = "#1c1317";
   	recipes[2].style.backgroundColor = "#1c1317";
   	h3 = document.getElementsByTagName("h3");
   	h3[0].style.color = "#ffb3c6";
   	h3[1].style.color = "#ffb3c6";
   	h3[2].style.color = "#ffb3c6";
   	h3[3].style.color = "#ffb3c6";
   	h3[4].style.color = "#ffb3c6";
   	h3[5].style.color = "#ffb3c6";
}

function music() {
	audio = document.getElementById("music");
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
}