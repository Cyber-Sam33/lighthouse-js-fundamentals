function loopyLighthouse(range, multiples, words){

for (let num = range[0]; num <= range[1]; num++){
    if (num % multiples[0] === 0 && num % multiples[1] === 0){
      console.log(words[0] + words[1]);
    }else if (num % multiples[0] === 0){
      console.log(words[0]);
    }else if (num % multiples[1] === 0){
      console.log(words[1]);
    }else{
      console.log(num);
    }
  
  }

}

loopyLighthouse([1, 1000], [21, 8], ['Katie', 'Sammi']);