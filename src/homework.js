(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];

  let result = numbers.map(function(num) {
    return num * 5;
});
console.log(result); 
  
  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* se uso la funcion Map  que sirve para crear un nuevo array con los resultados del array original*/


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

 

  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];


  let sortedNames = names.sort();
  
  console.log(sortedNames);  

  /* sort() está ordenando alfabéticamente los nombres en el array names*/

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];
  

  let uniqueData = [...new Set(data)];
  
  console.log(uniqueData);  
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

let letterCount = {};

for(let letter of largeWord) {
    if(letterCount[letter]) {
        letterCount[letter]++;
    } else {
        letterCount[letter] = 1;
    }
}

console.log(letterCount);

  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */

})();
