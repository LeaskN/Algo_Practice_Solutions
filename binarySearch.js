/*
Given a sorted array of unique integers, and a target value determine the index of a matching value within the array. If there is not match, return -1.

Input: [1,3,4,5,6,7,8,10,11,13,15,17,20,22], 17

Output: 11
*/

function binarySearch(arr, target){
    for(let i = arr.length/2; i < arr.length; i++){
        if(target === arr[i]){
            return i;
        } else if (arr[i] > target){
            binarySearch(arr.slice(arr[i]+1))
        } else if (arr[i] < target){
            binarySearch(arr.slice(0,arr[i]))
        }
    }
    return -1
}


console.log(binarySearch([1,3,4,5,6,7,8,10,11,13,15,17,20,22], 17))