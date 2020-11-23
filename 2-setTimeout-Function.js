console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code

/* 1: 
 * Create a function below, usingSTO(). 
 * Your usingSTO() function should have no parameters.
 * Inside the function body, it should print a string to
 * the console. This can be any string you want (as long
 * as it’s not either “This is the first line of
 * synchronous code.” or “This is the last line of
 * synchronous code.”)
 */

// Write your code here:
function usingSTO(){
  console.log( "This is the first line of code in app.js.")
}




/* 2: 
 * Now, let’s invoke the setTimeout() function. 
 * Remember, setTimeout() has two parameters. 
 * Invoke setTimeout() with your usingSTO() function as
 * the first argument and a number between 0 and 3000 as
 * the second argument.
 */

// Write your code here:
setTimeout(usingSTO, 3000)


// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

let timeout = require('./2-setTimeout-Function.js')
module.exports = timeout;