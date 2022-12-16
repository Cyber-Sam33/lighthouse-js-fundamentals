
const howManyHundreds = function(num){
   let remainder = 0;
   remainder = num % 100;
   return (num - remainder) / 100; 
}

console.log(howManyHundreds(0));