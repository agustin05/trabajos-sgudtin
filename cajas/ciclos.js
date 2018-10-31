/*==================================
CICLOS
====================================*/

var a =5;
var b =10;

if (a > b) {
	console.log("a es mayor que b")
} else if (a==b){
	console.log("a es lo mismo que b")
}else{
	console.log("a no es lo mismo que b, y a es menor que b")
}
//por cada if que se habra debe tener un else

/*==================================
CAMBIOS
====================================*/
 var dia ="domingo";

 switch(dia){

 	case "sabado":
 	console.log("voy a estudiar aps y jps");
 	break;
 	 case "martes":
 	 console.log("voy a estudiar css");

 	 case "jueves":
 	 console.log("voy a estudiar html");
 	 break;

 	 case "domingo":
 	 console.log("voy a descansar");
 	 break;

 	 default: console.log("voy a estudiar javascript");
 	}
 	//por cada switch que se habra se debera poner break

//CICLOS FOR 

var  cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);

for(var i = 0; i < cajas.length; i++){
cajas[i].style.width = "50px";
cajas[i].style.height = "50px";
cajas[i].style.background = "red";
cajas[i].style.marginTop ="5px";
cajas[i].style.marginRight ="5px";
cajas[i].style.display = "inline-block";
}

for(var i = 1; i <= 5; i++){
	console.log("i", 1);
}

//CICLOS WHILE

var n = 1;

while(n <= 5){
	console.log("n", n);
	n++
}

//	CICLOS DO WHILE

var p = 1;

do{
	console.log("p", p);
	p++;
}
while(p <=5);