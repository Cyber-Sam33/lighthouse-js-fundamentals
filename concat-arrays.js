function concat (arr1, arr2){
singleArr = [];
  for (i = 0; i < arr1.length; i++){
singleArr.push(arr1[i]);
}

for (i = 0; i < arr2.length; i++){
  singleArr.push(arr2[i]);
  }
  return singleArr;
}



console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));






