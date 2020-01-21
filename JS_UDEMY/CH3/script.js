/* CHALLENGE 3 - Let

Change code to match output.
*/

"use strict";
//with let i global i will not change with the loop block
var i = 10;

for (let i = 0; i < 5; i++) {
  // some stuff
  console.log(i);
}

console.log(i);
// BEFORE: 5
// AFTER: 10
