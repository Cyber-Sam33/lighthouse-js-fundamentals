function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(triangleLength){
  let triangle = "";
  
  for (let i = 1; i <= triangleLength; i++){
    triangle = triangle + makeLine(i);
  }
  return triangle;
}

console.log(buildTriangle(30));