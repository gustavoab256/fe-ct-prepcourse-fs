/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arrayPadre = [];
   for (var propiedad in objeto){
      let array = [propiedad, objeto[propiedad]]
      arrayPadre.push(array);
   };
   return arrayPadre
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var contadorLetras= {};
      for(let i = 0; i < string.length; i++) {
         var letra = string[i];
         if(contadorLetras.hasOwnProperty(letra)){
            contadorLetras[letra]++;
         } else {
            contadorLetras[letra] = 1;
         } 
      }
      function ordenador(objeto){
         var ordenado= {};
         var propiedades = Object.keys(objeto).sort();
         propiedades.forEach(function(propiedad){
            ordenado[propiedad] = objeto[propiedad]
         });
         return ordenado;
      }
      return ordenador(contadorLetras);
   }



function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let letrasMAyusculas= '';
   let letrasMinusculas= '';
   for (let letra of string) {
      if (letra === letra.toUpperCase()){
         letrasMAyusculas = letrasMAyusculas + letra
      } else{
         letrasMinusculas = letrasMinusculas + letra
      }
   }
   return letrasMAyusculas + letrasMinusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var stringReversado = '';
   function invertir(string) {
     return string.split('').reverse().join('');
   }
   var arregloDePalabras = frase.split(' ');
   var arregloInvertidas = arregloDePalabras.map(function (palabra) {
     //['ehT', 'yrneH', 'egnellahC', 'si', '!esolc']
     return invertir(palabra);
   });
   return arregloInvertidas.join(' ');
}
//console.log(asAmirror("The Henry Challenge is close!"));

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let stringDelNum = numero.toString();
   let stringNumInvertido = stringDelNum.split('').reverse().join('');
   if (stringDelNum === stringNumInvertido){
      return "Es capicua";
   } else {
      return "No es capicua";
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let stringNuevo = '';
   for (let i = 0; i < string.length; i++) {
      if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c'){;
      stringNuevo += string[i];
      }
   }
   return stringNuevo;
  // var stringResultado = '';
  // for (var i = 0; i < string.length; i++) {
  //   if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c') {
  //     stringResultado += string[i];
  //     //stringResultado = stringResultado + string[i];
   //  }
   //}
   //return stringResultado;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   for (var i = 0; i < arrayOfStrings.length - 1; i++) {
      for (var j =  i + 1; j < arrayOfStrings.length; j++) {
         if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
            var aux = arrayOfStrings[i];
            arrayOfStrings[i] = arrayOfStrings[j];
            arrayOfStrings[j] = aux;
         }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interseccion = [];
   for (var num1 of array1) {
      for (var num2 of array2){
         if (num1 === num2) {
            interseccion.push(num1);
         }
      }
   }
   return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
