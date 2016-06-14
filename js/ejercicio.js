// ESTRUCTURAS REPETITIVAS

//#1 SUMA 10 NUMEROS WHILE


//#2 SUMA 10 NUMEROS DO WHILE


//#3 SUMA 10 NUMEROS FOR
/*
suma = 0;
for(n=1;n<11;n++){
s = prompt('Ingrese número '+n+': ', '');
suma+=parseInt(s);
}
alert ("la suma es " + suma);
*/


//#4 EDAD PROMEDIO
/*
var alumnos, edades, promedio;
alumnos = parseInt (prompt ("Ingrese cantidad de alumnos"));
promedio = 0;

for (var i = 0 ; i < alumnos ; i++) {
	edades = prompt ("Ingrese las edades");
 	promedio += parseInt(edades)/alumnos;
 }; 
alert ("El promedio de edades es " + promedio);
*/


//#5 NUMEROS PARES DEL 0-100
/* no funca
for (var i = 1 ; i > 0; i++) {
	Things[i]
};
*/

//#6 TRIANGULO


//#7 TABLAS DE MULTIPLICAR 
/* no funca
var numero, multiplos;
numero = parseInt (prompt ("Ingrese numero"));
multiplos = 0;

for (var i = 1 ; i > 10; i++) {
	console.log (i*i); 
};
var multiplos = function ()
*/




//#8 ELEVAR UN NUMERO ENTERO A LA "N" POTENCIA
/*
var potencia, base, total;
base = parseInt (prompt ("Numero base"));
potencia = parseInt (prompt ("Numero potencia"));
total = base;

//utilizo for porque voy a iterar potencia veces
for (var i = 0; i < potencia-1; i++) {
	total = total * base;
}
alert (base + " elevado a " + potencia + " es igual a " + total)
*/


//#9 CALIFICACIONES ALUMNOS
/* no funca
var alumnos, notas, promedio;
alumnos = 40;
promedio = 0;

for (var i = 0 ; i < alumnos ; i++) {
	notas = prompt ("Ingrese las notas","");
 	promedio += parseInt(notas)/alumnos;
 }; 
alert ("El promedio de notas es " + promedio);
*/


//#10 CUBO Y CUARTA DE UN NUMERO 