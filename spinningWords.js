function spinWords(phrase){
    //create an array of words
    let words = phrase.split(' ');
    let backWord = [];
    let finalArr = [];
    //iterate through the array of words
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        //look for words 5 letters or longer
        if (word.length >= 5){
            backWord = [];
            //iterate backwards over the letters and create a new word
            for (let i = word.length -1 ; i >= 0; i--) {                
                const letter = word[i];
                backWord.push(letter);
            }
            finalArr.push(backWord);
        } else {
            finalArr.push(word)
        }
        finalArr.push(' ')
    }
    let finalStr = finalArr.join('').split(',').join('')
    return finalStr.substring(0, finalStr.length - 1)
}

console.log(spinWords("Welcome")); // "emocleW");
console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw");
console.log(spinWords("This is a test")); // "This is a test");
console.log(spinWords("This is another test")); // "This is rehtona test");
console.log(spinWords("You are almost to the last test")); // "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more")); // "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one")); // "ylsuoireS this is the last one");