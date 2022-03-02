document.write("-----------------------------------------------------------------<br>");
document.write("2.- Realizar operaciones con dos números. <br>Pedir al usuario que ingrese dos números diferentes y mayores a cero. <br>Para ambos números, calcular lo siguiente: <br><br> ● Suma <br>● Resta <br>● División <br>● Multiplicación <br>● Módulo <br><br>")

// Se crea 2 variables para el ingreso de 2 números por parte del usuario:
var num1 = +prompt("Ingrese el primer valor entero");
var num2 = +prompt("Ingrese el segundo valor entero");

// Se muestra en el navegador el valor de las 2 variables ingresadas
document.write("--------------------------------<br>");
document.write("num1 es igual a : " + num1 + "<br>");
document.write("num2 es igual a : " + num2 + "<br>");
document.write("--------------------------------<br><br>");

// Se realizan las 5 operaciones con estas 2 variables (num1 y num2),
// El resultado de cada una de estas operaciones se guarda en otra variable:
var valorSuma = num1 + num2; //Suma
var valorResta = num1 - num2; //Resta
var valorProducto = num1 * num2; //Multiplicación
var valorCuociente = num1 / num2; //División
var valorModulo = num1 % num2; //Módulo

document.write("Resultado:<br>");

// Se muestra en el navegador el resultado de las operaciones, que fueron guardadas en las variables asignadas:
document.write("Resultado de la suma: " + valorSuma + "<br><br>");
//Resultado de la suma

document.write("Resultado de la resta: " + valorResta + "<br><br>");
//Resultado de la resta

document.write("Resultado de la multiplicación: " + valorProducto + "<br><br>");
//Resultado de la multiplicación

document.write("Resultado de la división: " + valorCuociente + "<br><br>");
//Resultado de la división

document.write("Resultado del módulo: " + valorModulo + "<br>");
//Resultado del módulo

document.write("-----------------------------------------------------------------<br>");