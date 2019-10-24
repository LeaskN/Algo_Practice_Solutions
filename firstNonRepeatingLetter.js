function firstNonRepeatingLetter (string){
    let lowStr = string.toLowerCase();
    for (let i = 0; i < lowStr.length; i++) {
        const theLetter = lowStr[i];
        let wordNoLetter = lowStr.slice(0, i) + lowStr.slice(i+1, lowStr.length)
        if (wordNoLetter.indexOf(theLetter) === -1) {
            return string[i];
        }
    }
    return '';
}

console.log(first_non_repeating_letter('a'));
console.log(first_non_repeating_letter('stress'));
console.log(first_non_repeating_letter('moonmen'));
console.log(first_non_repeating_letter('moOnmen'));