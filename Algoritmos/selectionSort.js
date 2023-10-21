/**
 * Complejidad Temporal -> O( 1 + n * n + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 ) = O( n * n + 9 ), Simplificando -> O( n^2 )
 * Complejidad Espacial -> O( n + 1 + 1 + 1 + 1 + 1) = O(n + 5), Simplificando O(n)
* Espacio Auxiliar: Es la complejidad espacial menos el espacio ocupado por los datos de entrada
 * Espacio Auxiliar = Complejidad Espacial - Espacio de entrada
 * Espacio Auxiliar = O(n) - O(5) = O(5) = O(1)
 */

function selectionSort(arreglo){ // Complejidad espacial: O(n)
    let longitud = arreglo.length; // Complejidad temporal: O(1); Complejidad espacial: O(1)

    for(let i = 0; i < longitud; i++){ // Complejidad temporal: O(n); Complejidad espacial: O(1)
        let minimo = i;// Complejidad temporal: O(1); Complejidad espacial: O(1)
        for(let j = i + 1; j < longitud; j++){ // Complejidad temporal: O(n); Complejidad espacial: O(1)
            if(arreglo[j] < arreglo[minimo]){ // Complejidad temporal: O(1)
                minimo = j; // Complejidad temporal: O(1)
            }
        }
        if(minimo != i){ // Complejidad temporal: O(1)
            let temporal = arreglo[i]; // Complejidad temporal: O(1); Complejidad espacial: O(1)
            arreglo[i] = arreglo[minimo]; // Complejidad temporal: O(1)
            arreglo[minimo] = temporal; // Complejidad temporal: O(1)
        }
    }
    return arreglo; // Complejidad temporal: O(1)
}