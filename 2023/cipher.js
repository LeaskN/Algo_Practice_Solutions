/* 

Without utilizing character codes solve the following; 
Julius Caesar protected his confidential information by encrypting it using a cipher. 
Caesar's cipher shifts each letter by a number of letters. 
If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

*/
function caesarCipher(s, k) {
  // Write your code here
  console.log(s, k)
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for(let i = 0; i < Math.ceil(k/20); i++){
      alphabet += alphabet;
  }
  let newStr = '';
  for(let i = 0; i < s.length; i++){
      if(alphabet.indexOf(s[i].toLowerCase()) === -1){
          newStr += s[i]
      } else if(alphabet.indexOf(s[i]) !== -1) {
          newStr += alphabet[alphabet.indexOf(s[i].toLowerCase()) + k]
      } else {
          newStr += alphabet[alphabet.indexOf(s[i].toLowerCase()) + k].toUpperCase();
      }
  }
  return newStr;
}