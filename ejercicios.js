function mayoresAy(arreglo,  y) {

    
    var contador = 0;

    for (var x = 0; x < arreglo.length; x++) {
        if (arreglo[x] > y) {
            console.log(arreglo[x]);
            contador++;
        }
    }

    console.log("Mayor que " + y +  " en [" + arreglo +  "] es: " + contador);

    return contador;
}

mayoresAy([9,3,4,5,1], 3);
var contador2 = mayoresAy([3,4,5], 4);




/// ejercicio 2 del algoritmo 4
var cualquiercosa = "PANCHO"; 

function mostrarMaxMinPromedio(arreglo) {
    
    var mimaximo = arreglo[0];
    var minimo = arreglo[0];
    var suma = 0;

    for (var x = 0; x < arreglo.length; x++) {
        suma += arreglo[x];

        if (arreglo[x] > mimaximo) {
            mimaximo = arreglo[x];
        }

        if (arreglo[x] < minimo) {
            minimo = arreglo[x];
        }
    }

    var promedio = suma / arreglo.length;

    console.log("EL MAXIMO ES: " + mimaximo);
    console.log("EL MINIMO ES: " + minimo);
    console.log("LA SUMA ES: " + suma);
    console.log("EL PROMEDIO ES: " + promedio);

    return promedio;
}

mostrarMaxMinPromedio([7,5,2]);
var promedioSaliente = mostrarMaxMinPromedio([9,3,4,5,7,2,3,4,5,6,7,8]);
console.log(promedioSaliente);


/* Dado un array de números, crea una función que dé como resultado
un nuevo array donde los valores negativos se reemplacen
por el texto (string) ‘Dojo’. Por ejemplo,
reemplazarNegativos([1,2,-3,-5,5]) debiera devolver 
[1,2, “Dojo”, “Dojo”, 5]. */

function reemplazarNegativos(arreglo){

    
    var nuevoArray = [];

    for(var indice = 0 ; indice < arreglo.length ; indice++)
    {
        console.log(arreglo[indice]);

        if( arreglo[indice] < 0 )
        {
            nuevoArray.push("Dojo");
        } 
        else
        {
            nuevoArray.push(arreglo[indice]);
        }
        
        
    }

    return nuevoArray;
    
}

var arreglo = [1,2,-3,-5,5];   // [1,2, “Dojo”, “Dojo”, 5]
var arregloRemplazado = reemplazarNegativos(arreglo);

console.log(arregloRemplazado);


/* Dado un array, mueve todos los valores un espacio 
de derecha a izquierda eliminando el primer valor y
dejando un 0 para el último valor. Por ejemplo,
moverAdelante([1,2,3]) debiera dar como resultado [2,3,0]. */

function moverAdelante(arreglo){

    for (var x = 0; x < arreglo.length; x++) {
        
        arreglo[x]  = arreglo[x + 1];
        
    }
    
    arreglo[arreglo.length - 1]  = 0;
    
    return arreglo;

}


var arreglo = moverAdelante([1,2,3]); 
console.log(arreglo);