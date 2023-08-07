/*
    Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if the target is not found.

    Example:
    Input: A = [1,3,3,5,7,8,9,9,9,15], target = 9
    Output: [6,8]

    Input: A = [100, 150, 150, 153], target = 150
    Output: [1,2]

    Input: A = [1,2,3,4,5,6,10], target = 9
    Output: [-1, -1]
*/

// linear option which exits immediately if the target is smaller than an integer in the sorted array
function firstLastTarget(nums, target){
    let targetStart = -1;
    let targetEnd = -1;

    for(let i = 0; i < nums.length; i++){
        let current = nums[i];
        if(targetStart === -1 && current === target){
            targetStart = i;
        } else if(targetStart !== -1 && current === target){
            targetEnd = i;
        }
        if(target < current){
            break;
        }
    }

    return [targetStart, targetEnd];
}

console.log(firstLastTarget([1,3,3,5,7,8,9,9,9,15], 9));
console.log(firstLastTarget([100, 150, 150, 153], 150));
console.log(firstLastTarget([1,2,3,4,5,6,10], 9));
console.log(firstLastTarget([1,2,3,4,5,6,10,11,12], 9));
