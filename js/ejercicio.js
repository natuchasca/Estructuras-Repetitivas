// ESTRUCTURAS REPETITIVAS


// Ejercicio #8: ELEVAR UN NUMERO ENTERO A LA "N" POTENCIA
var potencia, base, total;
base = parseInt (prompt ("Numero base"));
potencia = parseInt (prompt ("Numero potencia"));
total = base;

//utilizo for porque voy a iterar potencia veces
for (var i = 0; i < potencia-1; i++) {
	total = total * base;
}
alert (base + " elevado a " + potencia + " es igual a " + total)
