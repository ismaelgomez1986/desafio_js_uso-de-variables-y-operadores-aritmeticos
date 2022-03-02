document.write("-----------------------------------------------------------------<br>");
document.write("4.- Crear un programa que pida al usuario una cantidad de días <br>y que muestre su equivalente en Años, Semanas y Días. <br>Por ejemplo, si el usuario ingresa 373, el resultado debe ser <br>1 año, 1 semana y 1 día. (3 Puntos) <br>Se debe considerar lo siguiente: <br><br>● 1 año tiene 365 días <br>● 1 semana tiene 7 días <br><br>Se recomienda usar la función Math.floor para obtener <br>la parte entera de un número decimal. <br><br>");
document.write("-----------------------------------------------------------------<br>");

// Se crea la variable stringDias que almacenará el valor ingresado por el usuario (por defecto como String)
var stringDias = prompt("Ingrese una cantidad de días: ");

// la variable numDias almacena el mismo valor de stringDias, pero en formato numérico (number).
var numDias = parseInt(stringDias);

//Se divide la cantidad de días ingresadas por el usuario, por 365, 
//para saber cuantos años equivale numDias, el resultado es precedido de la función Math.floor, para obtener la parte entera del cuociente.
//Este resultado es almacenado en la variable valAno
var valAno = Math.floor(numDias / 365);

//Se obtiene el resto de la división anterior, para conocer la cantidad de días restantes (el resto )
var modAno = numDias % 365;

//Se divide la cantidad de días restantes (modAno) por 7, para saber a qué cantidad de semanas equivale los días restantes de la primera operación (valAno)
var valSem = Math.floor(modAno / 7);

//Por último, para saber cuántos días quedaron como resto de la división anterior (valSem), se busca el módulo de modAno y 7, y se almacena en la variable valDia, como el resultado es en cantidad de días, no se debe realizar ninguna otra operación.
var valDia = modAno % 7;


document.write("Resultado:<br>");


//Se menciona el valor ingresado por el usuario primeramente, para que la respuesta sea más entendible
document.write("El usuario ingresó: " + numDias + " días,<br>");

//Se concatena la oración, junto con el valor de los resultados de las operaciones anteriores.
document.write("Que equivalen a: " + valAno + " año(s), " + valSem + " semana(s) y " + valDia + " día(s).<br>");
("-----------------------------------------------------------------<br>");