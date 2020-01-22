/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/

"use strict";

var nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12
};

// Object.prototype.new=500
//should not do this
function sumObjectValues(object){
  var total=0;
for (let k in object){
  // console.log(object[k]);
  if (typeof object[k]==="number"&&object.hasOwnProperty(k))total+=object[k]
}
return total
}

console.log(sumObjectValues(nums));
//42
