console. log("HOLA MUNDO")

//variables numericas
var numero = 5;
//var x = document.getElementById("numero");
//x.innerHTML = "el numero es:" +numero +".";
var numero = 5;
console. log("numero: ", numero);

//variable de texto
var palabra = "hola n"
console. log("palabra:", palabra);

//variables boleanas
var  boleana = true;
console. log("boleana:", boleana);

//variables de tipo arreglo (array)
var colores = ["rojo", "amarillo","azul"];x	
console. log("colores:", colores);

//variables de tipo objeto (objet: propiedad y el valor)
var jugo = {"ingrediente1": "fresa",
			"ingrediente2": "mandarina",
		    "ingrediente3": "platano"};
console. log("jugo:", jugo);

//variables DOM ('modelo de objetos del documento')
/*El DOM es la estructura de objetos que genera el navegador cuando
se carga un documento y se puede alterar mediante 
javascript para cambiar dinamicamente los contenidos y aspectos de la pagina*/

var caja = document.querySelector("#caja");
console.log("caja: ", caja);

caja.style.width = "200px";
caja.style.height="200px";
caja.style.background = "red";

var cajita = document.querySelector("#cajita");
console.log("cajita: ", cajita);

cajita.style.width = "100px";
cajita.style.height="100px";
cajita.style.background = "blue";
