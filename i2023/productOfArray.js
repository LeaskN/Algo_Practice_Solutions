/*
given an array create a new array which is the product of all 
values in the prior array except the current value
Ex: [1,2,3,4] => [24, 12, 8, 6]

values can be zero and can be negative
*/

function productOfArray(arr){
    // find the product of all values in the array (the reduce part of the fxn) - handle for zero
    // iterate over the original array and divide by the current number - handle for zero
    return arr.map(c => c == 0 ? 0 : (arr.reduce((a,c) => a*(c == 0 ? 1 : c), 1)/c));
}

console.log(productOfArray([1,2,3,4]));
console.log(productOfArray([-1,2,3,4]));
console.log(productOfArray([0,2,3,4]));