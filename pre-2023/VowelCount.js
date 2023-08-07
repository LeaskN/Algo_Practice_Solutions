function getCount(str) {
    var vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(i = 0; i < str.length; i++){
      if(vowels.indexOf(str[i]) > -1){
        vowelsCount++;
      }
    }
    return vowelsCount;
}