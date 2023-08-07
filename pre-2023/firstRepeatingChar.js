function firstRepeatingChar (str) {
    let dict = {};
    
    for(let i in str){
        if(dict[str[i]]) return str[i];
        dict[str[i]] = str[i];
    }
    return null;
}

console.log(firstRepeatingChar('ABCA'));
console.log(firstRepeatingChar('BCABA'));
console.log(firstRepeatingChar('ABC'));
console.log(firstRepeatingChar('DBCABA'));
