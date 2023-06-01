/*
    Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    An input string is valid if:
    - Open brackets are closed by the same type of brackets.
    - Open brackets are closed in the correct order.
    - Note that an empty string is also considered valid.

    Example:
    Input: "((()))"
    Output: True

    Input: "[()]{}"
    Output: True

    Input: "({[)]"
    Output: False
*/

// strategy: find the first closing bracket, see if the prior bracket matches, if so remove those two and repeat
function bracketChecker(brackets){
    let checker = -1;
    if(brackets.indexOf('()') > -1){
        checker = brackets.indexOf('()');
    } else if(brackets.indexOf('{}') > -1){
        checker = brackets.indexOf('{}');
    } else if(brackets.indexOf(['[]']) > -1){
        checker = brackets.indexOf(['[]']);
    }

    if(brackets.length === 0) {
        return true;
    }
    if(checker === -1) {
        return false;
    }

    let nextBrackets = brackets.slice(0, checker) + brackets.slice(checker+2, brackets.length);
    
    return bracketChecker(nextBrackets);
}

console.log(bracketChecker("((()))"));
console.log(bracketChecker("[()]{}"));
console.log(bracketChecker("({[)]"));
console.log(bracketChecker('[(({({})}))]'));
console.log(bracketChecker('[(({({})}))]]'));
console.log(bracketChecker('[({[{([{([(({[{[({[{({[]})}])}]}])}])}])}])})]([{[({[({[{([{([(({[{[({[{({[]})}])}])}])}])}])}])})]}])}]'));