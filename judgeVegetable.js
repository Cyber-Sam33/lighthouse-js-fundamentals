const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

function judgeVegetable(vegetables, metric){
let winningVeg = vegetables[0];
for (let i = 0; i < vegetables.length; i++){
  if (vegetables[i][metric] > winningVeg[metric]){
    winningVeg = vegetables[i];
    } 
  }
  return winningVeg.submitter;
}

console.log(judgeVegetable(vegetables, metric));

console.log(vegetables[0].plumpness);
console.log(vegetables[0].plumpness > vegetables[1].plumpness);

  // for (let row = 0; row < vegetables.length; row++){
  //   for (let col = 0; col < vegetables[row].length; col++){
  //     if (vegetables.redness[row][col] > red){
  //       red = vegetables.redness[row][col];
  //       console.log(red);
  //     }else if(vegetables.plumpness[row][col] > plump){
  //         plump = vegetables.plumpness[row][col];
  //         console.log(plump);
  //     }
  //   }
  // }



