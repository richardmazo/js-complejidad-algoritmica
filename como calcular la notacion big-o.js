//Notacion Big-O en complejidad temporal

let bar = 'test' // O(1)
for(){}          // O(n)
while(){}        // O(n)
for(){ for(){}}  // O(n^2)


//Notacion Big-O en complejidad espacial
//Consiste en ver cuántas variables o cuanto espacio se van creando a partir de que vamos ejecutando el algoritmo, ejemplo:


let bar = 'test' // O(1)   // Asigna un espacio test a la variable var
if(){}           // O(1)   // Asigna un valor a la condicional
for(){}          // O(1)   // Asigna un valor al for
let resultado = 
[1,2, ..., n] //O(n)  // Porque tiene más de una asignación
let dimensional = 
... [[2, 4], [6, 8], [10, 12]] // O(n^2)  // Por cada arreglo, hay otro arreglo


// En conclusión, si necesitamos crear un arreglo de N elementos: O (n)
// Si necesitamos crear un arreglo de N x N elementos: O (n^2)


//Simplificar la notación:
// Se preocupa de tener los grados mayores o mucho más importantes, ejemplo

// O(2n)      -> O(n)
//O(50)       -> O(1)
//O(n^2 + 50) -> O(n^2)


// El crecimiento importa:
// La complejidad de un algoritmo nace de cuantos recursos utiliza el algoritmo al utilizarse
// La notacion Big-O solo se enfoca en el crecimiento