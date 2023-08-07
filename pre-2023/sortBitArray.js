/*
    Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either 0 or 1).

    See if you can solve this in O(N) time and O(1) auxiliary space.

    Try to solve this using a frequency count rather than using multiple pointers, or using a comparison sort function.

    Input : [0, 1, 1, 0, 1, 1, 1, 0]

    Output : [0, 0, 0, 1, 1, 1, 1, 1]
*/

function sort_bit_array(arr){
    let count = {0:0, 1:0}    

    for(let i = 0; i < arr.length; i++){
        count[arr[i]]++;
    }

    for(let i = 0; i < arr.length; i++){
        if(i < count[0]){
            arr[i] = 0;
        }else if(i >= count[0]){
            arr[i] = 1;
        }
    }

    return arr;
}


console.log(sort_bit_array([0, 1, 1, 0, 1, 1, 1, 0]))