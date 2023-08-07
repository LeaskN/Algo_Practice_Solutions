/*
Given a sorted bit array (values of either 0 or 1), determine the number of 1’s in the array.

Perform this in O(log(N)) time complexity.

Input: [0,0,0,1,1,1,1,1,1,1,1]

Output: 8
*/

function numberOfOnes(arr){
    let start = 0;
    let end = arr.length - 1;
    let mid;
    
    while (start <= end){
      mid = Math.floor((start + end) / 2);
      let val = arr[mid];
  
      if (val === 1){
        end = mid - 1;
      } else {
        start = mid + 1
      }
    } 
    
    return arr[mid] === 0 ? len - (mid + 1) : len - mid;
}


console.log(numberOfOnes([0,0,0,1,1,1,1,1,1,1,1]))
console.log(numberOfOnes([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]))
console.log(numberOfOnes([0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]))
console.log(numberOfOnes([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]))