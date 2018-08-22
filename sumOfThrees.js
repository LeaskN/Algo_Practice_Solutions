// function sumOfThrees(n) {
//   let num = 0;
//   let finalString = ""
//   for (i = 0; i < n; i++) {
//     num += 3**i
//     finalString = `3^${i}+` + finalString
//     if (num === n) {
//       return finalString.slice(0, -1)
//     }
    
//   }
//   return finalString;
// }

function sumOfThrees(n) {
  
  let currentNumber = n;
  let powersOfThree = [];
  for (let i = 20; i >= 0; i--) {
    if(3**i <= currentNumber){
      powersOfThree.push(`3^${i}`);
      currentNumber = currentNumber - (3**i);
    }
  }
  if (currentNumber >= 1) {
    return "Impossible";
  }
  return powersOfThree.join('+');
}



console.log(sumOfThrees(1), "3^0");
console.log(sumOfThrees(3), "3^1");
console.log(sumOfThrees(4),"3^1+3^0");
console.log(sumOfThrees(2),"Impossible");
console.log(sumOfThrees(84),"3^4+3^1");
console.log(sumOfThrees(14181),"Impossible");