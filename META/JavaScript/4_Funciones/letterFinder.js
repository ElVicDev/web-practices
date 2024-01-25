// Practicing with functions

/*  Code a function which will be able to take a word
    and locate the position of a chosen letter in that given word.
*/

function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] == match) {
      //check if the current characater, word[i], is equal to the match
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

letterFinder("test", "t");
