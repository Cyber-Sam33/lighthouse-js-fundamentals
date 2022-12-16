function range(start, end, step){
  array = [];
  if (start < end && step > 0){
array.push(start);
let i = 0;
for (i = start + step; i <= end; i += step){
  array.push(i);
}
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));