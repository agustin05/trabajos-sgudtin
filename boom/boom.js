/*=======================================================================
the Browser Objet Model (BOM) allows JavaScritp to "talk to" the browser.
=======================================================================*/

var w =window.innerWidth
||document.documentElement.clientWidth
||document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
||document.body.clientHeight;

var x = document.getElementById("prueba");
x.innerHTML = "ancho de la ventana interior del navegador: " + w + ", altura: " + h + ".";

/*==================================================================================
Window Screen heigth
la propiedad Screen.height devulve la altura de la pantalla del visitante en píxeles
====================================================================================*/

document.getElementById("prueba3").innerHTML = "el alto de la pantalla es "  +screen.height;

/*==================================================================================
Window Screen Width
la propiedad Screen.availWidth devulve lo ancho de la pantalla del visitante en píxeles
====================================================================================*/

document.getElementById("ancho").innerHTML = "el ancho de la pantalla es "  +screen.availWidth;

/*==================================================================================
Window Screen Width
la propiedad screen.availHeight devulve la altura de la pantalla disponible. 
====================================================================================*/
 
 document.getElementById("alturadisponible").innerHTML = " altura de pantalla disponible " +screen.availHeight;


/*==================================================================================
Window Screen Width
la propiedad screen.availHeight devulve la altura de la pantalla disponible. 
====================================================================================*/
 document.getElementById("prueba6").innerHTML = "profundidad de color de pantalla: " + screen.colorDepth; 


/*==================================================================================
la propiedad pixelDepth muestra la profundidad de los pixeles en la pantalla. 
====================================================================================*/
 document.getElementById("profundidadpixel").innerHTML = "profundidad del pixel en la pantalla: " + screen.pixelDepth;



/*JS LOCATION

/*==================================================================================
La propiedad window.location.href devuelve la URL de la página actual.
====================================================================================*/
document.getElementById("url").innerHTML = "The full URL of this page is:<br>" + window.location.href;


/*==================================================================================
La propiedad window.location.hostname devuelve el nombre del host de Internet (de la página actual).
====================================================================================*/
document.getElementById("host").innerHTML = "El nombre del host de la página es: " + window.location.hostname;


/*==================================================================================
La propiedad window.location.hostname devuelve el nombre del host de Internet (de la página actual).
====================================================================================*/
document.getElementById("ruta").innerHTML ="La ruta de página es: " + window.location.pathname;


/*==================================================================================
La propiedad window.location.protocol devuelve el protocolo web de la página.
====================================================================================*/
document.getElementById("protocolo").innerHTML ="Mostrar el protocolo web: " + window.location.protocol;


/*==================================================================================
La propiedad window.location.port devuelve el número de Internet 
====================================================================================*/
document.getElementById("puerto").innerHTML ="El número de puerto URL de la página actual es: " + window.location.port;


/*==================================================================================
El método window.location.assign() carga un nuevo documento.
====================================================================================*/
function newDoc() {
    window.location.assign("navegador.html")
    }
    4


/*==================================================================================
El método history.back() carga la URL anterior en la lista del historial.
====================================================================================*/
function goBack() {
    window.history.back()
}

/*==================================================================================
El método history forward() carga la siguiente URL en la lista del historial.
====================================================================================*/
function goForward() {
    window.history.forward()
}


/*JS NAVEGADOR

/*==================================================================================
la propiedad cookieEnabled devuelve true si las cookies están habilitadas, de lo contrario false:
====================================================================================*/
 document.getElementById("prueba8").innerHTML ="las cookis estan abilitadas :" + navigator.cookieEnabled;


/*==================================================================================
La propiedad appName devuelve el nombre de la aplicación del navegador
====================================================================================*/
document.getElementById("navegador").innerHTML ="nombre del navegador es: " + navigator.appName;

/*====================================================================================
La propiedad appCodeName devuelve el nombre de código de la aplicación del navegador:
=======================================================================================*/
document.getElementById("prueba10").innerHTML = "navigator.codigo del nombre del  navegador es " + navigator.appCodeName;

/*==================================================================================
La propiedad product devuelve el nombre del producto del motor del navegador:
====================================================================================*/
document.getElementById("nombre navegador").innerHTML ="navigator.product is :" + navigator.product;


/*==================================================================================
La propiedad appVersion devuelve información sobre la versión del navegador:
====================================================================================*/
document.getElementById("version").innerHTML = navigator.appVersion;


/*===============================================================================================
La propiedad userAgent devuelve el encabezado de user-agent enviado por el navegador al servidor:
==================================================================================================*/
document.getElementById("encabezado").innerHTML = navigator.userAgent;


/*==================================================================================
La propiedad de la plataforma devuelve la plataforma del navegador (sistema operativo):
====================================================================================*/
document.getElementById("sistema").innerHTML ="navigator.platform is " + navigator.platform;

/*==================================================================================
La propiedad language devuelve el idioma del navegador:
====================================================================================*/
document.getElementById("lenguaje").innerHTML ="navigator.language : " + navigator.language;

/*==================================================================================
La propiedad onLine devuelve true si el navegador está en línea:
====================================================================================*/
document.getElementById("online").innerHTML ="navigator.onLine is : " + navigator.onLine;


/*==================================================================================
El método javaEnabled() devuelve true si Java está habilitado:
====================================================================================*/
document.getElementById("habilitado").innerHTML ="javaEnabled is : " + navigator.javaEnabled();


/* JS POPUP ALERT

/*==================================================================================
advertencia en pagina
====================================================================================*/
function ad() {
    alert("prueba de alerta");
}

/*==================================================================================
Confirmar cuadro de texto 
====================================================================================*/
function con() {
    var txt;
    if (confirm("precione el boton deceado")) {
        txt = "seguir ";
    } else {
        txt = "cancelar";
    }
    document.getElementById("confirmar").innerHTML = txt;
}



/*==================================================================================
cuadro de solicitud
====================================================================================*/
function solicitud() {
    var txt;
    var person = prompt("introdusca su nombre:", "jorge");
    if (person == null || person == "") {
        txt = "el usuario cancelo el aviso.";
    } else {
        txt = "Hola " + person  + "¿Cómo estás hoy?";
    }
    document.getElementById("solicitar").innerHTML = txt;
}


/*Eventos de sincronización de JavaScript

/*==================================================================================
El método setTimeout() evento de tiempo
====================================================================================*/
function tiempo() {
    alert('hola');
}



/*==================================================================================
¿Cómo detener la ejecución?
====================================================================================*/
function inicio() {
    alert("Hello");
}



/*==================================================================================
reloj digital
====================================================================================*/
var myVar = setInterval(mihora, 1000);

function mihora() {
    var d = new Date();
    document.getElementById("reloj").innerHTML = d.toLocaleTimeString();
    document.getElementById("stop").innerHTML = d.toLocaleTimeString();
}


/*==================================================================================
"Tiempo de parada":
====================================================================================*/
