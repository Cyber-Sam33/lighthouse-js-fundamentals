const ageCalculator = function(name, yearOfBirth, currentYear){
const currentAge = currentYear - yearOfBirth;
return (name + " is " + currentAge + " years old.");
}

console.log(ageCalculator('Katie', 1990, 2022));
// ageCalculator('Suzie', 1983, 2015);