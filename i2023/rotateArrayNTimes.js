/*
Example:
    arr = [1,2,3,4,5]
    n = 3
    step one = [5,1,2,3,4];
    step two = [4,5,1,2,3];
    step three = [3,4,5,1,2];
*/
function rotateArrayNTimes(arr, n){
    /*
    SOLUTION 1: 
    create a new array, with length = to old array
    iterate through old array and put numbers directly in the correct spot
    */
   
    // let final = new Array(arr.length);
    // for(let i = 0; i < arr.length; i++){
    //     if(arr.length > i+n){
    //         final[i+n] = arr[i];
    //     } else {
    //         final[(i+n)%arr.length] = arr[i]
    //     }
    // }
    // return final;

    // solution 2: grab the last X number of elements and put them at the front
    // remembering to account for when n > arr.length
    return [...arr.slice(arr.length - (n % arr.length)), ...arr.slice(0, arr.length - (n % arr.length))];
}


console.log(rotateArrayNTimes([1,2,3,4,5], 3)); // [ 3, 4, 5, 1, 2 ]
console.log(rotateArrayNTimes([1,2,3,4,5,6,7,8,9], 3)); // [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ]
console.log(rotateArrayNTimes([1,2,3,4,5], 10000000003)); // [ 3, 4, 5, 1, 2 ]
