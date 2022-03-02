document.write("-----------------------------------------------------------------<br>");
document.write("5.- Crear un programa que solicite al usuario 5 números <br>y realice los cálculos que se piden a continuación. (2 Puntos) <br>● La suma de todos los números. <br>● El promedio de los 5 números ingresados. <br><br>");
document.write("-----------------------------------------------------------------<br>");

//Se guarda en variables cada uno de los 5 números ingresados (que por defecto se guarda como String).
var n1 = prompt("Ingrese el primer número entero:");
var n2 = prompt("Ingrese el segundo número entero:");
var n3 = prompt("Ingrese el tercero número entero:");
var n4 = prompt("Ingrese el cuarto número entero:");
var n5 = prompt("Ingrese el quinto número entero:");

//Se transforma cada una de las variables a número (number).
var num1 = parseInt(n1);
var num2 = parseInt(n2);
var num3 = parseInt(n3);
var num4 = parseInt(n4);
var num5 = parseInt(n5);

//Se suman todos los números y el resultado se guarda en la variable sumAll.
var sumAll = (num1 + num2 + num3 + num4 + num5);

// Se obtiene el promedio usando el valor de la suma total (sumAll), y dividido por la cantidad de números (5), el cual se guarda en la variable promAll.
var promAll = sumAll / 5;

document.write("Resultado:<br>");

//Se concatena el resultado, mostrando en el navegador primeramente los números que fueron ingresados por el usuario.
document.write("Los números ingresados por el usuario son: <br>● " + num1 + "<br>● " + num2 + "<br>● " + num3 + "<br>● " + num4 + "<br>● " + num5 + "<br>");

//Se muestra en el navegador el resultado de la suma y promedio, usando interpolación.
document.write(`La suma de todos los números es : ${sumAll} <br>`);
document.write(`El promedio de los 5 números ingresados es: ${promAll} <br>`);

document.write("-----------------------------------------------------------------<br>");