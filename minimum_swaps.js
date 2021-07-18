// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.

// Example


// Perform the following steps:

// i   arr                         swap (indices)
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]


function quickSort(arr){

    let right = mostOutOfPlace(arr);
    let tempArr = arr.map(n => n !== right ? n : 0);
    let skip = arr.indexOf(right)

    let left = mostOutOfPlace(tempArr, skip);

    console.log(left, right)
    return ;
}

function mostOutOfPlace(arr, skip){
    let lrgDiff = arr[0] - 1;
    let second = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(i === skip){
            continue; 
        }
        let current = arr[i];
        let diff = current - i - 1;
        console.log(diff)
        if(diff > lrgDiff){
            console.log('hit', i, diff)
            lrgDiff = diff
            second = current;
        }
        arr[i] = second;
    }
    return second;
}

console.log(quickSort([ 7, 1, 3, 2, 4, 5, 6]))