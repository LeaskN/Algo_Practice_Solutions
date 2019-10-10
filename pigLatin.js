function pigIt(str){
    let words = str.split(' ');
    let pigArr = [];
    words.forEach(word => { 
        if(!word.indexOf('?') || !word.indexOf('!') || !word.indexOf('*') || !word.indexOf('.') || !word.indexOf(',')){
            pigArr.push(word)
        } else {
            let firstLetter = word.slice(0,1);
            let remainingWord = word.slice(1);
            pigArr.push(`${remainingWord + firstLetter}ay`)
        }
    });
    return pigArr.join(' ');
}


console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !
console.log(pigIt('Quis custodiet ipsos custodes ?'))//uisQay ustodietcay psosiay ustodescay ?