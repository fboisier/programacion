// COMENTARIOS EN UNA LINEA

/**
 * Comentarios en 2 lineas o más
 *  
 * 
 */

 /* console.log nos sirve para poder mostrar 
 en pantalla o consola el proceso de nuestro codigo. */
console.log('HOLA');
console.log(1);

// bloques de codigo se agrupan en llaves: 
//{ ...codigo... }


// como crear variables
var nombreVariable = "Valor de la variable"; // tipo STRING o cadena de texto.
var numero = 20;   // tipo numero

//sumar o concatenar. 
var sumaNumero = 20 + 10;  // sumaNumero daría 30. 
var nombreCompleto = "Francisco" + " " + "Boisier"; // nombreCompleto daría Francisco Boisier

// como incrementar rapidamente un numero y decrementar
var suma = 0;
suma += 10;  // incrementa en 10 el valor de suma.

var resta = 10; 
resta -= 5; // decrementa en 5 el valor de resta.

var texto = "HOLA";
texto += "MUNDO"; // concatena MUNDO al valor de texto.
texto += "123"; // concatena 123 al valor de texto. 


var contador = 0; 
contador++;  // incrementa en 1 la variable contador. 
contador--;  // decrementa en 1 la variable contador.


// --------------------- ARREGLOS -----------------------//

// como crear un arreglo:
var arreglo = [];
var arrNumero = [1, 2, 3, 4];
var arrTexto = ["UNO", "DOS", "TRES"];
var arrMultidimension = [[1,2,3], [4,5,6], [7,8,9]];

// uso de arreglo. PUSH y POP
arrTexto.push("CUATRO"); // agrega CUATRO al final del arreglo.
arrTexto.push("CINCO"); // agrega CINCO al final del arreglo.
arrTexto.pop(); // ELIMINA EL ULTIMO ELEMENTO DEL ARREGLO. (en este caso el CINCO)

//////////////// ACCEDER Y ASIGNAR VALORES EN ARREGLOS ///////////////

var arrTexto = ["UNO", "DOS", "TRES"];
//                0      1       2 
arrTexto[1] = "PANCHO";  // ASIGNO PANCHO al ARREGLO en su posicion 1. 
arrTexto[0] = arrTexto[1]; // Accedo al arreglo en su posicion 1 y se lo asigno al arreglo en su posicion 0. 
arrTexto[2] = arrTexto[0]; // Accedo al arrreglo en su posicion 0 y se lo asigno al arreglo en su posicion 2. 

arreglo.push("CUATRO"); // agrego al final el texto CUATRO.

console.log(arrTexto[3]); //  muestro el valor de arreglo en su posicion 3. 
console.log(arrTexto); //  muestra el arreglo completo

var arrSuma = [10,10,10]; 
        //      0  1  2
var sumaArreglo = arrSuma[0] + arrSuma[1] + arrSuma[2];
//     sumaArreglo = 10 + 10 + 10; 

console.log(arrSuma.length);  // imprime el LARGO del arreglo. 

////////////////////////////////////////////////////////////////////////

// IF y ELSE

if (1 == 1) // consulto si 1 es igual a 1. Podrian ser variables. 
{
    // SOLO SE EJECUTA ESTE BLOQUE SI EL IF ES VERDADERO
}
else 
{
    // SOLO SE EJECUTA ESTE BLOQUE SI EL IF ES FALSO
}
/*
OPERACIONES LOGICAS

==	igual
!=	diferente
>	mayor que 
<	menor que
>=	mayor o igual que
<=	menor o igual que */

/// como se hace un for:
for(var num = 0; num <= 5 ; num++){

    // TODO LO QUE EL FOR REPITA. RECORDAR QUE NUM CAMBIA EN CADA VUELTA.

}

// MANERA DE RECORRER LOS VALORES DE UN ARREGLO
for (var i = 0; i < arr.length; i = i + 1) {        
    console.log(i);             // imprime el índice       
    console.log(arr[i]);        // imprime el elemento en ese índice
}

// PROGRAMA QUE ACUMULA LOS VALORES DEL ARREGLO EN SUMA.
var suma = 0;
for (var i = 0; i < arr.length; i = i + 1) {        
    suma += arr[i];
}
console.log(suma);

//TIPS ADICIONALES AL FOR:
// continue;  se salta al siguiente ciclo del for. 
// break;  se sale del for por completo. 


//////////////////////////  FUNCIONES  //////////////////////////

///   FORMA DE FUNCION PARA REPETIR UN CODIGO CUANDO SE INVOCA
function nombreFuncion(){
    //CODIGO
}
nombreFuncion();


//   FORMA DE FUNCION CON PARAMETROS DE ENTRADA
function nombreFuncionParametros( parametroEntrada1, parametrosEntrada2 ){
    // CODIGO QUE OCUPA LAS VARIABLES DE ENTRADA Y TRABAJA EN FUNCION A ESOS  
}
nombreFuncionParametros("VALOR 1" , "VALOR 2");

function nombreFuncionParametrosRETORNA(parametro){
    // hace cosas con el parametro y retorna el resultados

    return parametro;
}