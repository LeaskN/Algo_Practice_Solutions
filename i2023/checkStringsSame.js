/*
    Given two strings check if they have exactly the same characters
    The characters do not have to be in the same place
*/
function stringCheck(str1, str2){
    if(str1.length != str2.length)return false;

    let map = {};
    let finish = false;
    
    for(let i = 0; i < str1.length; i++){
        map[str1[i]] ? map[str1[i]]++ : map[str1[i]] = 1; 
    }
    
    for(let i = 0; i < str2.length; i++){
        map[str2[i]] ? map[str2[i]]-- : finish = true; 
        if(finish) return false;
    }

    return true;
}

console.log(stringCheck('thisisastring', 'astringthisis'));
console.log(stringCheck('thisisastring', 'astringthisisa'));
console.log(stringCheck('thisisastrings', 'astringthisis'));
console.log(stringCheck('abcde', 'abcx'));