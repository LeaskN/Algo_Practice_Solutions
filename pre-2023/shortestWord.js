function findShort(s){
  let words = s.split(' ');
  let shortestWordLength = words[0].length
  for(let i=1; i<words.length; i++){
    if (words[i].length<shortestWordLength){
      shortestWordLength = words[i].length;
    }
  }
  return shortestWordLength;
}

console.log(findShort('this is a string in which you need to find the shortest word'));
console.log(findShort('all strings will only be strings and not take in arrays or numbers'));
console.log(findShort('writing phrases containing words longer than 4 is hard'));