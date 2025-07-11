/*  Asynchronous JS means, a sentence or a line of code will only
      be executed after a task in the background finishes execution.

    Asynchronous is non-blocking. 
    Execution doesn't wait for an asynchronous task to finish its work.


 */

console.log("Line 1");

setTimeout(() => {
	console.log("Line 2");
}, 3000);
console.log("Line 3");
