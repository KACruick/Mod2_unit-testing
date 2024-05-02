// In the file funcs.js, you will find three skeleton functions. 
// Your job is to complete those functions according to the specs 
// found in test/funcs-spec.js.

function isFive(num) {
  // should return true if the num is 5 otherwise false
  if (num === 5) {
    return true;
  }
  else {
    return false
  }
}

function isOdd(number) {
  if (number % 2 === 0) {
    return false;
  }
  if (number % 2 !== 0) {
    return true;
  }
  // if (typeof number !== "number"){ //isNaN(number)
  //   throw new Error("input must be a number")
  // }
  if (isNaN(number)){
    console.log("my error")
    throw TypeError ("input must Be a number")
  }
}


const string = "i am a string";
const object = { i: "am", an: "object" };
const array = ["i", "am", "an", "array"];

console.log(isOdd(string)); // 
console.log(isOdd(object)); // 
console.log(isOdd(array)); // 



function myRange(min, max, step = 1) {
  let array = [];
  if (step == undefined) {
    for (let i = min; i <= max; i++) {
      array.push(i);
    }
  }
  if (step) {
    for (let i = min; i <= max; i+= step) {
      array.push(i);
    }
  }
  return array;
}


module.exports = { isFive, isOdd, myRange };
