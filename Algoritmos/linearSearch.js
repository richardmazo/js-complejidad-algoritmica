/**
 * Complejidad Temporal -> O( n + 3 ), Simplificando -> O(n)
 * Complejidad Espacial -> O( n + 1 + 1 ), Simplificando -> O(n)
 * Espacio Auxiliar: Es la complejidad espacial menos el espacio ocupado por los datos de entrada
 * Espacio Auxiliar = Complejidad Espacial - Espacio de entrada
 * Espacio Auxiliar = O(n) - O(1) = O(1)
 */
 
function linearSearch(arreglo, clave){// Complejidad espacial: O(n + 1)
    for(let indice = 0; indice < arreglo.length; indice ++){ // Complejidad temporal: O(n); Complejidad espacial: O(1)
        if(arreglo[indice] == clave){ // Complejidad temporal: O(1)
            return indice; // Complejidad temporal: O(1)
        }
    }
    return -1; // Complejidad temporal: O(1)
}
