/*
Given an array of peoples birthdays in the following format 01/01/2001
Find if two people have the same birthdays
*/

function sameBdays(arr){
  let record = {};

  for(let i = 0; i < arr.length; i++){
    if(record[arr[i]] != undefined) return `Person ${i} and ${record[arr[i]]} have the same birthday on ${arr[i]}`;
    record[arr[i]] = i;
  }
  return 'No matching birthdays in array';
}


console.log(sameBdays(['01/01/2001', '03/01/2001']));
console.log(sameBdays(['01/01/2001', '01/01/2001']));
console.log(sameBdays([]));