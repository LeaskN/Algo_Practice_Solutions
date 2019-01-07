function getMiddle(s) {
  if(s.length % 2 === 0){
    let letterA = s[(s.length/2) - 1];
    let letterB = s[s.length/2];
    return letterA + letterB;
  } else {
    let letter = s[math.ceil(s.length/2)];
    return letter;
  }
}