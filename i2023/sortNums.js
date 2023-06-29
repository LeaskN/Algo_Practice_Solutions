/*

Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

Example 1:
Input: [3, 3, 2, 1, 3, 2, 1]
Output: [1, 1, 2, 2, 3, 3, 3]

*/
function merge(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
        // console.log(left, right)
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
        // console.log(sortedArr)
    }
    return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
    console.log(arr)
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}
console.log(mergeSort([3, 5, 8, 5, 99, 1]));
// console.log(mergeSort([3, 3, 2, 1, 3, 2, 1]));