/*2.Nahuel Zurita Div Z
TP Ejercicio 02
	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo
	var ancho
	var cantidad
	var hilos;
	var texto;

	hilos = 3;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);

	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	cantidad =  (2 * largo + 2 * ancho) * hilos;

	texto = "Metros necesitados : " + cantidad;

	alert(texto);
}
function Circulo () 
{
	var radio;
	var hilos;
	var cantidad;
	var texto;

	hilos = 3;

	radio = document.getElementById('txtIdRadio').value;
	radio = parseInt(radio);

	cantidad =  (2 * 3.14 * radio) * hilos;

	texto = "Metros necesitados : " + cantidad;

	alert(texto);
}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;
	var textoCemento;
	var textoCal;
	var texto;

	cemento = 2;

	cal = 3;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);

	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	area = largo * ancho;

	cemento = cemento * area;

	cal = cal * area;

	textoCemento = "Se necesitan " + cemento + " bolsas de cemento"

	textoCal = " y " + cal + " bolsas de cal";

	texto = textoCemento + textoCal;

	alert(texto);
}