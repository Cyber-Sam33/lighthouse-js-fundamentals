//anonymous function 'quiz 20 - laugh' challenge

let noise = "";

let laugh = function(num){
  for (let i = 0; i < num; i++){
    noise += "ha";
  }
  noise = noise + "!";
  return noise;
}

console.log(laugh(10));