/*Nahuel Zurita Div Z
TP Ejercicio 01
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	var precio1;
	var precio2;
	var precio3;
	var resultado;
	var texto;

	precio1 = document.getElementById('txtIdPrecioUno').value;
	precio1 = parseInt(precio1);

	precio2 = document.getElementById('txtIdPrecioDos').value;
	precio2 = parseInt(precio2);

	precio3 = document.getElementById('txtIdPrecioTres').value;
	precio3 = parseInt(precio3);

	resultado = precio1 + precio2 + precio3;

	texto = "La suma da " + resultado;

	alert(texto);

}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;
	var texto;

	precio1 = document.getElementById('txtIdPrecioUno').value;
	precio1 = parseInt(precio1);

	precio2 = document.getElementById('txtIdPrecioDos').value;
	precio2 = parseInt(precio2);

	precio3 = document.getElementById('txtIdPrecioTres').value;
	precio3 = parseInt(precio3);

	resultado = (precio1 + precio2 + precio3) / 3;

	texto = "El promedio es " + resultado;

	alert(texto);
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var IVA;
	var suma;
	var resultado;
	var texto;

	IVA = 21;

	precio1 = document.getElementById('txtIdPrecioUno').value;
	precio1 = parseInt(precio1);

	precio2 = document.getElementById('txtIdPrecioDos').value;
	precio2 = parseInt(precio2);

	precio3 = document.getElementById('txtIdPrecioTres').value;
	precio3 = parseInt(precio3);

	suma = precio1 + precio2 + precio3;

	resultado = suma + (suma *IVA / 100);

	texto = "El precio final es " + resultado;

	alert(texto);
}