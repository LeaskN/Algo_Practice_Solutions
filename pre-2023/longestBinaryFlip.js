let arr = [0,1,1,1,0,1,0,1,0,0];
let flips = 3;
let arr2 = [1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1];
let flips2 = 2;
let arr3 = [0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1];
let flips3 = 2;

function longestBinaryFlip(arr, flips){
    let max = 0;
    let left = 0;
    let right = 0;
    let count = flips;

    while(left < arr.length){
        console.log(left, right, max, count)
        if(count < 0 && left < right){
            left++;
        }
        
        if(count >= 0){
            right++;
        }

        if(arr[right] === 0){
            count--;
        }
        
        if(right-left - 1 > max){
            max = right - left - 1;
        }
    }
    return max;
}


// console.log('test1 => ', longestBinaryFlip(arr, flips))
console.log('test2 => ', longestBinaryFlip(arr2, flips2))
// console.log('test3 => ', longestBinaryFlip(arr3, flips3))