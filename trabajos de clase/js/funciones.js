/*=========================
Funciones sin parámetros
==========================*/

//Declaramos la función

function saludo(){
	//tarea de la función
	console. log("hola ");
}

//ejecucion
saludo();

/*===================================
Funcionesz con parametros
====================================*/
//declaramos la funcion 
function operacion(digito1, digito2){
	var resultado = digito1 + digito2;
	console.log("resultado: ", resultado);
}

operacion(5, 7);
operacion(10, 5);

/*====================================
funciones con retornos sin parametros
======================================*/
 function retorno1(numero){
 	var numero = 5;
 	return numero;
 }
 console.log(retorno1());

 /*=====================================
 funciones con retornos con parametros
======================================== */
 function retortno2(numero){
 	return numero;
 }
 console.log(retortno2(75));