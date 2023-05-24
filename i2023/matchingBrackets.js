/*
    Given a string of brackets, return if the set is functional or not
    For example:
        {[(     => false
        {[()]}  => true
*/

// solution 1, this is dependent upon knowing that brackets are always 1 of 3 options
function matchingBrackets(bracketString){
    let dict = {
        '(': 0,
        '{': 0,
        '[': 0,
        ']': 0,
        '}': 0,
        ')': 0
    };

    for(let i = 0; i < bracketString.length; i++){
        dict[bracketString[i]]++;
    }
    if(dict['(']-dict[')'] || dict['{']-dict['}'] || dict['[']-dict[']']) {
        return false;
    }
    return true;
}

console.log(matchingBrackets('{}'));
console.log(matchingBrackets('[]'));
console.log(matchingBrackets('('));
console.log(matchingBrackets('{'));
console.log(matchingBrackets('['));
console.log(matchingBrackets('[(({({})}))]'));
console.log(matchingBrackets('[(({({})}))]]'));