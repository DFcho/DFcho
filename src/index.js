const numbers = [1, 2, 3, 4, 5, 6, 7];
const three = [];
function biggerThanThree(numbers) {
  if (numbers > 3) {
    for (i = 0; i > numbers; i++) {}
  }
}
console.log(biggerThanThree(numbers)); //[4,5,6,7]
