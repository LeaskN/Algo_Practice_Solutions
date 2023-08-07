function canSum(targetSum, nums, memo = {}){
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    if(targetSum in memo) return memo[targetSum]


    for(let num of nums){
        targetSum = targetSum - num;
        if(canSum(targetSum, nums, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
}

console.log(canSum(7,[2,3]));
console.log(canSum(7,[5,3,4,7]));
console.log(canSum(7,[2,4]));
console.log(canSum(8,[2,3,5]));
console.log(canSum(600,[7,14]));