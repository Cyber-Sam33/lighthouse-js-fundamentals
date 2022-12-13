const isEven = function(num){
  return num % 2 === 0;
}

tenIsEven = isEven(10);
console.log(tenIsEven);

elevenIsEven = isEven(11);
console.log(elevenIsEven);


//or use return values directly without saving to a variable

console.log(isEven(10));
console.log(isEven(11));