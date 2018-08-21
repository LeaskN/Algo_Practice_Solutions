function encrypt(text, n) {
  if (!text || n <= 0 || text.length <= 0) {
      return text;
  }

  const bothStrings = function(str) {
      let output = "";
      let temp = "";
      for (let i = 0; i < str.length; i++) {
          if (i % 2) {
              output += text[i];
          } else {
              temp += text[i];
          }
      }
      return output + temp;
  };
  for (let i = 0; i < n; i++) {
      text = bothStrings(text);
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0 || encryptedText.length <= 0) {
      return encryptedText;
  }
  const decryptString = function(str) {
      let odds = str.slice(0,(str.length/2));
      let evens = str.slice((str.length/2));
      let output = "";
      for (let i = 0; i < str.length; i++) {
          if (i % 2) {
              output += odds[0];
              odds = odds.slice(1);
          } else {
              output += evens[0];
              evens = evens.slice(1);
          }
      }
      return output;
  };
  for (let i = 0; i < n; i++) {
      encryptedText = decryptString(encryptedText);
  }
  return encryptedText;
}

console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
console.log(encrypt("This is a test!", 3), " Tah itse sits!");
console.log(encrypt("This is a test!", 4), "This is a test!");
console.log(encrypt("This is a test!", -1), "This is a test!");
console.log(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");