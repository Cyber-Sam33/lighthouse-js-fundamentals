// const isOdd = function(num){
//   let oddNum = num / 2;
//   if (oddNum !== 0){
//   return oddNum;
//   }
// }

// console.log(isOdd(3));

const isOdd = function(num){
  return num % 2 !== 0;
  }


console.log("3 is odd " + isOdd(3));
console.log("8 is odd " + isOdd(8));
