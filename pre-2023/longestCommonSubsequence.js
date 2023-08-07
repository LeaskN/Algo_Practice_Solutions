function lngstCmmnSeq(s1, s2) {
    // We are going to take the string and cut it at the point of the matched letter (from the front) and repeat this process aka abcd -> bcd -> cd -> d
    let str1Changing = s1;
    let str2Changing = s2;
    // If the letter is found in the string we are going to push it to result
    let result1 = [];
    let result2 = [];
    // Change the strings to arrays
    
    for (let i = 0; i < s1.length; i++) {
        const letter = s1[i];
        // if string2changing has the letter push it to result1 and lop off the beginning of str2changing until that letter 
        if(str2Changing.indexOf(letter) > -1){
            result1.push(letter);
            str2Changing = str2Changing.slice((str2Changing.indexOf(letter)+1), str2Changing.length);
            //string.slice((string.indexOf('a')+1),string.length)
            //("132535365", "123456789")
        }

    }
    for (let i = 0; i < s2.length; i++) {
        const letter = s2[i];
        if(str1Changing.indexOf(letter) > -1){
            result2.push(letter);
            str1Changing = str1Changing.slice((str1Changing.indexOf(letter)+1), str1Changing.length);
            //"finaltest", "zzzfinallyzzz"
        }
        
    }
    let string1 = result1.toString().split(',').join('')
    let string2 = result2.toString().split(',').join('')

    if (s1.indexOf(s2) > -1) {
        return s2;
    // if s2 has s1 in it return s1
    } else if (s2.indexOf(s1) > -1){
        return s1;
    // if result1 is longer than s1 return result2
    } else if(result1.length > s1.length){
        return string2;
    // if result1 is longer or the same length as result2 return result1
    } else if(result1.length >= result2.length){           
        return string1;
    // otherwise return result2
    } else {
        return string2;
    }
}

console.log(lngstCmmnSeq("ABBA", "ABCABA"));//"ABBA"
console.log(lngstCmmnSeq("ABAZDC", "BACBAD"));//"ABAD"
console.log(lngstCmmnSeq("AGGTAB", "GXTXAYB"));//"GTAB"
console.log(lngstCmmnSeq("aaaa", "aa"));//"aa"
console.log(lngstCmmnSeq("", "..."));//""
console.log(lngstCmmnSeq("132535365", "123456789"));//"12356"
console.log(lngstCmmnSeq("finaltest", "zzzfinallyzzz"));//"final"