12;
45;
23;
1;
2 - 1 - 10;
10.5;
20.2;

2.224e8; //notacion cientifica
// 2.224 x 10 elevado a la 8  = 222400000

(100 + 4) * 2;

4 % 2; // modulo

//reprecentaciones de valores numericos especiales

// Infinity
// -Infinity
// NaN  -> not a number

Infinity + 1;

NaN + "dany";

// strings -> cadenas de texto

("hola soy dany");

("hola soy dany nuevamente");

`Hola soy dany de nuevo`;

("hola soy \n dany nuevamente");

"el" + "diplomado"; // el diplomado

"la suma de " + "1" + "+" + "2" + " =" + "3";

` la suma de ${1} + ${2} = ${1 + 2} `;

// operadores unarios

typeof 4.5; // number
console.log(typeof "4.5"); // string

-1;
2 - 1;

// valores booleanos Boolean

true;
false;

//comparacion

3 > 2; // true
10 > 20; // false
10 < 20; // true

"dany" < "fabian"; // true

10 > 10; // false
10 >= 10; // true

10 == 10; // true
10 != 10; // false

NaN == NaN; // false

// operadores logicos

// and, or, not
// &&

true &&
  true(
    // true
    3 > 2
  ) &&
  true(
    // true
    3 + 1 == 4
  ) &&
  10 == 10; // true
true && false; // false
true && 1 > 2; // false

// ||

true ||
  false(
    // true
    3 < 2
  ) ||
  true(
    // true
    3 + 1 == 10
  ) ||
  10 == 10; // true
false || false; // false

// not
// !

!true; // false
!(2 > 1); // false
!false; // true
!(2 + 1 == 20); // true

// ternario

true ? 10 : 20; // 10
false ? "dany" : "Harritson"; // Harritson

10 % 2 == 0 ? "numero par" : "numero impar"; // "numero par"
5 % 2 == 0 ? "numero par" : "numero impar"; // "numero impar"

// null undefined -> valores de vacio, valores vacios, ausencia de valor

null;
undefined;

// conversion automatica

10 * null; // 0
"5" - 1; // 4
"5" + 1; // "51"
"cinco" + 1; // NaN
false == 0; // true

null == undefined; // true
null == 0; // false

"10" == 10; // true se compara valor
"10" === 10; // false se compara valor y tipo -> para toda comparacion

//short circuit

// ||

null || "valor por defecto"; // "valor por defecto"
"valor no null" || "valor por defecto"; // "valor no null"
