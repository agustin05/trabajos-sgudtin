/*=========================
Funciones sin parámetros
==========================*/

//Declaramos la función

function saludo(){
	//tarea de la función
	console. log("hola nena te quiero");
}

//ejecucion
saludo();

/*======================
FUNCIONES CON PARAMETROS
=======================*/

//DECALRAMOS LA FUNCIÓN
function operacion(digito1, digito2){
	var resultado = digito1 + digito2;
	console. log("resultado", resultado);
}

operacion(5, 7);
operacion(6, 8);

/*==================================
FUNCIONES CON RETORNO SIN PARAMETROS
====================================*/

function retorno1(){
	var numero = 5;
	return numero;
}

console. log(retorno1());
/*==================================
FUNCIONES CON RETORNO CON PARAMETROS
====================================*/

function retorno2(numero){
	return numero;
}
console. log(retorno2(4));

