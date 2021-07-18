/*
Given an array of integers, and a target value determine if there are two integers that add to the sum.

Input: [4,2,6,5,7,9,10], 13

Output: true
*/

// Options:
// A nested loop where we look at index 0 and then compare it to each other number and see if those two add up to the target value. Then repeat with index 1,2,3, etc... O(n^2)

// Look at each number and ask, does it's compliment exist. 
    // Can be done with .indexOf. * indexOf is O(n) therefore it would still be O(n^2)

//Diagram
    // i
    //   j->
    //[4,2,6,5,7,9,10]

function twoSum(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if(target - arr[i] === arr[j]) return true;
        }
    }
    return false;
}

//Diagram
    //hash = {4,2,6}
    //       i
    //[4,2,6,5,7,9,10]

// We can make this faster by creating something with constant lookup time (an object) and checking if the compliment exists
function twoSum(arr, target){
    let prev = {};
    for(let i = 0; i < arr.length; i++){
        if(prev[target-arr[i]])return true;
        prev[arr[i]] = true;
    }
    return false;
}

console.log(twoSum([4,2,6,5,7,9,10], 13));
