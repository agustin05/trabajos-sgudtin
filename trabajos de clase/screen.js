/*===================
Ancho de la pantalla de la ventana
La propiedad screen.width devuelve el ancho de la pantalla del visitante en píxeles.
=========================*/
document.getElementById("demo").innerHTML = 
"ancho de pantalla es " + screen.width;

/*=============================
Altura de la pantalla de ventana
La propiedad screen.height devuelve el alto de la pantalla del visitante en píxeles.
==============================*/
document.getElementById("demo1").innerHTML = 
"la altura de pantalla es: " + screen.height;

/*=================================
Ancho disponible de la pantalla de la ventana
La propiedad screen.availWidth devuelve el ancho de la pantalla del visitante, en píxeles, menos las características de la interfaz como la barra de tareas de Windows.
==================================*/
document.getElementById("demo2").innerHTML = 
"el ancho de pantalla es: " + screen.availWidth;

/*========================================
Altura disponible de la pantalla de la ventana
La propiedad screen.availHeight devuelve el alto de la pantalla del visitante, en píxeles, menos las funciones de interfaz como la barra de tareas de Windows.
===========================================*/
document.getElementById("demo3").innerHTML = 
"la altura de la pantalla es: " + screen.availHeight;

/*======================================0
Profundidad del color de la pantalla de la ventana
La propiedad screen.colorDepth devuelve la cantidad de bits utilizados para mostrar un color.

Todas las computadoras modernas usan hardware de 24 bit o 32 bit para resolución de color:

24 bits = 16,777,216 diferentes "colores verdaderos"
32 bits = 4.294.967.296 diferentes "colores profundos"
Las computadoras antiguas usaban 16 bits: 65.536 resoluciones diferentes de "colores altos".

Las computadoras muy viejas y los teléfonos celulares viejos usaban 8 bits: 256 "colores VGA" diferentes.
=============================================*/
document.getElementById("demo4").innerHTML = 
"la profundidad del color de la pantalla es: " + screen.colorDepth;

/*==========================================
Pantalla de ventana Profundidad de píxel
La propiedad screen.pixelDepth devuelve la profundidad de píxeles de la pantalla.
============================================*/
document.getElementById("demo5").innerHTML = 
"la profundidad del pixel de la pantalla es: " + screen.pixelDepth;
