console. log("HOLA MUNDO")

//variables numericas
var numero = 5;
console. log("numero: ", numero);

//variable de texto
var palabra = "hola nena te amo clalo"
console. log("palabra:", palabra);

//variables boleanas
var  boleana = true;
console. log("boleana:", boleana);

//variables de tipo arreglo (array)
var colores = ["rojo", "amarillo","azul"];
console. log("colores:", colores);

//variables de tipo objeto (objet: propiedad y el valor)
var jugo = {"ingrediente1": "fresa",
			"ingrediente2": "mandarina",
		    "ingrediente3": "platano"};
console. log("jugo:", jugo);

/*==================================
variables DOM ('modelo de objetos del documento')
/* El DOM es la estructura de objetos que genera el navegador 
cuando se carga el documento y se puede alterar mediante
javascript para cambiar dinamicamente los contenidos
y aspectos de la pagina
====================================*/

var cajas = document.querySelector("#cajas");
console.log("cajas:", cajas);

cajas.style.width ="300px";
cajas.style.height ="200px";
cajas.style.background ="blue";

var cajita = document.querySelector("#cajita");
console.log("cajita:", cajita);

cajita.style.width ="500px";
cajita.style.height ="200px";
cajita.style.background ="blue";
