function disemvowel(str) {
  return str.split(/a|e|i|o|u|A|I|E|O|U/).join('');
};
console.log(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")