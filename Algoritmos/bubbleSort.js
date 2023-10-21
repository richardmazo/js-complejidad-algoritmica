/**
 * Complejidad Temporal -> O( 1 + n * n + 1 + 1 + 1 + 1 + 1 ) = O( n * n + 6 ), Simplificando -> O( n^2 )
 * Complejidad Espacial -> O( n + 1 + 1 + 1 + 1) = O( n + 4 ), Simplificando O(n)
 * Espacio Auxiliar: Es la complejidad espacial menos el espacio ocupado por los datos de entrada
 * Espacio Auxiliar = Complejidad Espacial - Espacio de entrada
 * Espacio Auxiliar = O(n) - O(4) = O(4) = O(1)
 */
function bubbleSort(arreglo){; // Complejidad espacial: O(n)
    let longitud = arreglo.length; // Complejidad temporal: O(1); Complejidad espacial: O(1)
    for(let i = 0; i < longitud; i++){ // Complejidad temporal: O(n); ; Complejidad espacial: O(1)
        for(let j = 0; j < longitud; j++){ // Complejidad temporal: O(n); ; Complejidad espacial: O(1)
            if(arreglo[j] > arreglo[j + 1]){ // Complejidad temporal: O(1)
                let temporal = arreglo[j]; // Complejidad temporal: O(1); ; Complejidad espacial: O(1)
                arreglo[j] = arreglo[j + 1]; // Complejidad temporal: O(1); 
                arreglo[j + 1] = temporal;  // Complejidad temporal: O(1)
            }
        }
    }
    return arreglo; // Complejidad temporal: O(1)
}