function sumar (a, b) {    
    return a + b;
}
var resultado = sumar(10, 20);
document.write("<h3> El resultado de la suma es: " + resultado);

//

var sumar2 = ( x, y ) => x + y;
var resultado = sumar2(10, 20);
document.write("<h3> El resultado de la suma es: " + resultado);

//

var numeros = [4, 2, 5, 1, 3];
numeros.sort(function(a, b) {
  return a - b;
});
document.write("<h3> El orden ascendente es: " + numeros);

//

var numeros2 = numeros.sort((a, b) => a - b);
document.write("<h3> El orden ascendente es: " + numeros2);

//

var calcetines = [10,10,10,20,20,30,40,40]
var contadorDeCalcetines = 0;
for(var i = 0; i < calcetines.length - 1; i++){
if(calcetines[i] === calcetines[i+1]){
contadorDeCalcetines++;
i = i + 1;
}
}
document.write("<h3> Los pares de calcetines que John puede vender son: " + contadorDeCalcetines)