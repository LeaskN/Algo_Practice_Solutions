// Remove duplicate characters from a string

var str = 'remove duplicate characters ';
  // 'removd...
function removeDuplicates(str){
  let store = {};
  let nonDupe = '';
  // iterate over the string 
  for(let i = 0; i < str.length; i++){
    let char = str[i];
    if(store[char] === undefined){
  // if they dont exist in storage put them in final string
      nonDupe += char;
  // store existing characters
      store[char] = true;
    }
  }
  return nonDupe;
}

// console.log(removeDuplicates('remove duplicate characters '))





