function scramble(str1, str2) {
  let string1 = str1;
  let arrStr2 = str2.split('');
  if (str1.length < str2.length) {
    return false;
  }
  for (let i = 0; i < arrStr2.length; i++) {
    if (string1.indexOf(arrStr2[i])> -1) {
      string1 = (string1.slice(0, string1.indexOf(arrStr2[i]))+string1.slice(string1.indexOf(arrStr2[i])+1, string1.indexOf(arrStr2[i]).length));
    } else {
      return false;
    }
    
  }
  if (string1.length >= 0) {
    return true
  }
  return false;
}

//needs optimization

console.log(scramble('rkqodlw','world'),true);
console.log(scramble('cedewaraaossoqqyt','codewars'),true);
console.log(scramble('katas','steak'),false);
console.log(scramble('scriptjava','javascript'),true);
console.log(scramble('scriptingjava','javascript'),true);
console.log(scramble('scriptsjava','javascripts'),true);
console.log(scramble('aabbcamaomsccdd','commas'),true);
console.log(scramble('scriptjavx','javascript'),false);