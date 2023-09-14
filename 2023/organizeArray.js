// Restructure an array to return an array with numbers first and then alphabets

let array = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1, 6]; // Output is [2, 4, 3, 5, 1,6, "b", "d", "a", "c", "e", "f"];

function organizer (unorgArr){
  if(!Array.isArray(unorgArr))return [];
// loop through 
  let nums = [];
  let lets = [];
// make an array of numbers
// and a second array of characters
  for(let i = 0; i < unorgArr.length; i++){
    if(typeof unorgArr[i] === 'number'){
      nums.push(unorgArr[i]);
    }
    if(typeof unorgArr[i] === 'string'){
      lets.push(unorgArr[i]);
    }
  }
  return [...nums, ...lets];
}
// then put those together

console.log(organizer(array))