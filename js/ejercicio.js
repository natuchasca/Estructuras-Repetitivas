// ESTRUCTURAS REPETITIVAS | For, While, do While
// Quitar comentarios para visualizar uno a uno


/*
//#1 SUMA 10 NUMEROS WHILE  /  OK?
var n,result,veces=0; 

while (veces<1){
  n1 = prompt("Escribe tu primer numero","");
  n2 = prompt("Escribe tu segundo numero","");
  n3 = prompt("Escribe tu tercer numero","");
  n4 = prompt("Escribe tu cuarto numero","");
  n5 = prompt("Escribe tu quinto numero","");
  n6 = prompt("Escribe tu sexto numero","");
  n7 = prompt("Escribe tu septimo numero","");
  n8 = prompt("Escribe tu octavo numero","");
  n9 = prompt("Escribe tu noveno numero","");
  n10 = prompt("Escribe tu decimo numero","");
  result = parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5) + parseInt(n6) + parseInt(n7) + parseInt(n8) + parseInt(n9) + parseInt(n10);
  alert("La suma es : "+result);
  veces++;
} 
*/


//#2 SUMA 10 NUMEROS DO WHILE



//#3 SUMA 10 NUMEROS FOR  /  OK!
/*
suma = 0;
for (n=1; n<11; n++) {
s = prompt('Ingrese número '+n+': ', '');
suma+=parseInt(s);
}
alert ("la suma es " + suma);
*/



/*
//#4 EDAD PROMEDIO  /  OK!
var alumnos, edades, promedio;
alumnos = parseInt (prompt ("Ingrese cantidad de alumnos"));
promedio = 0;

for (var i = 0 ; i < alumnos ; i++) {
	edades = prompt ("Ingrese las edades");
 	promedio += parseInt(edades)/alumnos;
 }; 
alert ("El promedio de edades es " + promedio);
*/



/*
//#5 NUMEROS PARES DEL 0-100  /  OK!
for (var i = 2 ; i < 100 ; i++) {
	if (i%2==0) {
    console.log(i);
  }
};
*/


//#6 TRIANGULO




/*
//#7 TABLAS DE MULTIPLICAR hasta 10  /  OK!
var numero, multiplos;
numero = parseInt (prompt ("Ingrese numero"));

for (var i = 1 ; i < 11; i++) {
  multiplos = (numero)*i; 
	console.log(multiplos); 
};
*/



/*
//#8 ELEVAR UN NUMERO ENTERO A LA "N" POTENCIA  /  OK!
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

// while ((notas<1)||(notas>7)){
    // notas = prompt('El número introducido no es correto (debe estar entre 0 y 99999999), vuelva a teclearlo');
// } 



/*
//#9 CALIFICACIONES 40 ALUMNOS | NOP
var alumnos, notas, promedio;
alumnos = 10;

for (var i = 0 ; i < alumnos ; i++) {
  notas = parseInt (prompt ("Ingrese las notas"));
 	promedio = notas/alumnos;
  alert ("El promedio de notas es " + promedio);
 }; 
*/



//#10 CUBO Y CUARTA DE UN NUMERO 


