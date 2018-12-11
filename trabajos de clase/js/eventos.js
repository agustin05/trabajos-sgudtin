var recuadro = document.querySelector("#recuadro");

/*
eventos desde el DON
*/

function cambiarColor(){
	recuadro.style.background = "red";
}

function estadoOriginal(){
	recuadro.style.width="200px"
	recuadro.style.transition="green";
}


function estadoOriginal(){
	recuadro.style.width="200px"
	recuadro.style.transition="green";
}



/*====
eventos desde javaScript
*/
 	var boton =document.querySelector("#boton");

	 boton.addEventListener("click", moverCaja)

 	function moverCaja(){
 	recuadro.style.width = "500px";
 	recuadro.style.transition = "ls width ease";
}




	 var boton1 =document.querySelector("#boton1");

	 boton1.addEventListener("click", original)

	 function original(){
recuadro.style.width = "200px";
 	recuadro.style.transition = "ls width ease";
}

