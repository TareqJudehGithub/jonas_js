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

/* *******************************************************************/

console.log("\n\n");
// Promises
fetch("https://jsonplaceholder.typicode.com/users") // returns a promise
  .then((res) => res.json()) // returns another promise
  .then((data) => console.log(data)); // returns all data

console.log("synchronous");
console.log("\n\n");

// async await
async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(res);
}
fetchData();
