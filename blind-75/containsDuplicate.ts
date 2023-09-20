// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// loop through
  // If a number doesnt exist in hash add it to a hash
  // if it does exist in hash return true

// Otherwise return false
function containsDupe(arr){
  if(!Array.isArray(arr)) return null
  let hash = {};
  for(let i = 0; i < arr.length; i++){
    if(hash[arr[i]]){
      return true
    }
    hash[arr[i]] = true;
  }

  return false;
}
