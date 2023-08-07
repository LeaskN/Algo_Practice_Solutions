function howSum(t, nums, memo={}){
  if(t in memo)return memo[t];
  if(t === 0) return [];
  if(t < 0) return null;

  for(let num of nums){
    const remainder = t-num;
    let result = howSum(remainder, nums, memo);
    if(result !== null){
      memo[t] = [...result, num];
      return memo[t];
    }
  }

  memo[t] = null;
  return null;
}


console.log(howSum(7, [2,3])); // 3,2,2
console.log(howSum(7, [5,3,4,7])); // 4,3 
console.log(howSum(7, [2,4])); // null
console.log(howSum(8, [2,3,5])); // 2,2,2,2
console.log(howSum(300, [7,14])); // null