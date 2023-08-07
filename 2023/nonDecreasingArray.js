/*
You are given an array of integers in an arbitrary order. Return whether or not it is possible to make the array non-decreasing by modifying at most 1 element to any value.
We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

Example:

[13, 4, 7] should return true, since we can modify 13 to any value 4 or less, to make it non-decreasing.
[13, 4, 1] however, should return false, since there is no way to modify just one element to make the array non-decreasing.

Solutions
brute force = o(n)
loop through, keep track of how many changes we need to make
if there are 2 changes required fail
otherwise finish
then true
*/

const nonDecreasingArray = function(arr){
    let err = 0;
    for (let i = 1; i < arr.length; i++){
        console.log('err1', err)
        if (arr[i] < arr[i-1]){
            if (err++ || (i > 1 && i < arr.length - 1 && arr[i-2] > arr[i] && arr[i+1] < arr[i-1])){
                return false;
            }
        }
    }
    return true;
}

// const nonDecreasingArray = function(arr){
//     let count = 0;
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < arr[i-1]){
//             arr[i-1] = arr[i];
//             count++;
//             if(arr[i-2] !== undefined && arr[i-2] >= arr[i-1]){
//                 return false;
//             }
//         }
//         if(count >= 2) return false;
//     }
//     return true;
// }

console.log(nonDecreasingArray([13, 4, 7])); // true
console.log(nonDecreasingArray([13, 4, 1])); // false
console.log(nonDecreasingArray([-1,4,2,3])); // true
console.log(nonDecreasingArray([5,7,1,8])); // true
console.log(nonDecreasingArray([5,7,1,8,-1])); // true
console.log(nonDecreasingArray([5,7,1,8,10,-3])); // true