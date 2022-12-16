function lastIndexOf(array, value){
  let locatedIndex = 0;
  let match = false;
for (let i = array.length - 1; i >= 0; i--){
  if (array[i] == value){
locatedIndex = i;
match = true;
break;
  }
}
  if (match){
  return locatedIndex;
  }else{
  return -1;
  }
}
  
  

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));

