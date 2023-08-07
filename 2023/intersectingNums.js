/*
Given two arrays, write a function to compute their intersection - the intersection means the numbers that are in both arrays.

Example 1:
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2]
Example 2:
    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [9,4]
Note:
    Each element in the result must be unique.
    The result can be in any order.
*/

// function intersectingNums(nums1, nums2){
//     // create an object to hold if values exist
//     let set = {};
//     let finalArr = [];
//     // loop over nums1 and add numbers as an object to the set
//     for(let i = 0; i < nums1.length; i++){
//         let n = nums1[i];
//         set[n] = {};
//         set[n].nums1 = true;
//     }
//     // loop over nums2 and if those nums exist then add them to the set
//     // Cant immediately add to finalArr because we'd end up with duplicates
//     for(let i = 0; i < nums2.length; i++){
//         let n = nums2[i];
//         if(set[n]?.nums1){
//             set[n].nums2 = true;    
//         }
//     }
//     // Look for values that have nums1 and nums2 === true
//     for(let n in set){
//         if(set[n].nums1 && set[n].nums2){
//             finalArr.push(n)
//         }
//     }
//     return finalArr;
// }

function intersectingNums(nums1, nums2) {
    // Convert the arrays to sets - which removes duplicates
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    // Find the intersection by filtering elements present in both sets
    const finalArr = [...set1].filter((n) => set2.has(n));

    return finalArr;
}

console.log(intersectingNums([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(intersectingNums([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [9, 4]


console.log(intersectingNums([1,2,2,1], [2, 2])) //[2]
console.log(intersectingNums([4,9,5], [9,4,9,8,4])) //[9,4]