# Sprint 2 Entrega 2.3 Función Memoize
# Configuración
Instalar los siguientes módulos en la terminal:

- npm init -y
- npm install typescript -D
- npm i -D ts-node
- npm i -D jest typescript ts-jest @types/jest
- npm i chalk@4.1.2
- tsc -init
- npx tsc
  
# Test
Realizado con Jest, comprueba que la función memoize almacena datos en caché, que ejecuta correctamente la función que tiene como parámetro y que se ejecuta sólo una vez cada vez que se la llama cuando ya tiene el resultado en caché.
Para ejecutar el test, en la carpeta raíz escribir en la terminal:

- npm test

# CLI
Realizado con la interfaz de Readline, que viene integrado en node. Para ejecutarlo:

- npm run memoize

Este programa muestra cómo la función memoize almacena en caché el resultado obtenido al buscar el valor en una posición determinada dentro de la secuencia de Fibonacci.
Al introducir la posición la primera vez el programa tarda en procesar la operación pero, gracias a la función memoize, cada vez que volvamos a buscar esa posición el resultado es inmediato ya que no tiene que volver a calcularlo.

# Front End
Archivo html incluido en el directorio raíz. Introduce la posición de la secuencia de Fibonacci cuyo valor quieras ver por pantalla y luego pulsa el botón.

- **Sin función memoize:** cada vez que elegimos una posición se ejecuta el cálculo, aunque ya se hubiese hecho antes para la misma posición.

- **Con función memoize:** si una posición ya la habíamos ejecutado, entonces se almacena en la memoria caché su valor y las siguientes veces en que introduzcamos esa misma posición devolverá el valor al instante sin necesidad de volver a calcularlo.
