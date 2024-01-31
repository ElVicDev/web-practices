//  *   Programación defensiva

//  DEFENSIVE PROGRAMMING
/*  La programación defensiva consiste en asumir que todos los argumentos 
    que recibirá una función son del tipo incorrecto, del valor incorrecto 
    o de ambos.
*/

function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2;
  var condition2 = typeof match == "string" && match.length == 1;
  if (condition1 && condition2) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        // if the current character at position i in the word is equal to the match
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    console.log("Please pass correct arguments to the function.");
  }
}

letterFinder("cinco", "5");
letterFinder([], []);
letterFinder("cat", "c");
