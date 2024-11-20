// * ------------------------------
// * Template Literals No Multiline
// * ------------------------------

// ES5 Strings
let noMultiLine = "No mult-line strings in ES5";
console.log("Did you know? " + noMultiLine);

// * ---------------------------
// * Template Literals Multiline
// * ---------------------------

// ES6 Multi-line template literals
let multiLine = `
    Using ES6
    backticks,
    multi-line
    strings are
    possible!
`;
console.log(multiLine);

// * ----------------------------------------
// * Template Literals Variable Interpolation
// * ----------------------------------------

// ES6 variable interpolation
let first = `He said, "Don't you know ES6, it's got some great features!"`;
let second = `"Wouldn't you want to learn more?", he asked.`;
console.log(`${first} - and I got curious. ${second}`);
