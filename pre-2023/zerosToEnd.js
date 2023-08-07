var moveZeros = function (arr) {
  let newArr = [];
  for (let i = arr.length-1; i >= 0; i--) {
    const element = arr[i];
    if (element === 0 || element === '0') {
      newArr.push(element)
    } else {
      newArr.unshift(element)
    }
  }
  return newArr;
}

console.log(moveZeros([1,2,false,0,1,0,1,0,3,0,1]));
console.log(moveZeros([0,1,2,0,3,0,1,2,3,0,1,0,1,0,2,4,0]));