function concatStrings(strA, strB) {
  return strA + strB;
}

console.log(concatStrings("abc", "def")); // "abcdef"
console.log(concatStrings("world", "wide")); // "worldwide"
console.log(concatStrings("123", "456")); // "123456"
console.log(concatStrings(1, 2)); // 3 <--- OOPS! LO ESTA SUMANDO

// * COMENTARIOS
//  Son importantes para saber que resultado esperamos, pero tiene límites:
/*  Espero que concatStrings devuelva "abcdef" cuando le paso "abc" 
    como primer argumento y "def" como segundo argumento
    concatStrings("abc", "def") */

//* ----------------------------------------
//      JAVASCRIPT TESTING FRAMEWORKS
//*                 JEST
//* ----------------------------------------

// Ejemplo usuando "expect" y ".toBe"

// expect(concatStrings("abc", "def")).toBe("abcdef");
