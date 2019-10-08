function alphabetPosition(text) {
    let finalArray = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let position = 0; position < text.length; position++) {
        const letter = text[position];
        if((alphabet.indexOf(letter.toLowerCase())+1) > 0){
            finalArray.push(alphabet.indexOf(letter.toLowerCase())+1)
        }         
    }
    return finalArray.join(' ');
}

console.log(alphabetPosition('aaa iasidb ibasd'));
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
