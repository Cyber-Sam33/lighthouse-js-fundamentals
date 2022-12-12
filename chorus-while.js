// const chorus = "Let's dance!";
// let repeat = 0;
// while (repeat < 10) {
//   console.log(chorus);
//   repeat++;
// }
// console.log("Until the sun comes up!");


//adding a 'change key' line during the sixth iteration (starts at 0, remember)
//still also executes 'chorus' and increments 'repeat' by 1
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");