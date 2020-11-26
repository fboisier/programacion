/* Configura un array para que el resultado sean los 
valores en el orden contrario. Por ejemplo,
 returnReverso([1,2,3]) debe dar [3,2,1].
 */
var arreglo = [1,2,3,4];
            // 0 1 2 3 

           0  [4,2,3,1] 
           1  [4,3,2,1] 
           2  [4,2,3,1] 
           3  [1,2,3,4] 


console.log(arreglo);

for(var x = 0; x < arreglo.length / 2; x++){
    
    console.log("ESTO: " + arreglo[arreglo.length - 1 - x] + " LO PASO A: "+ arreglo[x] );

    var temporal = arreglo[x];
    arreglo[x] = arreglo[arreglo.length - 1 - x]; 
    arreglo[arreglo.length - 1 - x] = temporal;

}

console.log(arreglo);
