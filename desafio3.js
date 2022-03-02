document.write("-----------------------------------------------------------------<br>");
document.write("3.- Crear un programa que pida al usuario ingresar la temperatura <br>en grados Celsius y que la transforme a grados Kelvin y Fahrenheit. <br>Se debe considerar la siguiente información respecto a <br>la equivalencia de las escalas de temperatura: <br><br>● 0 Grados Celsius corresponden a 273,15 Kelvin. <br>La fórmula para convertirlos es 0 °C + 273.15 = 273.15 K <br><br>● 0 Grados Celsius corresponden a 32 Fahrenheit. <br>La fórmula para convertirlos es (0 °C × 9/5) + 32 = 32 °F <br><br>");
document.write("-----------------------------------------------------------------<br>");

// Se crea la variable celsius para guardar la temperatura ingresada por el usuario (por defecto se guarda como String)
var celsius = prompt("Ingrese la temperatura ambiental");

// la variable gradosCelsius almacena el mismo valor de celsius, pero en formato numérico (number) 
var gradosCelsius = parseInt(celsius);

//Se crea la constante k, que equivale a 273.15 (para posteriormente ser sumada al valor de gradosCelsius )
const k = 273.15;

//La suma de la constante k y el valor ingresado por el usuario se suman, dando como resultao el valor en °K, el cual se almacena en una nueva variable llamada gradosKelvin
var gradosKelvin = gradosCelsius + k;

//La variable gradosFahrenheit almacenará el resultado de la operacion que transforma °C a °F, usando el valor ingresado por el usuario 
var gradosFahrenheit = ((gradosCelsius * 9 / 5) + 32);

document.write("Resultado:<br>");
document.write("La temperatura ingresada por el usuario es: " + gradosCelsius + "°C,<br>");
document.write("La temperatura ingresada equivale a: " + gradosKelvin + " °K,<br>");
document.write("Y también equivale a: " + gradosFahrenheit + " °F<br>");
document.write("-----------------------------------------------------------------<br>");