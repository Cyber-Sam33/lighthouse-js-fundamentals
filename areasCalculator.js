// rectangle: length × width
// triangle: base × height / 2
// circle: π × radius2

// by setting the '0 if' condition, negative inputs will return 'undefined'
const calculateRectangleArea = function(length, width){
  if (length && width > 0){ 
  return length * width;
  }
}

const calculateTriangleArea = function(base, height){
  if (base && height > 0){
  return (base * height) / 2;
  }
}

const calculateCircleArea = function(radius){
  if (radius > 0){
  return 3.14159 * (Math.pow(radius, 2));
  }
}

